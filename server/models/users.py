#models/users.py
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates

from config import db, bcrypt
from models.association_table.user_room import user_rooms

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    serialize_rules = (
        '-created_at', '-updated_at', '-_password_hash'    
    )

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    _password_hash = db.Column(db.String(128), nullable=False)
    # bio = db.Column(db.String(500), default="Hi, I'm New To DOKO.")
    image = db.Column(db.String(500), default='https://static.vecteezy.com/system/resources/previews/016/774/588/original/3d-user-icon-on-transparent-background-free-png.png')
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())
    first_name = db.Column(db.String(500), default='John')
    last_name = db.Column(db.String(500), default='Doe')
    rooms = db.relationship('Room', secondary=user_rooms, back_populates='users')

     # User can have many Folders
    folders = db.relationship('Folder', back_populates='user', lazy=True)
    
    # User can have many Media
    medias = db.relationship('Media', back_populates='user', lazy=True)
    
    waiting_list = db.relationship('WaitingList', back_populates='user', lazy=True)

    @validates('username')
    def validate_username(self, key, username):
        if not username or len(username) < 3:
            raise ValueError('Username must be at least 3 characters long')
        
        if self.query.filter_by(username=username).first():
            raise ValueError('Username is already taken')
        
        return username


    @validates('email')
    def validate_email(self, key, email):
        if not email or '@' not in email:
            raise ValueError('Invalid email address')
        
        if self.query.filter_by(email=email).first():
            raise ValueError('Email is already registered')

        return email
    
    @property
    def password_hash(self):
        return self._password_hash

    @password_hash.setter
    def password_hash(self, password):
        self._password_hash = bcrypt.generate_password_hash(password).decode('utf-8')

    def set_password(self, password):
        self.password_hash = bcrypt.generate_password_hash(password).decode('utf-8')

    def authenticate(self, password):
        return bcrypt.check_password_hash(self.password_hash, password)
#
    def __repr__(self):
        return f'<User id={self.id} username={self.username} >'