#routes/room.py
from flask import make_response, request
from flask_restful import Resource
from config import db, api, app
from models.room import Room
from sqlalchemy.exc import SQLAlchemyError

class CreateRoom(Resource):
    def post(self):
        data = request.get_json()
        try:
            room = Room(
                room_name=data.get('room_name'),
                sport_name=data.get('sport_name'),
                location=data.get('location')
            )
            db.session.add(room)
            db.session.commit()
            return make_response({'room_id': room.id}, 201)
        except SQLAlchemyError as e:
            db.session.rollback()
            return make_response({'error': str(e)}, 400)

api.add_resource(CreateRoom, '/rooms')

class FetchRoomDetails(Resource):
    def get(self, room_id):
        try:
            room = Room.query.get_or_404(room_id)
            return make_response(room.to_dict(), 200)
        except SQLAlchemyError as e:
            return make_response({'error': str(e)}, 400)

api.add_resource(FetchRoomDetails, '/rooms/<int:room_id>')
