import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiCamera,
  FiClock,
  FiBarChart2,
  FiFileText,
  FiSettings,
  FiInfo,
} from "react-icons/fi";

const menuItems = [
  { name: "Dashboard", path: "/", icon: <FiHome /> },
  { name: "Live Detection", path: "/", icon: <FiCamera /> },
  { name: "Detection History", path: "/history", icon: <FiClock /> },
  { name: "Analytics", path: "/analytics", icon: <FiBarChart2 /> },
  { name: "Reports", path: "/reports", icon: <FiFileText /> },
  { name: "Settings", path: "/settings", icon: <FiSettings /> },
  { name: "About", path: "/about", icon: <FiInfo /> },
];

function Sidebar() {
  return (
    <aside
      style={{
        width: "280px",
        minHeight: "100vh",
        background: "#0F172A",
        padding: "30px 20px",
      }}
    >
      <h2 style={{ marginBottom: "8px" }}>VisionGuard AI</h2>
      <p style={{ color: "#94A3B8", marginBottom: "40px" }}>
        AI Surveillance
      </p>

      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              color: "white",
              textDecoration: "none",
              padding: "12px",
              borderRadius: "10px",
            }}
          >
            {item.icon}
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;