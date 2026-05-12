#models/event.py
from sqlalchemy_serializer import SerializerMixin
from datetime import datetime
from config import db

# server/models/event.py
class Event(db.Model, SerializerMixin):
    __tablename__ = 'events'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(150), nullable=False)
    description = db.Column(db.Text, nullable=False)
    starts_at = db.Column(db.DateTime, nullable=False)
    ends_at   = db.Column(db.DateTime, nullable=True)
    location  = db.Column(db.String(150), nullable=True)
    is_public = db.Column(db.Boolean, default=True, nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    status = db.Column(db.String(32), default='scheduled', nullable=False)  # scheduled|canceled|past
