import csv
import io
import json
import os
from datetime import datetime

from flask import jsonify
from flask import send_file

from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.platypus import (
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)

from models.detection import Detection


def get_reports():

    detections = Detection.query.order_by(
        Detection.timestamp.desc()
    ).all()

    reports = []

    for detection in detections:

        objects = json.loads(
            detection.detections_json
        )

        reports.append({

            "id": detection.id,

            "source": detection.source,

            "image": detection.image_path,

            "detectionDate": detection.timestamp.strftime(
                "%d-%m-%Y %H:%M"
            ),

            "reportDate": datetime.now().strftime(
                "%d-%m-%Y %H:%M"
            ),

            "objectCount": detection.object_count,

            "objects": objects

        })

    return jsonify(reports)
def generate_csv(report_id):

    detection = Detection.query.get_or_404(report_id)

    output = io.StringIO()

    writer = csv.writer(output)

    writer.writerow([
        "VisionGuard AI Detection Report"
    ])

    writer.writerow([])

    writer.writerow([
        "Detection ID",
        detection.id
    ])

    writer.writerow([
        "Detection Date",
        detection.timestamp.strftime("%d-%m-%Y %H:%M")
    ])

    writer.writerow([
        "Report Generated",
        datetime.now().strftime("%d-%m-%Y %H:%M")
    ])

    writer.writerow([
        "Source",
        detection.source
    ])

    writer.writerow([
        "Objects Detected",
        detection.object_count
    ])

    writer.writerow([])

    writer.writerow([
        "Object",
        "Confidence (%)"
    ])

    objects = json.loads(
        detection.detections_json
    )

    for obj in objects:

        writer.writerow([
            obj["class"],
            obj["confidence"]
        ])

    memory = io.BytesIO()

    memory.write(
        output.getvalue().encode("utf-8")
    )

    memory.seek(0)

    return send_file(
        memory,
        mimetype="text/csv",
        as_attachment=True,
        download_name=f"report_{report_id}.csv"
    )
def generate_pdf(report_id):

    detection = Detection.query.get_or_404(report_id)

    memory = io.BytesIO()

    document = SimpleDocTemplate(memory)

    styles = getSampleStyleSheet()

    elements = []

    elements.append(
        Paragraph(
            "<b>VisionGuard AI Detection Report</b>",
            styles["Title"]
        )
    )

    elements.append(Spacer(1,15))

    elements.append(
        Paragraph(
            f"<b>Detection ID:</b> {detection.id}",
            styles["Normal"]
        )
    )

    elements.append(
        Paragraph(
            f"<b>Detection Date:</b> {detection.timestamp.strftime('%d-%m-%Y %H:%M')}",
            styles["Normal"]
        )
    )

    elements.append(
        Paragraph(
            f"<b>Report Generated:</b> {datetime.now().strftime('%d-%m-%Y %H:%M')}",
            styles["Normal"]
        )
    )

    elements.append(
        Paragraph(
            f"<b>Source:</b> {detection.source}",
            styles["Normal"]
        )
    )

    elements.append(
        Paragraph(
            f"<b>Total Objects:</b> {detection.object_count}",
            styles["Normal"]
        )
    )

    elements.append(Spacer(1,20))

    table_data = [[
        "Object",
        "Confidence (%)"
    ]]

    objects = json.loads(
        detection.detections_json
    )

    for obj in objects:

        table_data.append([
            obj["class"],
            str(obj["confidence"])
        ])

    table = Table(table_data)

    table.setStyle(

        TableStyle([

            (
                "BACKGROUND",
                (0,0),
                (-1,0),
                colors.HexColor("#2563eb")
            ),

            (
                "TEXTCOLOR",
                (0,0),
                (-1,0),
                colors.white
            ),

            (
                "GRID",
                (0,0),
                (-1,-1),
                0.5,
                colors.grey
            ),

            (
                "BACKGROUND",
                (0,1),
                (-1,-1),
                colors.whitesmoke
            )

        ])

    )

    elements.append(table)

    document.build(elements)

    memory.seek(0)

    return send_file(
        memory,
        mimetype="application/pdf",
        as_attachment=True,
        download_name=f"report_{report_id}.pdf"
    )