# server/routes/kiosk.py

import secrets
from datetime import datetime

from flask import request, make_response
from flask_restful import Resource
from sqlalchemy.exc import SQLAlchemyError

from config import db, api
from models.users import User
from models.qr_code import QRCode
from models.event_checkin import EventCheckin


class KioskCheckin(Resource):
    def post(self):
        data = request.get_json() or {}
        print("KIOSK CHECKIN DATA:", data)

        first_name = data.get("first_name", "").strip()
        last_name = data.get("last_name", "").strip()
        username = data.get("username", "").strip()
        email = data.get("email", "").strip().lower()
        phone = data.get("phone", "").strip()
        group_name = data.get("group_name", "").strip()
        room_id = data.get("room_id", 1)

        age = data.get("age")
        participant_type = data.get("participant_type", "participant")
        guardian_name = data.get("guardian_name", "").strip()
        emergency_contact_name = data.get("emergency_contact_name", "").strip()
        emergency_contact_phone = data.get("emergency_contact_phone", "").strip()

        interests = data.get("interests", [])
        photos_opt_in = data.get("photos_opt_in", False)
        waiver_signed = data.get("waiver_signed", False)
        agreed_terms = data.get("agreed_terms", False)

        safe_username = f"{username}-{int(datetime.utcnow().timestamp())}"

        try:
            room_id = int(room_id)
            age = int(age)
        except (TypeError, ValueError):
            return make_response({"error": "Invalid age or room ID"}, 400)

        if not first_name or not last_name or not username or not email:
            return make_response({"error": "Missing required user fields"}, 400)

        if not age or not emergency_contact_name or not emergency_contact_phone:
            return make_response({"error": "Missing event safety fields"}, 400)

        if age < 18 and not guardian_name:
            return make_response({"error": "Guardian name is required for minors"}, 400)

        if not waiver_signed or not agreed_terms:
            return make_response({"error": "Waiver and terms must be accepted"}, 400)

        try:
            temp_pw = secrets.token_urlsafe(18)

            user = User(
                first_name=first_name,
                last_name=last_name,
                username=safe_username,
                email=email,
                phone=phone,
                group_name=group_name,
                is_guest=True,
                claimed_at=None,
                email_verified=False,
            )

            user.set_password(temp_pw)

            db.session.add(user)
            db.session.flush()

            code = f"DOKO-{user.id}-{int(datetime.utcnow().timestamp())}"

            qr = QRCode(
                code=code,
                user_id=user.id,
                room_id=room_id,
            )

            db.session.add(qr)
            db.session.flush()

            event_checkin = EventCheckin(
                user_id=user.id,
                qr_code_id=qr.id,
                age=age,
                participant_type=participant_type,
                guardian_name=guardian_name,
                emergency_contact_name=emergency_contact_name,
                emergency_contact_phone=emergency_contact_phone,
                interests=interests,
                photos_opt_in=photos_opt_in,
                waiver_signed=waiver_signed,
                agreed_terms=agreed_terms,
            )

            db.session.add(event_checkin)
            db.session.commit()

            return make_response(
                {
                    "message": "Check-in successful",
                    "user_id": user.id,
                    "code": code,
                    "event_checkin_id": event_checkin.id,
                    "event_data": {
                        "age": age,
                        "participant_type": participant_type,
                        "guardian_name": guardian_name,
                        "emergency_contact_name": emergency_contact_name,
                        "emergency_contact_phone": emergency_contact_phone,
                        "interests": interests,
                        "photos_opt_in": photos_opt_in,
                        "waiver_signed": waiver_signed,
                        "agreed_terms": agreed_terms,
                    },
                },
                201,
            )

        except SQLAlchemyError as e:
            db.session.rollback()
            print("SQLALCHEMY ERROR:", e)
            return make_response({"error": str(e)}, 400)

        except Exception as e:
            db.session.rollback()
            print("KIOSK CHECKIN ERROR:", e)
            return make_response({"error": str(e)}, 400)


api.add_resource(KioskCheckin, "/kiosk/checkin")
