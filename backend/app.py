from flask import Flask, send_from_directory
from flask_cors import CORS
import os
from routes.webcam import webcam_bp
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

app.register_blueprint(
    webcam_bp,
    url_prefix="/api"
)
@app.route("/uploads/results/<path:filename>")
def uploaded_results(filename):
    return send_from_directory(
        os.path.join("uploads", "results"),
        filename
    )


@app.route("/uploads/<path:filename>")
def uploaded_original(filename):
    return send_from_directory(
        "uploads",
        filename
    )


if __name__ == "__main__":
    app.run(debug=True)