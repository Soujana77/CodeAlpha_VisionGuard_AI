import MainLayout from "../components/layout/MainLayout";
import { FiCamera, FiActivity } from "react-icons/fi";

function LiveDetection() {
  return (
    <MainLayout>
      <div className="dashboard-header">
        <h1>Live Detection</h1>
        <p>Real-time AI object detection using YOLOv8</p>
      </div>

      <div className="live-grid">

        <div className="live-camera-card">

          <div className="live-header">

            <h3>
              <FiCamera /> Live Camera Feed
            </h3>

            <span className="live-badge">
              ● LIVE
            </span>

          </div>

          <img
            src="http://127.0.0.1:5000/api/webcam"
            alt="Live Detection"
            className="live-stream"
          />

        </div>

        <div className="live-info-card">

          <h3>
            <FiActivity />
            Detection Status
          </h3>

          <div className="info-box">

            <div className="info-item">
              <span>Camera</span>
              <strong>Running</strong>
            </div>

            <div className="info-item">
              <span>Model</span>
              <strong>YOLOv8n</strong>
            </div>

            <div className="info-item">
              <span>Status</span>
              <strong>Detecting</strong>
            </div>

            <div className="info-item">
              <span>FPS</span>
              <strong>Live</strong>
            </div>

          </div>

        </div>

      </div>
    </MainLayout>
  );
}

export default LiveDetection;