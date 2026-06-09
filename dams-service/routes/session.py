from flask import request
from flask_restful import Resource

from services.session_service import (
    create_session,
    get_session,
    get_all_sessions,
    end_session,
)


class SessionList(Resource):
    def post(self):
        data = request.get_json() or {}
        result = create_session(data)
        return result, 201


class SessionOverview(Resource):
    def get(self):
        return get_all_sessions(), 200


class SessionDetail(Resource):
    def get(self, session_id):
        result = get_session(session_id)

        if not result:
            return {"error": "Session not found"}, 404

        return result, 200


class SessionEnd(Resource):
    def patch(self, session_id):
        data = request.get_json() or {}
        result = end_session(session_id, data)

        if not result:
            return {"error": "Session not found"}, 404

        return result, 200