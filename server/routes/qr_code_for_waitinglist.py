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


class WaitingListStatus(Resource):
    def get(self, qr_code):
        try:
            qr = QRCode.query.filter_by(code=qr_code).first()
            if not qr:
                return make_response({"message": "Invalid QR code."}, 404)

            entry = WaitingList.query.filter_by(user_id=qr.user_id).first()
            if not entry:
                return make_response({
                    "message": "User not in queue",
                    "color": "off",
                    "buzz": False
                }, 200)


            # Room color mapping (you can adjust as needed)
            room_colors = {
                "Room 1": "red",
                "Room 2": "green",
                "Room 3": "blue",
                "Room 4": "yellow",
                "Room 5": "cyan",
                "Room 6": "magenta",
                "Room 7": "orange",
                "Room 8": "purple",
                "Room 9": "white"
            }

            color = room_colors.get(entry.room_id, "white")
            buzz = entry.position == 1  # Buzz if it's the user's turn

            return make_response({
                "room": entry.room.room_name,
                "color": color,
                "buzz": buzz,
                "position": entry.position
            }, 200)

        except SQLAlchemyError as e:
            return make_response({'error': str(e)}, 400)


# Add both resources
api.add_resource(JoinWaitingList, '/scan/waiting-list')
api.add_resource(WaitingListStatus, '/waiting_list_status/<string:user_id>', endpoint='waiting_list_status')

