from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

from config import db
from association_table.user_room import user_rooms

class Room(db.Model, SerializerMixin):
    __tablename__ = 'rooms'

serialize_rules = ('-users')

id = db.Column(db.Integer, primary_key=True)
sport_name = db.Column(db.String(100), nullable=False) #(e.g., "Fencing", "Dagger Throwing").
location = db.Column(db.String(200), nullable=False) #address
room_name= db.Column(db.String(100), nullable=False) #(e.g., "Room 101", "Location A").
users = db.relationship('User', secondary='user_rooms', back_populates='rooms', lazy=True)  # Many-to-many relationship with User

def __repr__(self):
    return f'<Room id={self.id} name={self.name} location={self.location}>'