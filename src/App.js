import React from 'react';
import Routes from './routes';
import UserProvider from './Contexts/typedValue';
import UserProviderFilter from './Contexts/filterSelect';
import UserProviderDataArticle from './Contexts/dataArticle';
import UserProviderPageNumber from './Contexts/pageNumber';

function App() {
  return (
    <UserProvider>
      <UserProviderFilter>
        <UserProviderDataArticle>
          <UserProviderPageNumber>
            <div>
              <Routes />
            </div>
          </UserProviderPageNumber>
        </UserProviderDataArticle>
      </UserProviderFilter>
    </UserProvider>
  );
}

export default App;
