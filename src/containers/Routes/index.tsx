import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from '../Main';
import Cart from '../Cart';

const Routes = () => (
  <Router>
    <Switch>
      <Route component={Cart} path="/cart" />
      <Route component={Main} path="/" />
    </Switch>
  </Router>
);

export default Routes;
