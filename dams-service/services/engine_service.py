import requests

def send_dams_update(session_id, result):
    url = f"http://localhost:5000/sessions/{session_id}/dams-update"

    payload = {
        "state": result["state"],
        "heart_rate": result["heart_rate"],
        "movement_intensity": result["movement_intensity"],
        "fatigue_score": result["fatigue_score"],
        "reason": result["reason"]
    }

    try:
        requests.patch(url, json=payload)
    except Exception as e:
        print("Failed to send DAMS update:", e)