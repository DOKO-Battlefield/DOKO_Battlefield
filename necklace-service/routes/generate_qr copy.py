# routes/generate_qr.py
import qrcode
import io
import base64
from flask import make_response, request
from flask_restful import Resource
from models.qr_code import QRCode
from config import db, api
from sqlalchemy.exc import SQLAlchemyError
from datetime import datetime

class GenerateQRCode(Resource):
    def post(self):
        data = request.get_json()
        user_id = data.get('user_id')
        room_id = data.get('room_id')

        if not user_id:
            return make_response({'error': 'Missing user_id'}, 400)

        try:
            # Step 1: Create unique code
            code = f"DOKO-{user_id}-{int(datetime.utcnow().timestamp())}"

            # Step 2: Save to DB
            new_qr = QRCode(code=code, user_id=user_id, room_id=room_id)
            db.session.add(new_qr)
            db.session.commit()

            # Step 3: Generate QR image as base64
            qr = qrcode.make(code)
            buf = io.BytesIO()
            qr.save(buf, format='PNG')
            qr_b64 = base64.b64encode(buf.getvalue()).decode('utf-8')

            # Step 4: Return JSON with base64 image
            return {
                "code": code,
                "qr_image": f"data:image/png;base64,{qr_b64}"
            }

        except SQLAlchemyError as e:
            db.session.rollback()
            return make_response({'error': str(e)}, 500)

# Register the route
api.add_resource(GenerateQRCode, '/generate_qr')
