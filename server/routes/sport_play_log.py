from flask import request, make_response
from flask_restful import Resource
from sqlalchemy.exc import SQLAlchemyError

from config import db, api, app
from models.qr_code import QRCode
from models.sport_play_log import SportPlayLog


class SportPlayLogResource(Resource):
    def post(self):
        data = request.get_json() or {}

        code = data.get("code", "").strip()
        sport = data.get("sport", "").strip().lower()
        staff_note = data.get("staff_note", "").strip()

        if not code:
            return make_response({"error": "QR/code is required"}, 400)

        if sport not in ["archery", "fencing"]:
            return make_response({"error": "Sport must be archery or fencing"}, 400)

        qr = QRCode.query.filter_by(code=code).first()

        if not qr:
            return make_response({"error": "Invalid QR/code"}, 404)

        try:
            log = SportPlayLog(
                user_id=qr.user_id,
                qr_code_id=qr.id,
                sport=sport,
                staff_note=staff_note,
            )

            db.session.add(log)
            db.session.commit()

            return make_response(
                {
                    "message": "Play logged successfully",
                    "user_id": qr.user_id,
                    "code": qr.code,
                    "sport": sport,
                    "played_at": log.played_at.isoformat(),
                },
                201,
            )

        except SQLAlchemyError as e:
            db.session.rollback()
            print("SPORT PLAY LOG ERROR:", e)
            return make_response({"error": str(e)}, 400)


api.add_resource(SportPlayLogResource, "/api/kiosk/play-log")
# @api.app.route("/test-play-log-route")
# def test_play_log_route():
#     return {"message": "sport play log route file loaded"}

# @app.route("/kiosk/play-log", methods=["POST", "OPTIONS"])
# def sport_play_log_route():
#     if request.method == "OPTIONS":
#         return make_response({}, 200)

#     return SportPlayLogResource().post()