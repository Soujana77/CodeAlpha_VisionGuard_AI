import json

from database import db
from models.detection import Detection


def save_detection(
    source,
    image_path,
    detections
):

    detection = Detection(
        source=source,
        image_path=image_path,
        object_count=len(detections),
        detections_json=json.dumps(detections)
    )

    db.session.add(detection)
    db.session.commit()