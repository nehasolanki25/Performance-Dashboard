import { useMemo, useState } from "react";

import SearchBar from "../components/SearchBar";
import UserList from "../components/UserList";
import Loading from "../components/Loading";
import useUsers from "../hooks/useUsers";

function Users() {
  const {
    users,
    loading,
    error,
  } = useUsers();

  const [search, setSearch] = useState("");

  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [users, search]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="error-state">
        <div>⚠️</div>
        <h2>Something went wrong</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <span className="page-tag">MANAGEMENT</span>
          <h1>Users</h1>
          <p>Manage and explore all users.</p>
        </div>
      </div>

      <div className="users-toolbar">
        <SearchBar
          value={search}
          onChange={setSearch}
        />

        <div className="user-count">
          {filteredUsers.length} users
        </div>
      </div>

      <UserList users={filteredUsers} />
    </div>
  );
}

export default Users;