# routes/dashboard.py

from flask_restful import Resource

from services.analytics_service import (
    get_dashboard_overview,
    get_live_status,
    get_stats,
    get_alerts
)
class DashboardOverview(Resource):

    def get(self):
        return get_dashboard_overview(), 200
    
class DashboardLive(Resource):

    def get(self):
        return get_live_status(), 200

class DashboardStats(Resource):

    def get(self):
        return get_stats(), 200
    
class DashboardAlerts(Resource):

    def get(self):
        return get_alerts(), 200