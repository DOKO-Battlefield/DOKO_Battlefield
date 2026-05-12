from flask import Blueprint, request, jsonify
from config import db
from models.session import Session
from datetime import datetime

session_bp = Blueprint('session', __name__)

# Start session
@session_bp.route('/sessions/start', methods=['POST'])
def start_session():
    data = request.get_json()

    session = Session(
        user_id=data['user_id'],
        qr_code_id=data.get('qr_code_id'),
        room_id=data.get('room_id'),
        experience_type=data.get('experience_type', 'doko')
    )

    db.session.add(session)
    db.session.commit()

    return jsonify({"session_id": session.id}), 201


# End session
@session_bp.route('/sessions/<int:session_id>/end', methods=['PATCH'])
def end_session(session_id):
    session = Session.query.get_or_404(session_id)

    data = request.get_json()

    session.status = "completed"
    session.ended_at = datetime.utcnow()

    session.rating = data.get('rating')
    session.dams_state = data.get('dams_state')
    session.heart_rate_min = data.get('heart_rate_min')
    session.heart_rate_max = data.get('heart_rate_max')
    session.summary_json = data.get('summary')

    db.session.commit()

    return jsonify(session.to_dict()), 200


# Get session
@session_bp.route('/sessions/<int:session_id>', methods=['GET'])
def get_session(session_id):
    session = Session.query.get_or_404(session_id)
    return jsonify(session.to_dict())


# Get all sessions for user
@session_bp.route('/users/<int:user_id>/sessions', methods=['GET'])
def get_user_sessions(user_id):
    sessions = Session.query.filter_by(user_id=user_id).all()
    return jsonify([s.to_dict() for s in sessions])