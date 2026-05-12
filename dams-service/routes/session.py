@session_bp.route('/sessions/<int:session_id>/dams-update', methods=['PATCH'])
def update_dams_state(session_id):
    session = Session.query.get_or_404(session_id)
    data = request.get_json()

    # Update current state
    session.dams_state = data.get('state')

    # Update heart rate tracking
    current_hr = data.get('heart_rate')

    if current_hr:
        if not session.heart_rate_min or current_hr < session.heart_rate_min:
            session.heart_rate_min = current_hr

        if not session.heart_rate_max or current_hr > session.heart_rate_max:
            session.heart_rate_max = current_hr

    # Store rolling summary (optional but powerful)
    session.summary_json = data.get('summary', session.summary_json)

    db.session.commit()

    return jsonify({"message": "DAMS data updated"}), 200