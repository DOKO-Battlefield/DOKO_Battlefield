#models/qr_code.py
from sqlalchemy_serializer import SerializerMixin
from datetime import datetime
from config import db


class QRCode(db.Model, SerializerMixin):
    __tablename__ = 'qrcodes'

    serialize_rules =('-users', '-rooms')

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    room_id = db.Column(db.Integer, db.ForeignKey('rooms.id'), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)

def __repr__(self):
        return f'<QRCode id={self.id} room_id={self.room_id} user_id={self.user_id}>'