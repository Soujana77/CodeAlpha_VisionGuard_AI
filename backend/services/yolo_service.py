from ultralytics import YOLO
import os
import uuid

model = YOLO("yolov8n.pt")


def detect_image(image_path):

    results = model.predict(
        source=image_path,
        save=False,
        verbose=False
    )

    result = results[0]

    result_folder = os.path.join("uploads", "results")

    os.makedirs(result_folder, exist_ok=True)

    output_name = f"{uuid.uuid4().hex}.jpg"

    output_path = os.path.join(
        result_folder,
        output_name
    )

    annotated = result.plot()

    import cv2

    cv2.imwrite(output_path, annotated)

    detections = []

    for box in result.boxes:

        class_id = int(box.cls[0])

        confidence = float(box.conf[0])

        detections.append({

            "class": model.names[class_id],

            "confidence": round(confidence * 100, 2)

        })

    return {

        "annotated_image": output_path.replace("\\", "/"),

        "objects": detections,

        "count": len(detections)

    }