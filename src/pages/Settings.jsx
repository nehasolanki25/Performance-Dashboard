import { useDashboard } from "../context/DashboardContext";

function Settings() {
  const { state, dispatch } = useDashboard();

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <span className="page-tag">PREFERENCES</span>
          <h1>Settings</h1>
          <p>Customize your dashboard.</p>
        </div>
      </div>

      <div className="settings-card">
        <div className="setting-row">
          <div>
            <h3>Dark Mode</h3>
            <p>Change the dashboard appearance.</p>
          </div>

          <button
            className={`toggle ${
              state.theme === "dark"
                ? "toggle-on"
                : ""
            }`}
            onClick={() =>
              dispatch({
                type: "TOGGLE_THEME",
              })
            }
          >
            <span></span>
          </button>
        </div>

        <div className="setting-row">
          <div>
            <h3>Notifications</h3>
            <p>Receive dashboard notifications.</p>
          </div>

          <button
            className={`toggle ${
              state.notifications
                ? "toggle-on"
                : ""
            }`}
            onClick={() =>
              dispatch({
                type: "TOGGLE_NOTIFICATIONS",
              })
            }
          >
            <span></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;