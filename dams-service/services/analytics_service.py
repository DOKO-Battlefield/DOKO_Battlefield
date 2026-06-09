# services/analytics_service.py

from models.session import Session
from models.telemetry import Telemetry

def get_dashboard_overview():
    sessions = Session.query.all()
    telemetry = Telemetry.query.all()

    return {
        "total_sessions": len(sessions),
        "total_telemetry": len(telemetry),
        "active_sessions": len([s for s in sessions if s.status == "ACTIVE"])
    }

def get_live_status():

    latest = (
        Telemetry.query
        .order_by(Telemetry.id.desc())
        .first()
    )

    if not latest:
        return {"message": "No telemetry"}

    return {
        "heart_rate": latest.heart_rate,
        "motion_score": latest.motion_score,
        "fatigue_score": latest.fatigue_score,
        "state": latest.state
    }

def get_stats():

    telemetry = Telemetry.query.all()

    if not telemetry:
        return {}

    return {
        "highest_heart_rate":
            max(t.heart_rate for t in telemetry),

        "highest_motion_score":
            max(t.motion_score for t in telemetry),

        "slow_events":
            len([t for t in telemetry if t.state == "SLOW"]),

        "stop_events":
            len([t for t in telemetry if t.state == "STOP"])
    }

def get_alerts():

    alerts = Telemetry.query.filter(
        Telemetry.state == "STOP"
    ).all()

    return [
        {
            "session_id": a.session_id,
            "reason": a.reason,
            "heart_rate": a.heart_rate
        }
        for a in alerts
    ]