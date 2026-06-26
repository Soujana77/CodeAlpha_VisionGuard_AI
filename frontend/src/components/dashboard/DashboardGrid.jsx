import LiveCameraCard from "./LiveCameraCard";
import StatsGrid from "./StatsGrid";
import DetectionChart from "./DetectionChart";
import DetectionHistory from "./DetectionHistory";
import RecentAlerts from "./RecentAlerts";
import QuickActions from "./QuickActions";

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

        <div className="dashboard-left">

          <DetectionChart />

          <QuickActions />

        </div>

        <div className="dashboard-right">

          <DetectionHistory />

          <RecentAlerts />

        </div>

      </div>

    </div>
  );
}

export default DashboardGrid;