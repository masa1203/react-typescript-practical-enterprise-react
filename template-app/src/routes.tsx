import { Switch, Route, Redirect } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import Home from './app/views/pages/Home';
// import AboutPage from 'app/views/pages/AboutPage';
import NotFoundPage from 'app/views/pages/NotFoundPage';
import Dashboard from 'app/layouts/dashboard-layout';
// import DashBoardDefaultContent from 'app/views/dashboard/dashboard-default-content';
import SettingsAndPrivacy from 'app/views/dashboard/settings-and-privacy';
import { LinearProgress } from '@material-ui/core';

function Routes() {
  return (
    <Suspense fallback={<LinearProgress style={{ margin: '10rem' }} />}>
      <Switch>
        {/* eager loading */}
        <Route exact path={'/'} component={Home} />
        {/* lazy loading */}
        <Route
          exact
          path={'/about'}
          component={lazy(() => import('./app/views/pages/AboutPage'))}
        />
        {/* lazy loading */}
        <Route exact path={'/not-found'} component={NotFoundPage} />
        <Route
          path={'/dashboard'}
          render={({ match: { path } }) => (
            <Dashboard>
              <Switch>
                <Route
                  exact
                  path={path + '/'}
                  component={lazy(
                    () =>
                      import('./app/views/dashboard/dashboard-default-content'),
                  )}
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
    </Suspense>
  );
}

export default Routes;
