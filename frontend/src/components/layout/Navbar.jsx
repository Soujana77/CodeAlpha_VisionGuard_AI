import "./Navbar.css";
import {
  FiBell,
  FiMoon,
  FiSearch,
  FiUser,
} from "react-icons/fi";

function Navbar() {
  return (
    <header className="navbar">

      <div className="search-box">
        <FiSearch />
        <input
          type="text"
          placeholder="Search anything..."
        />
      </div>

      <div className="navbar-right">

        <div className="date-time">
          <span>May 24, 2025</span>
          <strong>10:24:35 AM</strong>
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