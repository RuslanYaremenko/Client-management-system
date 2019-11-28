import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from './components/About';
import ClientsList from './components/ClientsList';
import Registration from './components/Registration';

const Routes = () => (
  <Switch>
    <Route path="/signup" component={Registration} />
    <Route path="/clients" component={ClientsList} />
    <Route path="/about" component={About} />
    <Route path="/" component={ClientsList} />
  </Switch>
);

export default Routes;
