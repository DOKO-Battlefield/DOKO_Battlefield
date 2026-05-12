# server/models/media.py
from sqlalchemy_serializer import SerializerMixin
from datetime import datetime
from config import db

class Media(db.Model, SerializerMixin):
    __tablename__ = 'medias'

    serialize_rules = ('-user', '-folder',)  # hide heavy relationships

    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(200), nullable=False)     # 'photo' | 'video'
    url = db.Column(db.String(500), nullable=False)
    room_id = db.Column(db.Integer, db.ForeignKey('rooms.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    folder_id = db.Column(db.Integer, db.ForeignKey('folders.id'))
    timestamp = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
    is_public = db.Column(db.Boolean, default=False, nullable=False)
    approved  = db.Column(db.Boolean, default=False, nullable=False)
    checksum  = db.Column(db.String(64))  # optional content hash
 
    session_id = db.Column(db.Integer, db.ForeignKey('sessions.id'), nullable=True)
    
    user = db.relationship('User', back_populates='medias')
    folder = db.relationship('Folder', back_populates='medias')

    def to_dict(self):
        return {
            'id': self.id,
            'type': self.type,
            'url': self.url,
            'user_id': self.user_id,
            'room_id': self.room_id,
            'timestamp': self.timestamp.isoformat(),
            'is_public': self.is_public,
            'approved': self.approved
        }

    def __repr__(self):
        return f'<Media id={self.id} type={self.type} url={self.url} user_id={self.user_id} room_id={self.room_id}>'
