import React, { useState, createContext } from 'react';

export const UserContext = createContext({});

function UserProvider({ children }) {
  const [filter, setFilter] = useState('');
  return (
    <UserContext.Provider value={{ filter, setFilter }}>
      { children }
    </UserContext.Provider>
  );
}

export default UserProvider;
