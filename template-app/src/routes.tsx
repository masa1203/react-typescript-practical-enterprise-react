import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from './app/views/pages/Home';
import AboutPage from 'app/views/pages/AboutPage';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={AboutPage} />
    </Switch>
  );
}

export default Routes;
