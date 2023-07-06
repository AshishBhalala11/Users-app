import React, { createContext, useState } from 'react';
import usersData from './data.json';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
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
    <UserContext.Provider value={{ users, handleUpdateUser, handleDeleteUser }}>
      {children}
    </UserContext.Provider>
  );
};
