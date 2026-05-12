

from config import db
from sqlalchemy_serializer import SerializerMixin
from datetime import datetime



# server/models/restaurant.py
class Restaurant(db.Model, SerializerMixin):
    __tablename__ = 'restaurants'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False, unique=True)
    description = db.Column(db.Text)
    hours = db.Column(db.String(100))
    location = db.Column(db.String(150))
    active = db.Column(db.Boolean, default=True, nullable=False)
    menus = db.relationship('Menu', back_populates='restaurant', cascade='all,delete')

class Menu(db.Model, SerializerMixin):
    __tablename__ = 'menus'
    id = db.Column(db.Integer, primary_key=True)
    restaurant_id = db.Column(db.Integer, db.ForeignKey('restaurants.id'), nullable=False)
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text)
    active = db.Column(db.Boolean, default=True, nullable=False)
    restaurant = db.relationship('Restaurant', back_populates='menus')
    items = db.relationship('MenuItem', back_populates='menu', cascade='all,delete')

class MenuItem(db.Model, SerializerMixin):
    __tablename__ = 'menu_items'
    id = db.Column(db.Integer, primary_key=True)
    menu_id = db.Column(db.Integer, db.ForeignKey('menus.id'), nullable=False)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text)
    price = db.Column(db.Float, nullable=False)
    tags = db.Column(db.String(100))
    menu = db.relationship('Menu', back_populates='items')
