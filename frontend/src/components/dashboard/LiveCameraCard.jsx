import { useEffect, useState } from "react";
import {
  FiCamera,
  FiPlay,
  FiSquare,
  FiCameraOff,
} from "react-icons/fi";
import toast from "react-hot-toast";

import {
  startCamera,
  stopCamera,
  getCameraStatus,
  captureScreenshot,
} from "../../services/webcamService";

function LiveCameraCard() {
  const [cameraRunning, setCameraRunning] = useState(false);
  const [streamUrl, setStreamUrl] = useState("");

  useEffect(() => {
    fetchStatus();
  }, []);

  const fetchStatus = async () => {
    try {
      const res = await getCameraStatus();
      setCameraRunning(res.data.running);

      if (res.data.running) {
        setStreamUrl(
          `http://127.0.0.1:5000/api/webcam?t=${Date.now()}`
        );
      } else {
        setStreamUrl("");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleStart = async () => {
    try {
      await startCamera();

      setCameraRunning(true);

      setStreamUrl(
        `http://127.0.0.1:5000/api/webcam?t=${Date.now()}`
      );

      toast.success("Camera Started");
    } catch (err) {
      console.error(err);
      toast.error("Unable to start camera");
    }
  };

  const handleStop = async () => {
    try {
      await stopCamera();

      setCameraRunning(false);

      setStreamUrl("");

      toast.success("Camera Stopped");
    } catch (err) {
      console.error(err);
      toast.error("Unable to stop camera");
    }
  };

  const handleCapture = async () => {
  try {
    const response = await captureScreenshot();

    toast.success(
      `Saved: ${response.data.filename}`
    );
  } catch (err) {
    console.error(err);

    toast.error("Unable to capture screenshot");
  }
};
  return (
    <div className="camera-card">

      <div className="card-header">
        <h3>
          <FiCamera /> Live Camera Feed
        </h3>

        <span
          className="live-badge"
          style={{
            background: cameraRunning ? "#22C55E" : "#EF4444",
          }}
        >
          {cameraRunning ? "LIVE" : "OFFLINE"}
        </span>
      </div>

      <div className="camera-screen">

        {cameraRunning ? (
          <img
            src={streamUrl}
            alt="Live Camera"
            className="camera-stream"
          />
        ) : (
          <div className="camera-placeholder">
            <FiCameraOff size={60} />
            <h2>Camera Offline</h2>
            <p>Click Start Camera to begin live detection.</p>
          </div>
        )}

      </div>

      <div className="camera-actions">

        <button onClick={handleStart}>
          <FiPlay />
          Start
        </button>

        <button onClick={handleStop}>
          <FiSquare />
          Stop
        </button>

        <button onClick={handleCapture}>
          <FiCamera />
          Capture
        </button>

      </div>

    </div>
  );
}

export default LiveCameraCard;