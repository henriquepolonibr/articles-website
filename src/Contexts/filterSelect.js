import React, { useState, createContext } from 'react';

export const UserFilterContext = createContext({});

function UserProvider({ children }) {
  const [selectedValue, setSelectedValue] = useState('relevance');
  return (
    <UserFilterContext.Provider value={{ selectedValue, setSelectedValue }}>
      { children }
    </UserFilterContext.Provider>
  );
}

export default UserProvider;
