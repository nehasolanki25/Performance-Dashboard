import { memo } from "react";
import { useNavigate } from "react-router-dom";

function UserCard({ user }) {
  const navigate = useNavigate();

  const handleView = () => {
    navigate(`/users/${user.id}`);
  };

  return (
    <div className="user-card">
      <div className="user-avatar">
        {user.name.charAt(0)}
      </div>

      <div className="user-info">
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        <span>{user.company.name}</span>
      </div>

      <button
        className="view-btn"
        onClick={handleView}
      >
        View
      </button>
    </div>
  );
}

export default memo(UserCard);