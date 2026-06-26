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

import "./Sidebar.css";

const menuItems = [
  {
    name: "Dashboard",
    path: "/",
    icon: <FiHome />,
  },
  {
    name: "Live Detection",
    path: "/",
    icon: <FiCamera />,
  },
  {
    name: "Detection History",
    path: "/history",
    icon: <FiClock />,
  },
  {
    name: "Analytics",
    path: "/analytics",
    icon: <FiBarChart2 />,
  },
  {
    name: "Reports",
    path: "/reports",
    icon: <FiFileText />,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: <FiSettings />,
  },
  {
    name: "About",
    path: "/about",
    icon: <FiInfo />,
  },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <h2>VisionGuard AI</h2>
        <p>AI Surveillance Dashboard</p>
      </div>

      <nav>
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "menu-item active" : "menu-item"
            }
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;