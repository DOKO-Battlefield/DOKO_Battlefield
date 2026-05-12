

from config import db
from sqlalchemy_serializer import SerializerMixin
from datetime import datetime

# server/models/gallery_curation.py
class GalleryCuration(db.Model, SerializerMixin):
    __tablename__ = 'gallery_curation'
    id = db.Column(db.Integer, primary_key=True)
    media_id = db.Column(db.Integer, db.ForeignKey('medias.id'), nullable=False)
    featured = db.Column(db.Boolean, default=False, nullable=False)
    order = db.Column(db.Integer, default=0, nullable=False)

    media = db.relationship('Media')
