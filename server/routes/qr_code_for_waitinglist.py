#routes/qr_code_for_waitinglist.py
from flask import make_response, request
from flask_restful import Resource
from config import db, api, app
from models.qr_code import QRCode
from models.waiting_list import WaitingList
from sqlalchemy.exc import SQLAlchemyError


class JoinWaitingList(Resource):
    def post(self):
        data = request.json
        user_id = data.get('user_id')
        room_id = data.get('room_id')

        try:
            existing_entry = WaitingList.query.filter_by(user_id=user_id, room_id=room_id).first()
            if existing_entry:
                return make_response({'message': 'You are already in the waiting list for this room.'}, 400)

            max_position = db.session.query(db.func.max(WaitingList.position)).filter_by(room_id=room_id).scalar() or 0
            new_entry = WaitingList(user_id=user_id, room_id=room_id, position=max_position + 1)
            db.session.add(new_entry)
            db.session.commit()

            return make_response({
                'message': 'Successfully added to the waiting list.',
                'position': new_entry.position
            }, 201)
        except SQLAlchemyError as e:
            db.session.rollback()
            return make_response({'error': str(e)}, 400)

api.add_resource(JoinWaitingList, '/scan/waiting-list')



