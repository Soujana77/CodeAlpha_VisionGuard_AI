from datetime import datetime

current_session = None


def start_session():

    global current_session

    current_session = {

        "sessionId": (
            "VG-LIVE-"
            + datetime.now().strftime("%Y%m%d-%H%M%S")
        ),

        "startTime": datetime.now(),

        "endTime": None,

        "events": [],

        "previousObjects": {},

    }


def add_detection(objects):

    global current_session

    if current_session is None:
        return

    current = {}

    for obj in objects:

        name = obj["class"]

        current[name] = current.get(name, 0) + 1

    previous = current_session["previousObjects"]

    timestamp = datetime.now().strftime("%H:%M:%S")

    for name, count in current.items():

        old = previous.get(name, 0)

        if count > old:

            current_session["events"].append({

                "time": timestamp,

                "event": f"{count-old} {name} entered"

            })

    for name, count in previous.items():

        new = current.get(name, 0)

        if new < count:

            current_session["events"].append({

                "time": timestamp,

                "event": f"{count-new} {name} left"

            })

    current_session["previousObjects"] = current


def stop_session():

    global current_session

    if current_session is None:

        return None

    current_session["endTime"] = datetime.now()

    duration = (

        current_session["endTime"]

        -

        current_session["startTime"]

    )

    current_session["duration"] = str(duration)

    session = current_session

    current_session = None

    return session


def get_current_session():

    return current_session