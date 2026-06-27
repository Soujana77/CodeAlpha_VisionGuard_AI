import os
import uuid

UPLOAD_FOLDER = "uploads"

ALLOWED_EXTENSIONS = {
    "jpg",
    "jpeg",
    "png"
}


def allowed_file(filename):

    return "." in filename and \
        filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS


def save_upload(file):

    os.makedirs(
        UPLOAD_FOLDER,
        exist_ok=True
    )

    extension = file.filename.split(".")[-1]

    filename = f"{uuid.uuid4().hex}.{extension}"

    filepath = os.path.join(
        UPLOAD_FOLDER,
        filename
    )

    file.save(filepath)

    return filepath