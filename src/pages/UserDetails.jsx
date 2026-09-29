import { useNavigate, useParams } from "react-router-dom";
import { useMemo } from "react";

import useUsers from "../hooks/useUsers";
import Loading from "../components/Loading";
import Button from "../components/Button";

function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    users,
    loading,
  } = useUsers();

  const user = useMemo(() => {
    return users.find(
      (user) => user.id === Number(id)
    );
  }, [users, id]);

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return (
      <div className="empty-state">
        <h2>User not found</h2>

        <Button onClick={() => navigate("/users")}>
          Back to Users
        </Button>
      </div>
    );
  }

  return (
    <div className="page">
      <Button
        variant="secondary"
        onClick={() => navigate("/users")}
      >
        ← Back
      </Button>

      <div className="details-card">
        <div className="large-avatar">
          {user.name.charAt(0)}
        </div>

        <h1>{user.name}</h1>

        <p>{user.email}</p>

        <div className="details-grid">
          <div>
            <span>Username</span>
            <strong>{user.username}</strong>
          </div>

          <div>
            <span>Phone</span>
            <strong>{user.phone}</strong>
          </div>

          <div>
            <span>Website</span>
            <strong>{user.website}</strong>
          </div>

          <div>
            <span>Company</span>
            <strong>{user.company.name}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;