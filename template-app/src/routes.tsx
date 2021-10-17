import { Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';
import Home from './app/views/pages/Home';
import AboutPage from 'app/views/pages/AboutPage';
import NotFoundPage from 'app/views/pages/NotFoundPage';
import Dashboard from 'app/layouts/dashboard-layout';
import DashBoardDefaultContent from 'app/views/dashboard/dashboard-default-content';
import SettingsAndPrivacy from 'app/views/dashboard/settings-and-privacy';

function Routes() {
  return (
    <Switch>
      <Route exact path={'/'} component={Home} />
      <Route exact path={'/about'} component={AboutPage} />
      <Route exact path={'/not-found'} component={NotFoundPage} />
      <Route
        path={'/dashboard'}
        render={({ match: { path } }) => (
          <Dashboard>
            <Switch>
              <Route
                exact
                path={path + '/'}
                component={DashBoardDefaultContent}
              />
              <Route
                exact
                path={path + '/settings-and-privacy'}
                component={SettingsAndPrivacy}
              />
            </Switch>
          </Dashboard>
        )}
      />
      <Redirect exact from={'*'} to={'/not-found'} />
    </Switch>
  );
}

export default Routes;
