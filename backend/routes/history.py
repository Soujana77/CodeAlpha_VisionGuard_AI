from flask import Blueprint
from flask import jsonify

from services.history_service import get_all_detections

history_bp = Blueprint(
    "history",
    __name__
)


@history_bp.route("/history")
def history():

    return jsonify(
        get_all_detections()
    )