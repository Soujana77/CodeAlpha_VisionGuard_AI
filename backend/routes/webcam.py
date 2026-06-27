from flask import Blueprint
from flask import Response

from services.webcam_service import generate_frames

webcam_bp = Blueprint(
    "webcam",
    __name__
)


@webcam_bp.route("/webcam")

def webcam():

    return Response(

        generate_frames(),

        mimetype="multipart/x-mixed-replace; boundary=frame"

    )