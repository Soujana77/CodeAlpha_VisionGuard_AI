import cv2
import time
from ultralytics import YOLO

model = YOLO("yolov8n.pt")

camera = None
camera_running = False
last_fps = 0


def start_camera():
    global camera, camera_running

    if camera_running:
        return True

    camera = cv2.VideoCapture(0, cv2.CAP_DSHOW)

    if not camera.isOpened():
        return False

    camera_running = True
    return True


def stop_camera():
    global camera, camera_running

    if camera is not None:
        camera.release()

    camera = None
    camera_running = False


def get_status():
    return {
        "running": camera_running,
        "fps": round(last_fps, 2),
        "model": "YOLOv8n"
    }


def generate_frames():

    global last_fps

    while camera_running:

        start = time.time()

        success, frame = camera.read()

        if not success:
            break

        results = model.predict(
            frame,
            verbose=False
        )

        annotated = results[0].plot()

        _, buffer = cv2.imencode(
            ".jpg",
            annotated
        )

        fps = 1 / (time.time() - start)

        last_fps = fps

        yield (
            b"--frame\r\n"
            b"Content-Type: image/jpeg\r\n\r\n"
            + buffer.tobytes()
            + b"\r\n"
        )