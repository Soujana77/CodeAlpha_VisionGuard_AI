import { useState } from "react";
import { FiCamera, FiPlay, FiSquare, FiCameraOff } from "react-icons/fi";
import toast from "react-hot-toast";

function LiveCameraCard() {
  const [cameraRunning, setCameraRunning] = useState(false);

  const startCamera = () => {
    setCameraRunning(true);
    toast.success("Camera started");
  };

  const stopCamera = () => {
    setCameraRunning(false);
    toast.success("Camera stopped");
  };

  const captureFrame = () => {
    toast("Screenshot feature coming next milestone");
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
            background: cameraRunning ? "#22C55E" : "#EF4444"
          }}
        >
          {cameraRunning ? "LIVE" : "OFFLINE"}
        </span>

      </div>

      <div className="camera-screen">

        {cameraRunning ? (

          <img
            src="http://127.0.0.1:5000/api/webcam"
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

        <button onClick={startCamera}>
          <FiPlay />
          Start
        </button>

        <button onClick={stopCamera}>
          <FiSquare />
          Stop
        </button>

        <button onClick={captureFrame}>
          <FiCamera />
          Capture
        </button>

      </div>

    </div>
  );
}

export default LiveCameraCard;