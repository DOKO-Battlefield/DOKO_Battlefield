#routes/qrcode_room.py
from flask import make_response, request
from flask_restful import Resource
from config import db, api, app
from models.qr_code import QRCode
from models.room import Room
from sqlalchemy.exc import SQLAlchemyError

class ScanQRCode(Resource):
    def post(self):
        data = request.get_json()
        user_id = data.get('user_id')
        qr_code = data.get('qr_code')

        try:
            room = Room.query.filter_by(id=qr_code).first_or_404()
            room.users.append(User.query.get(user_id))
            db.session.commit()
            return make_response({'message': 'User linked to room', 'room_id': room.id}, 200)
        except SQLAlchemyError as e:
            db.session.rollback()
            return make_response({'error': str(e)}, 400)

api.add_resource(ScanQRCode, '/scan_qr')

class FetchRoomMedia(Resource):
    def get(self, room_id):
        user_id = request.args.get('user_id')
        try:
            media = Media.query.filter_by(room_id=room_id, user_id=user_id).all()
            return make_response({
                'media': [m.to_dict() for m in media]
            }, 200)
        except SQLAlchemyError as e:
            return make_response({'error': str(e)}, 400)

api.add_resource(FetchRoomMedia, '/rooms/<int:room_id>/media')