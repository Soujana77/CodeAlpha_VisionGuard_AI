import { useEffect, useState } from "react";
import "./Navbar.css";

import {
  FiBell,
  FiMoon,
  FiSearch,
  FiUser,
} from "react-icons/fi";

function Navbar() {

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {

    const timer = setInterval(() => {

      setCurrentTime(new Date());

    }, 1000);

    return () => clearInterval(timer);

  }, []);

  const date = currentTime.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const time = currentTime.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <header className="navbar">

      <div className="search-box">

        <FiSearch />

        <input
          type="text"
          placeholder="Search reports, history, analytics..."
        />

      </div>

      <div className="navbar-right">

        <div className="date-time">

          <span>{date}</span>

          <strong>{time}</strong>

        </div>

        <FiBell className="nav-icon" />

        <FiMoon className="nav-icon" />

        <div className="profile">

          <div className="avatar">

            <FiUser />

          </div>

          <div>

            <h4>Admin</h4>

            <span>Administrator</span>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;