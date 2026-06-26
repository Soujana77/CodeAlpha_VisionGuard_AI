function CameraPanel() {
  return (
    <div className="camera-panel">
      <div className="camera-header">
        <h3>Live Camera Feed</h3>

        <button>LIVE</button>
      </div>

      <div className="camera-placeholder">
        Camera Stream
      </div>

      <div className="camera-buttons">
        <button>Start Detection</button>
        <button>Stop Detection</button>
        <button>Capture</button>
      </div>
    </div>
  );
}

export default CameraPanel;