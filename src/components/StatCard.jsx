import { memo } from "react";

function StatCard({ title, value, icon, description }) {
  console.log("Rendering:", title);

  return (
    <div className="stat-card">
      <div className="stat-top">
        <span className="stat-icon">{icon}</span>
        <span className="stat-label">{title}</span>
      </div>

      <h2>{value}</h2>

      <p>{description}</p>
    </div>
  );
}

export default memo(StatCard);