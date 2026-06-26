import {
  FiUsers,
  FiTruck,
  FiSmartphone,
  FiPackage,
  FiAlertTriangle,
  FiCamera,
} from "react-icons/fi";

import StatCard from "./StatCard";

const stats = [
  {
    title: "People",
    value: "12",
    color: "#3B82F6",
    icon: <FiUsers />,
  },
  {
    title: "Vehicles",
    value: "08",
    color: "#22C55E",
    icon: <FiTruck />,
  },
  {
    title: "Mobile Phones",
    value: "15",
    color: "#A855F7",
    icon: <FiSmartphone />,
  },
  {
    title: "Packages",
    value: "06",
    color: "#F59E0B",
    icon: <FiPackage />,
  },
  {
    title: "Alerts",
    value: "03",
    color: "#EF4444",
    icon: <FiAlertTriangle />,
  },
  {
    title: "Cameras",
    value: "04",
    color: "#06B6D4",
    icon: <FiCamera />,
  },
];

function StatsGrid() {
  return (
    <div className="stats-grid">
      {stats.map((item) => (
        <StatCard key={item.title} {...item} />
      ))}
    </div>
  );
}

export default StatsGrid;