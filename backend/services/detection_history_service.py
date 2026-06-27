from models.detection import Detection
from database import db


def save_detection(
    source,
    object_name,
    confidence,
    image_path
):
    detection = Detection(
        source=source,
        object_name=object_name,
        confidence=confidence,
        image_path=image_path
    )

    db.session.add(detection)
    db.session.commit()