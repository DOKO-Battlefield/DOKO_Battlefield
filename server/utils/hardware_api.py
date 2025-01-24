# utils/hardware_api.py
import requests

def trigger_necklace(user_id, action, color):
    """
    Simulate triggering a necklace (hardware interaction).
    """
    response = requests.post(f'https://necklace-hardware-api/{user_id}/action', json={
        'action': action,
        'color': color
    })
    return response.status_code == 200
