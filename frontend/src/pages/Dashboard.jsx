import MainLayout from "../components/layout/MainLayout";
import DashboardGrid from "../components/dashboard/DashboardGrid";
import "../styles/dashboard.css";

function Dashboard() {
  return (
    <MainLayout>
      <div className="dashboard-header">
        <h1>VisionGuard AI Dashboard</h1>
        <p>AI-Powered Real-Time Object Detection & Tracking</p>
      </div>

      <DashboardGrid />
    </MainLayout>
  );
}

export default Dashboard;