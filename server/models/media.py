from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from datetime import datetime
from config import db

class Media(db.Model, SerializerMixin):
    __tablename__ = 'medias'

    serialize_rules = ('user_medias')
    id = db.Column(db.Integer, primary_key=True)
    media_type= db.Column(db.String(200), nullable=False)
    media_url = db.Column(db.String(200), nullable=False)
    room_id = db.Column(db.Integer, db.ForeignKey('rooms.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow, nullable=False) #Time when the media was captured.

 # Media belongs to one user and one folder
    user = db.relationship('User', back_populates='medias')
    folder = db.relationship('Folder', back_populates='medias')
    
    def to_dict(self):
        return {
            'id': self.id,
            'media_type': self.media_type,
            'media_url': self.media_url,
            'user_id': self.user_id,
            'room_id': self.room_id
        }

    def __repr__(self):
        return f'<Media id={self.id} media_type={self.media_type} media_url={self.media_url} user_id={self.user_id} room_id={self.room_id}>'