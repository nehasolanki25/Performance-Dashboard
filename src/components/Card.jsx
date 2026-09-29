import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <div className="logo-icon">P</div>
        <div>
          <h2>ProDashboard</h2>
          <span>Analytics</span>
        </div>
      </div>

      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          📊 Dashboard
        </NavLink>

        <NavLink
          to="/users"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          👥 Users
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          ⚙️ Settings
        </NavLink>
      </nav>

      <div className="sidebar-bottom">
        <p>React Performance</p>
        <small>Optimized Dashboard</small>
      </div>
    </aside>
  );
}

export default Sidebar;