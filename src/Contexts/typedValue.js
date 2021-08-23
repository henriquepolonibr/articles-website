import React, { useState, createContext } from 'react';

export const UserContext = createContext({});

function UserProviderFilter({ children }) {
  const [typedValue, setTypedValue] = useState('');
  return (
    <UserContext.Provider value={{ typedValue, setTypedValue }}>
      { children }
    </UserContext.Provider>
  );
}

export default UserProviderFilter;
