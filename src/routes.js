import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Article from './Pages/Article';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/article/:idNumber" component={Article} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
