from flask import request
from flask_restful import Resource

from engine.evaluator import evaluate_player


class Evaluate(Resource):
    def post(self):
        data = request.get_json() or {}
        result = evaluate_player(data)

        return result, 200