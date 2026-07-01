import json

from models.detection import Detection


def get_dashboard_summary():

    detections = (
        Detection.query
        .order_by(Detection.timestamp.desc())
        .limit(10)
        .all()
    )

    detections.reverse()

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

    package_classes = {
        "backpack",
        "handbag",
        "suitcase"
    }

    for detection in detections:

        try:

            objects = json.loads(
                detection.detections_json
            )

        except Exception:

            objects = []

        chart_labels.append(
            detection.timestamp.strftime("%H:%M")
        )

        chart_values.append(
            detection.object_count
        )

        for obj in objects:

            cls = obj.get("class", "Unknown")

            confidence = obj.get(
                "confidence",
                0
            )

            if cls == "person":
                people += 1

            if cls in vehicle_classes:
                vehicles += 1

            if cls == "cell phone":
                mobile_phones += 1

            if cls in package_classes:
                packages += 1

            history.append({

                "object": cls.title(),

                "confidence": confidence,

                "time": detection.timestamp.strftime(
                    "%H:%M:%S"
                ),

                "status": "Detected"

            })

        if detection.object_count >= 3:

            alerts.append({

                "object": f"{detection.object_count} Objects",

                "source": detection.source,

                "time": detection.timestamp.strftime(
                    "%H:%M:%S"
                ),

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

        "history": history[-10:],

        "alerts": alerts[-5:],

        "chart": {

            "labels": chart_labels,

            "values": chart_values

        }

    }