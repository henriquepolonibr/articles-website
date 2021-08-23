import React, { useState, createContext } from 'react';

export const UserDataArticleContext = createContext({});

function UserProviderDataArticle({ children }) {
  const [articleData, setArticleData] = useState([]);
  return (
    <UserDataArticleContext.Provider value={{ articleData, setArticleData }}>
      { children }
    </UserDataArticleContext.Provider>
  );
}

export default UserProviderDataArticle;
