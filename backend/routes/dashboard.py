from flask import Blueprint
from services.dashboard_service import get_dashboard_summary
from utils.response import success_response

dashboard_bp = Blueprint("dashboard", __name__)


@dashboard_bp.route("/health", methods=["GET"])
def health():
    return success_response(
        {
            "status": "Healthy"
        },
        "API is running successfully."
    )


@dashboard_bp.route("/dashboard", methods=["GET"])
def dashboard():
    return success_response(
        get_dashboard_summary(),
        "Dashboard data fetched successfully."
    )