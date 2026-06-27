from datetime import datetime
from database import db


class Detection(db.Model):
    __tablename__ = "detections"

    id = db.Column(db.Integer, primary_key=True)

    timestamp = db.Column(
        db.DateTime,
        default=datetime.utcnow
    )

    source = db.Column(
        db.String(30),
        nullable=False
    )

    object_name = db.Column(
        db.String(100),
        nullable=False
    )

    confidence = db.Column(
        db.Float,
        nullable=False
    )

    image_path = db.Column(
        db.String(255)
    )