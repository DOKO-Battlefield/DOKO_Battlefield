from config import db
from sqlalchemy_serializer import SerializerMixin
from datetime import datetime

# server/models/faq.py
class FAQ(db.Model, SerializerMixin):
    __tablename__ = 'faqs'
    id = db.Column(db.Integer, primary_key=True)
    question = db.Column(db.String(255), nullable=False)
    answer   = db.Column(db.Text, nullable=False)
    category = db.Column(db.String(64))
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    order = db.Column(db.Integer, default=0, nullable=False)
    active = db.Column(db.Boolean, default=True, nullable=False)
