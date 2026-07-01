import json
from collections import Counter

from models.detection import Detection


VEHICLE_CLASSES = {
    "car",
    "motorcycle",
    "bus",
    "truck",
    "bicycle"
}


def get_analytics():

    detections = Detection.query.order_by(
        Detection.timestamp.asc()
    ).all()

    total_images = len(detections)

    total_objects = 0

    object_counter = Counter()
    source_counter = Counter()

    trend_labels = []
    trend_values = []

    confidence_values = []

    for detection in detections:

        source_counter[detection.source] += 1

        objects = json.loads(
            detection.detections_json
        )

        total_objects += len(objects)

        trend_labels.append(
            detection.timestamp.strftime("%H:%M")
        )

        trend_values.append(
            len(objects)
        )

        for obj in objects:

            object_counter[obj["class"]] += 1

            confidence_values.append(
                obj["confidence"]
            )

    average_objects = (

        round(
            total_objects / total_images,
            2
        )

        if total_images

        else 0

    )

    average_confidence = (

        round(

            sum(confidence_values)

            /

            len(confidence_values),

            2

        )

        if confidence_values

        else 0

    )

    most_detected = (

        object_counter.most_common(1)[0][0]

        if object_counter

        else "None"

    )

    people = object_counter.get(
        "person",
        0
    )

    vehicles = sum(

        object_counter.get(
            vehicle,
            0
        )

        for vehicle in VEHICLE_CLASSES

    )

    return {

        "people": people,

        "vehicles": vehicles,

        "alerts": 0,

        "cameraStatus": "Online",

        "totalImages": total_images,

        "totalObjects": total_objects,

        "averageObjects": average_objects,

        "averageConfidence": average_confidence,

        "mostDetectedObject": most_detected,

        "uniqueObjects": len(object_counter),

        "objectDistribution": dict(object_counter),

        "sourceDistribution": dict(source_counter),

        "trend": {

            "labels": trend_labels,

            "values": trend_values

        }

    }