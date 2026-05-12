from flask import Blueprint, request, jsonify
from engine.evaluator import evaluate_player

evaluate_bp = Blueprint('evaluate', __name__)

@evaluate_bp.route('/evaluate', methods=['POST'])
def evaluate():
    data = request.get_json()

    result = evaluate_player(data)

    return jsonify(result), 200