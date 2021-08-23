import React, { useEffect } from 'react';
import UserProvider from './Contexts/typedValue';
import UserProviderFilter from './Contexts/filterSelect';
import UserProviderDataArticle from './Contexts/dataArticle';
import Home from './Pages/Home';

function App() {
  return (
    <UserProvider>
      <UserProviderFilter>
      <UserProviderDataArticle>
        <div>
          <Home />
        </div>
      </UserProviderDataArticle>
      </UserProviderFilter>
    </UserProvider>
  );
}

export default App;
