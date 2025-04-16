# utils/notifications.py
from datetime import datetime, timedelta
from models.waiting_list import WaitingList

from utils.hardware_api import trigger_necklace  # This can be a separate file too
from config import db

def notify_users():
    # from app import app 

    # with app.app_context():
        now = datetime.utcnow()
        five_minutes_from_now = now + timedelta(minutes=5)

    # Find users whose turn is in five minutes
        upcoming_turns = WaitingList.query.filter(
            WaitingList.position == 1,
            WaitingList.notified_at.is_(None),
            WaitingList.created_at <= five_minutes_from_now
        ).all()

        for entry in upcoming_turns:
            # Trigger notification (example color and action)
            trigger_necklace(entry.user_id, "buzz", "green")
            entry.notified_at = now
            db.session.commit()
