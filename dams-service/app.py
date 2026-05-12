from flask import Flask
from routes.evaluate import Evaluate

app = Flask(__name__)

@app.route('/')
def index():
    return '<h1>DOKO ADAPTIVE MOTION SYSTEM</h1>'


if __name__ == '__main__':
    app.run(port=5001, debug=True)