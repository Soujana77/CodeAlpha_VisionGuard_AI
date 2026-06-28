import { useEffect, useState } from "react";

import {
  FiUsers,
  FiTruck,
  FiPackage,
  FiAlertTriangle,
  FiCamera,
  FiImage,
} from "react-icons/fi";

import StatCard from "./StatCard";
import { getAnalytics } from "../../services/analyticsService";

function StatsGrid() {

  const [stats, setStats] = useState({
    people: 0,
    vehicles: 0,
    alerts: 0,
    cameraStatus: "Offline",
    totalImages: 0,
    totalObjects: 0,
  });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const response = await getAnalytics();
      setStats(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const cards = [
    {
      title: "People",
      value: stats.people,
      color: "#3B82F6",
      icon: <FiUsers />,
    },
    {
      title: "Vehicles",
      value: stats.vehicles,
      color: "#22C55E",
      icon: <FiTruck />,
    },
    {
      title: "Objects",
      value: stats.totalObjects,
      color: "#F59E0B",
      icon: <FiPackage />,
    },
    {
      title: "Alerts",
      value: stats.alerts,
      color: "#EF4444",
      icon: <FiAlertTriangle />,
    },
    {
      title: "Camera",
      value: stats.cameraStatus,
      color: "#06B6D4",
      icon: <FiCamera />,
    },
    {
      title: "Images",
      value: stats.totalImages,
      color: "#8B5CF6",
      icon: <FiImage />,
    },
  ];

  return (
    <div className="stats-grid">
      {cards.map((item) => (
        <StatCard key={item.title} {...item} />
      ))}
    </div>
  );
}

export default StatsGrid;