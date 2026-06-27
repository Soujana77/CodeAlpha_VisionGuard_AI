from models.detection import Detection
import json


def get_all_detections():

    detections = Detection.query.order_by(
        Detection.timestamp.desc()
    ).all()

    data = []

    for item in detections:

        data.append({
            "id": item.id,
            "timestamp": item.timestamp.strftime("%d-%m-%Y %H:%M"),
            "source": item.source,
            "object_count": item.object_count,
            "image_path": item.image_path,
            "objects": json.loads(item.detections_json)
        })

    return data