import json
from collections import Counter

from models.detection import Detection


def get_analytics():

    detections = Detection.query.all()

    total_images = len(detections)

    total_objects = 0

    object_counter = Counter()

    source_counter = Counter()

    for detection in detections:

        source_counter[detection.source] += 1

        objects = json.loads(detection.detections_json)

        total_objects += len(objects)

        for obj in objects:

            object_counter[obj["class"]] += 1

    average_objects = (
        round(total_objects / total_images, 2)
        if total_images
        else 0
    )

    most_detected = (
        object_counter.most_common(1)[0][0]
        if object_counter
        else "None"
    )

    return {

        "totalImages": total_images,

        "totalObjects": total_objects,

        "averageObjects": average_objects,

        "mostDetectedObject": most_detected,

        "objectDistribution": dict(object_counter),

        "sourceDistribution": dict(source_counter)

    }