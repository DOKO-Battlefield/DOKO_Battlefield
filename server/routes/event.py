from flask import request, make_response
from flask_restful import Resource
from config import db, api
from models.event import Event
from sqlalchemy.exc import SQLAlchemyError
from datetime import datetime


class EventList(Resource):
    def get(self):
        events = Event.query.order_by(Event.date.asc()).all()
        event_data = [
            {
                "id": e.id,
                "title": e.title,
                "description": e.description,
                "date": e.date,
                "location": e.location,
                "is_public": e.is_public
            } for e in events
        ]
        return make_response(event_data, 200)

    def post(self):
        data = request.json
        try:
            new_event = Event(
                title=data.get("title"),
                description=data.get("description"),
                date=datetime.strptime(data.get("date"), "%Y-%m-%d %H:%M"),
                location=data.get("location"),
                is_public=data.get("is_public", True)
            )
            db.session.add(new_event)
            db.session.commit()
            return make_response({"message": "Event created."}, 201)
        except SQLAlchemyError as e:
            db.session.rollback()
            return make_response({"error": str(e)}, 400)


class EventById(Resource):
    def get(self, event_id):
        event = Event.query.get(event_id)
        if event:
            return make_response({
                "id": event.id,
                "title": event.title,
                "description": event.description,
                "date": event.date,
                "location": event.location,
                "is_public": event.is_public
            }, 200)
        return make_response({"message": "Event not found."}, 404)

    def delete(self, event_id):
        event = Event.query.get(event_id)
        if event:
            db.session.delete(event)
            db.session.commit()
            return make_response({"message": "Event deleted."}, 200)
        return make_response({"message": "Event not found."}, 404)


# Register routes
api.add_resource(EventList, "/events")
api.add_resource(EventById, "/events/<int:event_id>")
