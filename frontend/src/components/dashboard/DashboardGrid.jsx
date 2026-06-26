import LiveCameraCard from "./LiveCameraCard";
import StatsGrid from "./StatsGrid";

function DashboardGrid() {
  return (
    <div className="dashboard-grid">

      <div className="camera-section">
        <LiveCameraCard />
      </div>

      <div className="stats-section">
        <StatsGrid />
      </div>

    </div>
  );
}

export default DashboardGrid;