from flask import Blueprint
from flask import jsonify

from services.analytics_service import get_analytics

analytics_bp = Blueprint(
    "analytics",
    __name__
)


@analytics_bp.route("/analytics")
def analytics():

    return jsonify(
        get_analytics()
    )