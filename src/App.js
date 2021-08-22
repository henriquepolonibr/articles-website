import React, { useEffect } from 'react';
import UserProvider from './Contexts/filter';
import Home from './components/Home';

function App() {
  return (
    <UserProvider>
      <div>
        <Home />
      </div>
    </UserProvider>
  );
}

export default App;
