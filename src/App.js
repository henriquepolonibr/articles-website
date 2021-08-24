import React from 'react';
import UserProvider from './Contexts/typedValue';
import UserProviderFilter from './Contexts/filterSelect';
import UserProviderDataArticle from './Contexts/dataArticle';
import UserProviderPageNumber from './Contexts/pageNumber';
import Home from './Pages/Home';

function App() {
  return (
    <UserProvider>
      <UserProviderFilter>
        <UserProviderDataArticle>
          <UserProviderPageNumber>
            <div>
              <Home />
            </div>
          </UserProviderPageNumber>
        </UserProviderDataArticle>
      </UserProviderFilter>
    </UserProvider>
  );
}

export default App;
