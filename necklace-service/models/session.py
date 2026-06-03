from config import db
from datetime import datetime

class Session(db.Model):
    __tablename__ = 'sessions'

    id = db.Column(db.Integer, primary_key=True)

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    qr_code_id = db.Column(db.Integer, db.ForeignKey('qr_codes.id'), nullable=True)
    room_id = db.Column(db.Integer, db.ForeignKey('rooms.id'), nullable=True)

    experience_type = db.Column(db.String(50), default="doko")  # doko / naqi / training

    status = db.Column(db.String(50), default="active")  # active / completed

    started_at = db.Column(db.DateTime, default=datetime.utcnow)
    ended_at = db.Column(db.DateTime, nullable=True)

    rating = db.Column(db.Float, nullable=True)
    dams_state = db.Column(db.String(50), nullable=True)

    heart_rate_min = db.Column(db.Integer, nullable=True)
    heart_rate_max = db.Column(db.Integer, nullable=True)

    summary_json = db.Column(db.JSON, nullable=True)

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "room_id": self.room_id,
            "status": self.status,
            "experience_type": self.experience_type,
            "started_at": self.started_at,
            "ended_at": self.ended_at,
            "rating": self.rating,
            "dams_state": self.dams_state,
            "heart_rate_min": self.heart_rate_min,
            "heart_rate_max": self.heart_rate_max,
            "summary": self.summary_json
        }