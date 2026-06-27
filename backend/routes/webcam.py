from flask import Blueprint
from flask import Response
from flask import jsonify

from services.webcam_service import (
    start_camera,
    stop_camera,
    generate_frames,
    get_status
)

webcam_bp = Blueprint(
    "webcam",
    __name__
)


@webcam_bp.route("/webcam/start", methods=["POST"])
def start():

    if start_camera():

        return jsonify({
            "success": True,
            "message": "Camera Started"
        })

    return jsonify({
        "success": False,
        "message": "Unable to start camera"
    }), 500


@webcam_bp.route("/webcam/stop", methods=["POST"])
def stop():

    stop_camera()

    return jsonify({
        "success": True,
        "message": "Camera Stopped"
    })


@webcam_bp.route("/webcam/status")
def status():

    return jsonify(
        get_status()
    )


@webcam_bp.route("/webcam")
def webcam():

    return Response(
        generate_frames(),
        mimetype="multipart/x-mixed-replace; boundary=frame"
    )