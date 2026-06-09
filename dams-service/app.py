from flask import Flask
from flask_restful import Api, Resource
from flask_cors import CORS

from models.database import db
from models.session import Session
from models.telemetry import Telemetry

from routes.evaluate import Evaluate
from routes.telemetry import Telemetry as TelemetryRoute
from routes.telemetry_read import TelemetryList, LatestTelemetry
from routes.session import SessionList, SessionDetail, SessionEnd, SessionOverview
from routes.dashboard import DashboardOverview, DashboardLive, DashboardStats, DashboardAlerts


app = Flask(__name__)
CORS(app)
api = Api(app)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///dams.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db.init_app(app)


class HealthCheck(Resource):
    def get(self):
        return {"status": "D'AMS V1 server running"}, 200


api.add_resource(HealthCheck, "/")
api.add_resource(Evaluate, "/evaluate")
api.add_resource(SessionList, "/sessions")
api.add_resource(SessionOverview, "/sessions/all")
api.add_resource(SessionDetail, "/sessions/<string:session_id>")
api.add_resource(SessionEnd, "/sessions/<string:session_id>/end")
api.add_resource(TelemetryRoute, "/telemetry")
api.add_resource(TelemetryList, "/telemetry/all")
api.add_resource(LatestTelemetry, "/telemetry/latest")
api.add_resource(DashboardOverview,"/dashboard/overview")
api.add_resource(DashboardLive,"/dashboard/live")
api.add_resource(DashboardStats,"/dashboard/stats")
api.add_resource(DashboardAlerts, "/dashboard/alerts")



with app.app_context():
    db.create_all()


if __name__ == "__main__":
    app.run(port=5556, debug=True)