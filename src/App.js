import React, { useContext } from 'react';
import UserCard from './components/UserCard';
import { UserContext } from './UserContext';
import 'tailwindcss/tailwind.css';


function App() {
	const { users } = useContext(UserContext);

  return (
    <div className="flex flex-wrap justify-center">
      {users.map(user => (
        <UserCard
          key={user.id}
          user={user}
        />
      ))}
    </div>
  );
}

export default App;
