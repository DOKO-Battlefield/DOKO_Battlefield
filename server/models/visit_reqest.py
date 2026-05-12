
from config import db
from sqlalchemy_serializer import SerializerMixin
from datetime import datetime

# server/models/visit_request.py
class VisitRequest(db.Model, SerializerMixin):
    __tablename__ = 'visit_requests'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    phone = db.Column(db.String(40), nullable=False)
    date_pref = db.Column(db.String(64))   # or Date if you prefer
    party_size = db.Column(db.Integer)
    notes = db.Column(db.Text)
    status = db.Column(db.String(32), default='new', nullable=False)  # new|contacted|scheduled|closed
    created_at = db.Column(db.DateTime, server_default=db.func.now())
