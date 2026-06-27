from flask import Blueprint, request
from services.yolo_service import detect_image
from utils.file_utils import allowed_file, save_upload
from utils.response import success_response, error_response

detection_bp = Blueprint("detection", __name__)


@detection_bp.route("/detect/image", methods=["POST"])
def detect_uploaded_image():

    if "image" not in request.files:
        return error_response("No image uploaded.")

    file = request.files["image"]

    if file.filename == "":
        return error_response("No file selected.")

    if not allowed_file(file.filename):
        return error_response("Unsupported file type.")

    image_path = save_upload(file)

    result = detect_image(image_path)

    return success_response(
        result,
        "Detection completed successfully."
    )