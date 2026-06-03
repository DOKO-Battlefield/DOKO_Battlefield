# utils/hardware_api.py
import requests

def trigger_necklace(user_id, action, color):
    """
    Simulate triggering a necklace (hardware interaction).
    """
    response = requests.post(f'https://wokwi.com/projects/425958698147193857', json={
        'action': action,
        'color': color
    })
    return response.status_code == 200
