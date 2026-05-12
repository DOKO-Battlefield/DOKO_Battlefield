# server/routes/claim.py
from datetime import datetime
from flask import request, make_response
from flask_restful import Resource
from sqlalchemy.exc import SQLAlchemyError

from config import db, api
from models.qr_code import QRCode
from models.users import User

class ClaimAccount(Resource):
    def post(self):
        data = request.get_json() or {}
        code = (data.get("code") or "").strip()
        email = (data.get("email") or "").strip()
        password = data.get("password") or ""

        if not code or not email or not password:
            return make_response({"error": "code, email, password are required"}, 400)

        try:
            qr = QRCode.query.filter_by(code=code).first()
            if not qr:
                return make_response({"error": "Invalid code"}, 404)

            user = User.query.get(qr.user_id)
            if not user:
                return make_response({"error": "User not found"}, 404)

            if not user.is_guest:
                return make_response({"error": "This account is already claimed"}, 400)

            # privacy: require matching email
            if user.email.lower() != email.lower():
                return make_response({"error": "Email does not match this code"}, 403)

            # claim it
            user.set_password(password)
            user.is_guest = False
            user.claimed_at = datetime.utcnow()

            db.session.commit()

            return make_response({"message": "Account claimed", "user_id": user.id}, 200)

        except SQLAlchemyError as e:
            db.session.rollback()
            return make_response({"error": str(e)}, 400)
        except Exception:
            db.session.rollback()
            return make_response({"error": "Something went wrong"}, 400)

api.add_resource(ClaimAccount, "/claim")
