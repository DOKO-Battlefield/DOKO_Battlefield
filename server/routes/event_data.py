# server/routes/event_data.py

from flask import make_response
from flask_restful import Resource

from config import api
from models.event_checkin import EventCheckin
from models.sport_play_log import SportPlayLog


class EventCheckinData(Resource):
    def get(self):
        checkins = EventCheckin.query.order_by(EventCheckin.created_at.desc()).all()

        data = []

        for checkin in checkins:
            user = checkin.user
            qr = checkin.qr_code

            data.append({
                "checkin_id": checkin.id,
                "user_id": user.id if user else None,
                "first_name": user.first_name if user else None,
                "last_name": user.last_name if user else None,
                "email": user.email if user else None,
                "phone": user.phone if user else None,
                "group_name": user.group_name if user else None,
                "code": qr.code if qr else None,
                "event_name": checkin.event_name,
                "age": checkin.age,
                "participant_type": checkin.participant_type,
                "guardian_name": checkin.guardian_name,
                "emergency_contact_name": checkin.emergency_contact_name,
                "emergency_contact_phone": checkin.emergency_contact_phone,
                "interests": checkin.interests,
                "photos_opt_in": checkin.photos_opt_in,
                "waiver_signed": checkin.waiver_signed,
                "agreed_terms": checkin.agreed_terms,
                "survey_sent_at": checkin.survey_sent_at.isoformat() if checkin.survey_sent_at else None,
                "created_at": checkin.created_at.isoformat() if checkin.created_at else None,
            })

        return make_response(data, 200)


class SportPlayLogData(Resource):
    def get(self):
        logs = SportPlayLog.query.order_by(SportPlayLog.played_at.desc()).all()

        data = []

        for log in logs:
            user = log.user
            qr = log.qr_code

            data.append({
                "log_id": log.id,
                "user_id": user.id if user else None,
                "first_name": user.first_name if user else None,
                "last_name": user.last_name if user else None,
                "email": user.email if user else None,
                "phone": user.phone if user else None,
                "code": qr.code if qr else None,
                "sport": log.sport,
                "staff_note": log.staff_note,
                "played_at": log.played_at.isoformat() if log.played_at else None,
            })

        return make_response(data, 200)


class EventSummaryData(Resource):
    def get(self):
        total_checkins = EventCheckin.query.count()
        total_play_logs = SportPlayLog.query.count()
        archery_count = SportPlayLog.query.filter_by(sport="archery").count()
        fencing_count = SportPlayLog.query.filter_by(sport="fencing").count()

        unique_players = (
            SportPlayLog.query.with_entities(SportPlayLog.user_id)
            .distinct()
            .count()
        )

        return make_response({
            "total_checkins": total_checkins,
            "total_play_logs": total_play_logs,
            "unique_players": unique_players,
            "archery_plays": archery_count,
            "fencing_plays": fencing_count,
        }, 200)


api.add_resource(EventCheckinData, "/event-data/checkins")
api.add_resource(SportPlayLogData, "/event-data/play-logs")
api.add_resource(EventSummaryData, "/event-data/summary")