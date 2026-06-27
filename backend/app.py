from flask import Flask
from flask_cors import CORS

from routes.dashboard import dashboard_bp
from routes.detection import detection_bp

app = Flask(__name__)

CORS(app)

app.config["MAX_CONTENT_LENGTH"] = 50 * 1024 * 1024

app.register_blueprint(dashboard_bp, url_prefix="/api")
app.register_blueprint(detection_bp, url_prefix="/api")


@app.route("/")
def home():

    return {
        "success": True,
        "application": "VisionGuard AI",
        "message": "Backend Running"
    }


if __name__ == "__main__":

    app.run(debug=True)