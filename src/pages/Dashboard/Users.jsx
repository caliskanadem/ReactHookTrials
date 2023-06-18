import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="user-div">
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <Link
            to={`${user.id}`}
            state={{ user }}
            className="list"
            key={user.id}
          >
            {user.name}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Users;
