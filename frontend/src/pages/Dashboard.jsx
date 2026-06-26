import MainLayout from "../components/layout/MainLayout";
import StatsCards from "../components/dashboard/StatsCards";
import CameraPanel from "../components/dashboard/CameraPanel";
import AnalyticsChart from "../components/dashboard/AnalyticsChart";
import DetectionTable from "../components/dashboard/DetectionTable";
import RecentAlerts from "../components/dashboard/RecentAlerts";

import "../styles/dashboard.css";

function Dashboard() {
  return (
    <MainLayout>

      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Welcome back, Admin!</p>
      </div>

      <CameraPanel />

      <StatsCards />

      <AnalyticsChart />

      <DetectionTable />

      <RecentAlerts />

    </MainLayout>
  );
}

export default Dashboard;