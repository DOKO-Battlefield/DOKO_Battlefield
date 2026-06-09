from flask_restful import Resource

from services.telemetry_service import get_all_telemetry, get_latest_telemetry


class TelemetryList(Resource):
    def get(self):
        return get_all_telemetry(), 200


class LatestTelemetry(Resource):
    def get(self):
        telemetry = get_latest_telemetry()

        if not telemetry:
            return {"message": "No telemetry available"}, 404

        return telemetry, 200
    