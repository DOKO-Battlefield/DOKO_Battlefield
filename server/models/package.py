
from config import db
from sqlalchemy_serializer import SerializerMixin
from datetime import datetime

# server/models/package.py
class Package(db.Model, SerializerMixin):
    __tablename__ = 'packages'
    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(32), nullable=False)  # 'private_event' | 'team_building'
    title = db.Column(db.String(255), nullable=False)
    price = db.Column(db.Float, nullable=False)
    desc  = db.Column(db.Text, nullable=False)
    features = db.Column(db.JSON, nullable=False, default=list)
    active = db.Column(db.Boolean, default=True, nullable=False)
