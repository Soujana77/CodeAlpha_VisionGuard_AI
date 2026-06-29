from flask import Blueprint

from services.report_service import (
    generate_csv,
    generate_pdf
)

report_bp = Blueprint(
    "report",
    __name__
)


@report_bp.route("/reports/csv")
def export_csv():

    return generate_csv()


@report_bp.route("/reports/pdf")
def export_pdf():

    return generate_pdf()