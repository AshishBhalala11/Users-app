import React, { useState } from 'react';
import UserCard from './components/UserCard';
import usersData from './data.json';
import 'tailwindcss/tailwind.css';

function App() {
  const [users, setUsers] = useState(usersData);

  const handleUpdateUser = (updatedUser) => {
    const updatedUsers = users.map((user) => (user.id === updatedUser.id ? updatedUser : user));
    setUsers(updatedUsers);
  };

  const handleDeleteUser = (userId) => {
    const filteredUsers = users.filter((user) => user.id !== userId);
    setUsers(filteredUsers);
  };

  return (
    <div className="flex flex-wrap justify-center">
      {users.map(user => (
        <UserCard
          key={user.id}
          user={user}
          handleUpdateUser={handleUpdateUser}
          handleDeleteUser={handleDeleteUser}
        />
      ))}
    </div>
  );
}

export default App;
