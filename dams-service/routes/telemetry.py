from flask import request
from flask_restful import Resource
from services.telemetry_service import process_telemetry


class Telemetry(Resource):
    def post(self):
        data = request.get_json() or {}
        result = process_telemetry(data)

        return result, 201