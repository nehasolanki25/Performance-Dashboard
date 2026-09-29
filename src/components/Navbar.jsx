import { useDashboard } from "../context/DashboardContext";

function Navbar() {
  const { state, dispatch } = useDashboard();

  return (
    <header className="navbar">
      <div>
        <h2>Performance Dashboard</h2>
        <p>Manage your users and analytics</p>
      </div>

      <div className="navbar-actions">
        <button
          className="theme-btn"
          onClick={() => dispatch({ type: "TOGGLE_THEME" })}
        >
          {state.theme === "light" ? "🌙" : "☀️"}
        </button>

        <div className="profile">
          <div className="avatar">NS</div>
          <span>Neha</span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;