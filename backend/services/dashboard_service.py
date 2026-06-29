import json
from collections import Counter

from models.detection import Detection


def get_dashboard_summary():

    detections = Detection.query.order_by(
        Detection.timestamp.desc()
    ).all()

    people = 0
    vehicles = 0
    mobile_phones = 0
    packages = 0

    history = []
    alerts = []

    chart_labels = []
    chart_values = []

    vehicle_classes = {
        "car",
        "bus",
        "truck",
        "motorcycle",
        "bicycle"
    }

    for detection in detections:

        objects = json.loads(
            detection.detections_json
        )

        chart_labels.append(
            detection.timestamp.strftime("%H:%M")
        )

        chart_values.append(
            detection.object_count
        )

        for obj in objects:

            cls = obj["class"]

            if cls == "person":
                people += 1

            if cls in vehicle_classes:
                vehicles += 1

            if cls == "cell phone":
                mobile_phones += 1

            if cls in {
                "backpack",
                "handbag",
                "suitcase"
            }:
                packages += 1

            history.append({

                "object": cls,

                "confidence": obj["confidence"],

                "time": detection.timestamp.strftime("%H:%M"),

                "status": "Detected"

            })

        if detection.object_count >= 3:

            alerts.append({

                "object": f"{detection.object_count} Objects",

                "source": detection.source,

                "time": detection.timestamp.strftime("%H:%M"),

                "level": (

                    "High"

                    if detection.object_count >= 6

                    else "Medium"

                )

            })

    return {

        "people": people,

        "vehicles": vehicles,

        "mobilePhones": mobile_phones,

        "packages": packages,

        "alertsCount": len(alerts),

        "cameras": 1,

        "activeCamera": "Default Camera",

        "status": "Online",

        "history": history[:10],

        "alerts": alerts[:5],

        "chart": {

            "labels": chart_labels,

            "values": chart_values

        }

    }