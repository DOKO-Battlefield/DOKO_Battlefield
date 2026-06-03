from datetime import datetime
from sqlalchemy_serializer import SerializerMixin
from config import db


class SportPlayLog(db.Model, SerializerMixin):
    __tablename__ = "sport_play_logs"

    id = db.Column(db.Integer, primary_key=True)

    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    qr_code_id = db.Column(db.Integer, db.ForeignKey("qr_codes.id"), nullable=True)

    sport = db.Column(db.String(50), nullable=False)  # archery or fencing
    staff_note = db.Column(db.String(255), nullable=True)

    played_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)

    user = db.relationship("User", backref="sport_play_logs")
    qr_code = db.relationship("QRCode", backref="sport_play_logs")

    def __repr__(self):
        return f"<SportPlayLog id={self.id} user_id={self.user_id} sport={self.sport}>"