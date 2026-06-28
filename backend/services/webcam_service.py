import cv2
import time
from ultralytics import YOLO
from services.screenshot_service import save_frame
from services.detection_history_service import save_detection
model = YOLO("yolov8n.pt")

camera = None
camera_running = False
last_fps = 0
last_frame = None
last_results = None


def start_camera():
    global camera, camera_running

    if camera_running:
        return True

    camera = cv2.VideoCapture(0)
    print("Camera opened:", camera.isOpened())

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
    global last_frame
    global camera_running
    global camera

    while camera_running:

        if camera is None:
            break

        start = time.time()

        success, frame = camera.read()

        if not success:
            break

        last_frame = frame.copy()

        results = model.predict(
            frame,
            verbose=False
        )
        global last_results

        last_results = results
        annotated = results[0].plot()

        end = time.time()

        last_fps = 1 / (end - start) if (end - start) > 0 else 0

        _, buffer = cv2.imencode(".jpg", annotated)

        frame_bytes = buffer.tobytes()

        yield (
            b'--frame\r\n'
            b'Content-Type: image/jpeg\r\n\r\n'
            + frame_bytes +
            b'\r\n'
        )

    stop_camera()


def capture_screenshot():
    global last_frame
    global last_results

    if last_frame is None or last_results is None:
        return None

    image_path = save_frame(last_frame)

    detections = []

    for box in last_results[0].boxes:
        class_id = int(box.cls[0])
        confidence = float(box.conf[0])

        detections.append({
            "class": model.names[class_id],
            "confidence": round(confidence * 100, 2)
        })

    save_detection(
        "Live Webcam",
        image_path,
        detections
    )

    return image_path