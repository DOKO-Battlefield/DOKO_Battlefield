from flask import request, make_response
from flask_restful import Resource
from config import db, api

class EventSurvey(Resource):
    def post(self):
        data = request.get_json()

        rating = data.get("rating")
        favorite_sport = data.get("favorite_sport")
        comments = data.get("comments")

        print({
            "rating": rating,
            "favorite_sport": favorite_sport,
            "comments": comments,
        })

        return make_response(
            {"message": "Survey submitted successfully"},
            201
        )

api.add_resource(EventSurvey, "/survey")