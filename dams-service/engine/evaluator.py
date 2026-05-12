def evaluate_player(data):
    heart_rate = data.get("heart_rate", 0)
    movement = data.get("movement_level", "low")
    hit = data.get("hit_intensity", "none")
    repeated = data.get("repeated_hits", 0)

    # STOP
    if (
        heart_rate > 170 or
        repeated >= 5 or
        (hit == "heavy" and heart_rate > 150)
    ):
        return {"state": "STOP", "reason": "overload detected"}

    # SLOW
    if (
        (140 <= heart_rate <= 165) or
        (movement == "high" and heart_rate > 130) or
        repeated >= 3
    ):
        return {"state": "SLOW", "reason": "elevated strain"}

    return {"state": "NORMAL", "reason": "stable"}