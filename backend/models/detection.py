from datetime import datetime
from database import db


class Detection(db.Model):
    __tablename__ = "detections"

    id = db.Column(
        db.Integer,
        primary_key=True
    )

    timestamp = db.Column(
        db.DateTime,
        default=datetime.utcnow
    )

    source = db.Column(
        db.String(30),
        nullable=False
    )

    image_path = db.Column(
        db.String(255),
        nullable=False
    )

    object_count = db.Column(
        db.Integer,
        nullable=False
    )

    detections_json = db.Column(
        db.Text,
        nullable=False
    )