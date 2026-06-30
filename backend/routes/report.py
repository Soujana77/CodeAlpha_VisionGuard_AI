from flask import Blueprint, request

from services.report_service import (
    get_reports,
    generate_pdf,
    generate_csv,
)

report_bp = Blueprint(
    "report",
    __name__,
)


@report_bp.route("/reports", methods=["GET"])
def reports():

    report_id = request.args.get(
        "reportId",
        ""
    )

    source = request.args.get(
        "source",
        ""
    )

    date = request.args.get(
        "date",
        ""
    )

    return get_reports(
        report_id,
        source,
        date,
    )


@report_bp.route(
    "/reports/<int:report_id>/pdf",
    methods=["GET"],
)
def export_pdf(report_id):

    return generate_pdf(report_id)


@report_bp.route(
    "/reports/<int:report_id>/csv",
    methods=["GET"],
)
def export_csv(report_id):

    return generate_csv(report_id)