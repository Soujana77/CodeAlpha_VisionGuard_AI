import os
from datetime import datetime
import cv2


def save_frame(frame):
    os.makedirs("screenshots", exist_ok=True)

    filename = f"capture_{datetime.now().strftime('%Y%m%d_%H%M%S')}.jpg"

    path = os.path.join("screenshots", filename)

    cv2.imwrite(path, frame)

    return filename