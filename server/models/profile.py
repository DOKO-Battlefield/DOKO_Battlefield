#models/profile.py
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates

from config import db

class Profile(db.Model):
    __tablename__ = 'profiles'
    
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    bio = db.Column(db.String(255))
    avatar_url = db.Column(db.String(255))

    user = db.relationship('User', backref=db.backref('profile', uselist=False))

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'bio': self.bio,
            'avatar_url': self.avatar_url,
        }

