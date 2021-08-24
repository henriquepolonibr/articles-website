import React, { useState, createContext } from 'react';

export const UserPageNumberContext = createContext({});

function UserProviderPageNumber({ children }) {
  const [pageNumber, setPageNumber] = useState(1);
  return (
    <UserPageNumberContext.Provider value={{ pageNumber, setPageNumber }}>
      { children }
    </UserPageNumberContext.Provider>
  );
}

export default UserProviderPageNumber;
