from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from datetime import datetime

from config import db

class Folder(db.Model, SerializerMixin):
    __tablename__ = 'folders'

    serialize_rules = ('-user_folders', '-room_folders')

    id = db.Column(db.Integer, primary_key=True)
    room_id = db.Column(db.Integer, db.ForeignKey('rooms.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow, nullable=False) #Time when the media was captured.

 # Folder can have many Media
    medias = db.relationship('Media', back_populates='folder', lazy=True)

    # Folder belongs to one user and one room
    user = db.relationship('User', back_populates='folders')
    room = db.relationship('Room', back_populates='folders')

    def to_dict(self):
        return {
            'id': self.id,
            'timestamp': self.timestamp,
            'user_id': self.user_id,
            'room_id': self.room_id
        }

    def __repr__(self):
        return f'<Media id={self.id} timestamp={self.timestamp} user_id={self.user_id} room_id={self.room_id}>'