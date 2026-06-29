from flask import Flask
from flask_cors import CORS
from routes.history import history_bp
from database import db
from routes.analytics import analytics_bp
from routes.detection import detection_bp
from routes.webcam import webcam_bp
from routes.report import report_bp

app = Flask(__name__)

CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///visionguard.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db.init_app(app)

with app.app_context():
    db.create_all()

app.register_blueprint(
    detection_bp,
    url_prefix="/api"
)

app.register_blueprint(
    webcam_bp,
    url_prefix="/api"
)

app.register_blueprint(
    history_bp,
    url_prefix="/api"
)

app.register_blueprint(
    analytics_bp,
    url_prefix="/api"
)

app.register_blueprint(
    report_bp,
    url_prefix="/api"
)

if __name__ == "__main__":
    app.run(
        debug=True
    )