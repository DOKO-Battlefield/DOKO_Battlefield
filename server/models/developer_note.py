# server/models/developer_note.py
from config import db
from sqlalchemy_serializer import SerializerMixin

class DeveloperNote(db.Model, SerializerMixin):
    __tablename__ = 'developer_notes'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    body_md = db.Column(db.Text, nullable=False)
    is_published = db.Column(db.Boolean, default=False, nullable=False)
    published_at = db.Column(db.DateTime, server_default=db.func.now())
