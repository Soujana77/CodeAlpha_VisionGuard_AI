from flask import Flask
from flask_cors import CORS

from routes.dashboard import dashboard_bp

app = Flask(__name__)

CORS(app)

app.config["JSON_SORT_KEYS"] = False

app.register_blueprint(dashboard_bp, url_prefix="/api")


@app.route("/")
def home():
    return {
        "success": True,
        "application": "VisionGuard AI",
        "message": "Backend Running"
    }


if __name__ == "__main__":
    app.run(debug=True)