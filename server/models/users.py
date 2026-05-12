# server/models/users.py
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates
from config import db, bcrypt
from models.association_table.user_room import user_rooms

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'
    serialize_rules = ('-created_at','-updated_at','-_password_hash',)

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), nullable=False, unique=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    _password_hash = db.Column(db.String(128), nullable=False)

    image = db.Column(
        db.String(500),
        default='https://static.vecteezy.com/system/resources/previews/016/774/588/original/3d-user-icon-on-transparent-background-free-png.png'
    )
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())
    first_name = db.Column(db.String(120), default='John')
    last_name  = db.Column(db.String(120), default='Doe')

    # ✅ Guest/Claim fields
    is_guest = db.Column(db.Boolean, nullable=False, server_default=db.text("true"))
    claimed_at = db.Column(db.DateTime, nullable=True)
    email_verified = db.Column(db.Boolean, nullable=False, server_default=db.text("false"))

    phone = db.Column(db.String(30), nullable=True)
    group_name = db.Column(db.String(120), nullable=True)
    
    rooms = db.relationship('Room', secondary=user_rooms, back_populates='users')
    folders = db.relationship('Folder', back_populates='user', lazy=True)
    medias  = db.relationship('Media', back_populates='user', lazy=True)
    waiting_list = db.relationship('WaitingList', back_populates='user', lazy=True)

    @validates('username')
    def validate_username(self, key, v):
        if not v or len(v) < 3: raise ValueError('Username must be at least 3 characters')
        if User.query.filter(User.username==v, User.id != self.id).first(): raise ValueError('Username is already taken')
        return v

    @validates('email')
    def validate_email(self, key, v):
        if not v or '@' not in v: raise ValueError('Invalid email address')
        if User.query.filter(User.email==v, User.id != self.id).first(): raise ValueError('Email is already registered')
        return v

    @property
    def password(self):
        return self._password_hash

    @password.setter
    def password(self, raw):
        self._password_hash = bcrypt.generate_password_hash(raw).decode('utf-8')

    def set_password(self, raw):
        self.password = raw

    def authenticate(self, raw):
        return bcrypt.check_password_hash(self._password_hash, raw)

    def __repr__(self):
        return f'<User id={self.id} username={self.username}>'
