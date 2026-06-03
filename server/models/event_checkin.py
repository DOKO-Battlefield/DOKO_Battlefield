from datetime import datetime
from sqlalchemy_serializer import SerializerMixin
from config import db


class EventCheckin(db.Model, SerializerMixin):
    __tablename__ = "event_checkins"

    id = db.Column(db.Integer, primary_key=True)

    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    qr_code_id = db.Column(db.Integer, db.ForeignKey("qr_codes.id"), nullable=True)

    event_name = db.Column(db.String(120), default="DOKO Pop-Up 2026")

    age = db.Column(db.Integer, nullable=False)
    participant_type = db.Column(db.String(50), default="participant")

    guardian_name = db.Column(db.String(120), nullable=True)
    emergency_contact_name = db.Column(db.String(120), nullable=False)
    emergency_contact_phone = db.Column(db.String(30), nullable=False)

    interests = db.Column(db.JSON, default=list)

    photos_opt_in = db.Column(db.Boolean, default=False)
    waiver_signed = db.Column(db.Boolean, default=False)
    agreed_terms = db.Column(db.Boolean, default=False)

    survey_sent_at = db.Column(db.DateTime, nullable=True)

    created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)

    user = db.relationship("User", backref="event_checkins")
    qr_code = db.relationship("QRCode", backref="event_checkins")

    def __repr__(self):
        return f"<EventCheckin id={self.id} user_id={self.user_id} event={self.event_name}>"