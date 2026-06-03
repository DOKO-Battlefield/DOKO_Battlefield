#models/waiting_list.py
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates

from datetime import datetime
from config import db

class WaitingList(db.Model, SerializerMixin):
    __tablename__ = 'waiting_list'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    room_id = db.Column(db.Integer, db.ForeignKey('rooms.id'), nullable=False)
    position = db.Column(db.Integer, nullable=False)  # The user's position in line
    notified_at = db.Column(db.DateTime, nullable=True)  # Timestamp when notified
    created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)

    user = db.relationship('User', back_populates='waiting_list')
    room = db.relationship('Room', back_populates='waiting_list')

    def __repr__(self):
        return f'<WaitingList id={self.id} user_id={self.user_id} room_id={self.room_id} position={self.position}>'
