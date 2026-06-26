import LiveCameraCard from "./LiveCameraCard";
import StatsGrid from "./StatsGrid";
import DetectionChart from "./DetectionChart";
import DetectionHistory from "./DetectionHistory";

function DashboardGrid() {
  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-grid">

        <div className="camera-section">
          <LiveCameraCard />
        </div>

        <div className="stats-section">
          <StatsGrid />
        </div>

      </div>

      <div className="dashboard-bottom">

        <DetectionChart />

        <DetectionHistory />

      </div>
    </div>
  );
}

export default DashboardGrid;