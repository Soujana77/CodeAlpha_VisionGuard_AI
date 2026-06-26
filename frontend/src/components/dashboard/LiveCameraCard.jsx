function LiveCameraCard() {
  return (
    <div className="camera-card">

      <div className="card-header">
        <h3>Live Camera Feed</h3>

        <span className="live-badge">LIVE</span>
      </div>

      <div className="camera-screen">

        <h2>Camera Stream</h2>

        <p>Webcam integration coming next milestone</p>

      </div>

      <div className="camera-actions">

        <button>Start</button>

        <button>Stop</button>

        <button>Capture</button>

      </div>

    </div>
  );
}

export default LiveCameraCard;