from engine.rules import (
    NORMAL, SLOW, STOP,
    HEART_RATE_SLOW, HEART_RATE_STOP,
    MOTION_SLOW, MOTION_STOP,
    REPEATED_HITS_SLOW, REPEATED_HITS_STOP
)

def evaluate_player(data):
    heart_rate = int(data.get("heart_rate", 0) or 0)
    motion_score = int(data.get("motion_score", 0) or 0)
    repeated_hits = int(data.get("repeated_hits", 0) or 0)

    fatigue_score = 0

    if heart_rate >= HEART_RATE_SLOW:
        fatigue_score += 30

    if heart_rate >= HEART_RATE_STOP:
        fatigue_score += 50

    if motion_score >= MOTION_SLOW:
        fatigue_score += 20

    if motion_score >= MOTION_STOP:
        fatigue_score += 40

    if repeated_hits >= REPEATED_HITS_SLOW:
        fatigue_score += 20

    if repeated_hits >= REPEATED_HITS_STOP:
        fatigue_score += 40

    if heart_rate >= HEART_RATE_STOP or motion_score >= MOTION_STOP or repeated_hits >= REPEATED_HITS_STOP:
        state = STOP
        reason = "overload detected"
    elif heart_rate >= HEART_RATE_SLOW or motion_score >= MOTION_SLOW or repeated_hits >= REPEATED_HITS_SLOW:
        state = SLOW
        reason = "elevated strain"
    else:
        state = NORMAL
        reason = "stable"

    return {
        "state": state,
        "reason": reason,
        "heart_rate": heart_rate,
        "motion_score": motion_score,
        "repeated_hits": repeated_hits,
        "fatigue_score": fatigue_score
    }