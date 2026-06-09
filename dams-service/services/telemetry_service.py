from datetime import datetime, timezone

from models.database import db
from models.telemetry import Telemetry
from engine.evaluator import evaluate_player
from services.session_service import update_session_with_telemetry


def process_telemetry(data):
    evaluation = evaluate_player(data)

    telemetry = Telemetry(
        device_id=data.get("device_id"),
        session_id=data.get("session_id"),
        motion_score=evaluation["motion_score"],
        heart_rate=evaluation["heart_rate"],
        repeated_hits=evaluation["repeated_hits"],
        state=evaluation["state"],
        reason=evaluation["reason"],
        fatigue_score=evaluation["fatigue_score"],
        timestamp=datetime.now(timezone.utc).isoformat(),
    )

    db.session.add(telemetry)
    db.session.commit()

    telemetry_dict = telemetry.to_dict()

    session = None
    if telemetry.session_id:
        session = update_session_with_telemetry(telemetry.session_id, telemetry_dict)

    print("D'AMS TELEMETRY:", telemetry_dict)

    return {
        "message": "Telemetry processed",
        "telemetry": telemetry_dict,
        "session": session,
    }


def get_all_telemetry():
    telemetry = Telemetry.query.order_by(Telemetry.id.desc()).all()
    return [item.to_dict() for item in telemetry]


def get_latest_telemetry():
    telemetry = Telemetry.query.order_by(Telemetry.id.desc()).first()
    return telemetry.to_dict() if telemetry else None