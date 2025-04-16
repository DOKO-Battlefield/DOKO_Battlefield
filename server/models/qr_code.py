#models/qr_code.py
from sqlalchemy_serializer import SerializerMixin
from datetime import datetime
from config import db


class QRCode(db.Model, SerializerMixin):
    __tablename__ = 'qr_codes'

    id = db.Column(db.Integer, primary_key=True)
    code = db.Column(db.String(100), unique=True, nullable=False)  # Represents QR string (necklace)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    room_id = db.Column(db.Integer, db.ForeignKey('rooms.id'))
    created_at = db.Column(db.DateTime, server_default=db.func.now())

    user = db.relationship('User', backref='qr_code')
    room = db.relationship('Room', backref='qr_codes')

    def __repr__(self):
            return f'<QRCode id={self.id} room_id={self.room_id} user_id={self.user_id}>'