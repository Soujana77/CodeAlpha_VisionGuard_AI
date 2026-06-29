from flask import Blueprint

from services.report_service import (
    get_reports,
    generate_pdf,
    generate_csv
)

report_bp = Blueprint(
    "report",
    __name__
)


@report_bp.route("/reports")
def reports():

    return get_reports()


@report_bp.route("/reports/<int:report_id>/pdf")
def export_pdf(report_id):

    return generate_pdf(report_id)


@report_bp.route("/reports/<int:report_id>/csv")
def export_csv(report_id):

    return generate_csv(report_id)