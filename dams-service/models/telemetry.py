from models.database import db


class Telemetry(db.Model):
    __tablename__ = "telemetry"

    id = db.Column(db.Integer, primary_key=True)
    session_id = db.Column(db.String)
    device_id = db.Column(db.String)
    motion_score = db.Column(db.Integer)
    heart_rate = db.Column(db.Integer)
    repeated_hits = db.Column(db.Integer)
    fatigue_score = db.Column(db.Integer)
    state = db.Column(db.String)
    reason = db.Column(db.String)
    timestamp = db.Column(db.String)

    def to_dict(self):
        return {
            "id": self.id,
            "session_id": self.session_id,
            "device_id": self.device_id,
            "motion_score": self.motion_score,
            "heart_rate": self.heart_rate,
            "repeated_hits": self.repeated_hits,
            "fatigue_score": self.fatigue_score,
            "state": self.state,
            "reason": self.reason,
            "timestamp": self.timestamp,
        }