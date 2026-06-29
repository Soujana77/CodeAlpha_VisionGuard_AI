import csv
import io
import json
from datetime import datetime

from flask import send_file
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.platypus import (
    SimpleDocTemplate,
    Table,
    TableStyle,
    Paragraph,
    Spacer,
)

from models.detection import Detection


def generate_csv():

    output = io.StringIO()

    writer = csv.writer(output)

    writer.writerow([
        "Timestamp",
        "Source",
        "Object Count",
        "Detected Objects"
    ])

    detections = Detection.query.order_by(
        Detection.timestamp.desc()
    ).all()

    for detection in detections:

        objects = json.loads(
            detection.detections_json
        )

        names = ", ".join(
            obj["class"] for obj in objects
        )

        writer.writerow([
            detection.timestamp.strftime(
                "%d-%m-%Y %H:%M"
            ),
            detection.source,
            detection.object_count,
            names
        ])

    memory = io.BytesIO()

    memory.write(
        output.getvalue().encode("utf-8")
    )

    memory.seek(0)

    output.close()

    return send_file(
        memory,
        mimetype="text/csv",
        as_attachment=True,
        download_name=f"visionguard_report_{datetime.now().strftime('%Y%m%d_%H%M%S')}.csv"
    )


def generate_pdf():

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

    elements.append(
        Paragraph(
            f"Generated: {datetime.now().strftime('%d-%m-%Y %H:%M')}",
            styles["Normal"]
        )
    )

    elements.append(Spacer(1, 20))

    table_data = [[
        "Timestamp",
        "Source",
        "Objects",
        "Detected Classes"
    ]]

    detections = Detection.query.order_by(
        Detection.timestamp.desc()
    ).all()

    for detection in detections:

        objects = json.loads(
            detection.detections_json
        )

        names = ", ".join(
            obj["class"] for obj in objects
        )

        table_data.append([
            detection.timestamp.strftime(
                "%d-%m-%Y %H:%M"
            ),
            detection.source,
            str(detection.object_count),
            names
        ])

    table = Table(table_data)

    table.setStyle(

        TableStyle([

            (
                "BACKGROUND",
                (0, 0),
                (-1, 0),
                colors.HexColor("#2563eb")
            ),

            (
                "TEXTCOLOR",
                (0, 0),
                (-1, 0),
                colors.white
            ),

            (
                "GRID",
                (0, 0),
                (-1, -1),
                0.5,
                colors.grey
            ),

            (
                "BACKGROUND",
                (0, 1),
                (-1, -1),
                colors.whitesmoke
            ),

            (
                "BOTTOMPADDING",
                (0, 0),
                (-1, 0),
                10
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
        download_name=f"visionguard_report_{datetime.now().strftime('%Y%m%d_%H%M%S')}.pdf"
    )