import requests

DAMS_URL = "http://localhost:5001/evaluate"

def send_to_dams(data):
    response = requests.post(DAMS_URL, json=data)
    return response.json()