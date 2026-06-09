from datetime import datetime, timezone
import uuid

from models.database import db
from models.session import Session


def create_session(data):
    session_id = data.get("session_id") or f"SESSION-{uuid.uuid4().hex[:8].upper()}"

    session = Session(
        session_id=session_id,
        user_id=data.get("user_id"),
        device_id=data.get("device_id"),
        status="ACTIVE",
        started_at=datetime.now(timezone.utc).isoformat(),
        ended_at=None,
        latest_state="NORMAL",
        telemetry_count=0,
        max_heart_rate=0,
        max_motion_score=0,
        slow_events=0,
        stop_events=0,
    )

    db.session.add(session)
    db.session.commit()

    return session.to_dict()


def get_session(session_id):
    session = Session.query.filter_by(session_id=session_id).first()
    return session.to_dict() if session else None


def get_all_sessions():
    sessions = Session.query.order_by(Session.id.desc()).all()
    return [session.to_dict() for session in sessions]


def update_session_with_telemetry(session_id, telemetry):
    session = Session.query.filter_by(session_id=session_id).first()

    if not session:
        return None

    session.telemetry_count += 1
    session.latest_state = telemetry.get("state", session.latest_state)

    heart_rate = telemetry.get("heart_rate") or 0
    motion_score = telemetry.get("motion_score") or 0

    session.max_heart_rate = max(session.max_heart_rate or 0, heart_rate)
    session.max_motion_score = max(session.max_motion_score or 0, motion_score)

    if telemetry.get("state") == "SLOW":
        session.slow_events += 1

    if telemetry.get("state") == "STOP":
        session.stop_events += 1

    db.session.commit()

    return session.to_dict()


def end_session(session_id, data=None):
    session = Session.query.filter_by(session_id=session_id).first()

    if not session:
        return None

    session.status = "ENDED"
    session.ended_at = datetime.now(timezone.utc).isoformat()

    db.session.commit()

    return session.to_dict()