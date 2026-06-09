from models.database import db


class Session(db.Model):
    __tablename__ = "sessions"

    id = db.Column(db.Integer, primary_key=True)
    session_id = db.Column(db.String, unique=True, nullable=False)
    user_id = db.Column(db.String)
    device_id = db.Column(db.String)
    status = db.Column(db.String, default="ACTIVE")
    started_at = db.Column(db.String)
    ended_at = db.Column(db.String)
    latest_state = db.Column(db.String, default="NORMAL")
    telemetry_count = db.Column(db.Integer, default=0)
    max_heart_rate = db.Column(db.Integer, default=0)
    max_motion_score = db.Column(db.Integer, default=0)
    slow_events = db.Column(db.Integer, default=0)
    stop_events = db.Column(db.Integer, default=0)

    def to_dict(self):
        return {
            "session_id": self.session_id,
            "user_id": self.user_id,
            "device_id": self.device_id,
            "status": self.status,
            "started_at": self.started_at,
            "ended_at": self.ended_at,
            "latest_state": self.latest_state,
            "telemetry_count": self.telemetry_count,
            "summary": {
                "max_heart_rate": self.max_heart_rate,
                "max_motion_score": self.max_motion_score,
                "slow_events": self.slow_events,
                "stop_events": self.stop_events,
            },
        }