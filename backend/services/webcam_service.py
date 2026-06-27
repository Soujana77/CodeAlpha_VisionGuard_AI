import cv2
from ultralytics import YOLO

model = YOLO("yolov8n.pt")

camera = cv2.VideoCapture(0)


def generate_frames():

    while True:

        success, frame = camera.read()

        if not success:
            break

        results = model.predict(
            frame,
            verbose=False
        )

        annotated = results[0].plot()

        _, buffer = cv2.imencode(".jpg", annotated)

        frame_bytes = buffer.tobytes()

        yield (
            b'--frame\r\n'
            b'Content-Type: image/jpeg\r\n\r\n'
            + frame_bytes +
            b'\r\n'
        )