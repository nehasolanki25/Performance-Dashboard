import UserCard from "./UserCard";

function UserList({ users }) {
  if (users.length === 0) {
    return (
      <div className="empty-state">
        <div>🔎</div>
        <h3>No users found</h3>
        <p>Try searching with another name.</p>
      </div>
    );
  }

  return (
    <div className="user-list">
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
        />
      ))}
    </div>
  );
}

export default UserList;