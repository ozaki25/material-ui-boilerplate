import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Top from '../containers/TopContainer';
import About from '../containers/AboutContainer';

export const ROUTES = {
  top: '/top',
  about: '/about',
};

const Router = () => (
  <BrowserRouter>
    <Switch>
      <>
        <Route path="/" exact>
          <Top />
        </Route>
        <Route path={ROUTES.top} exact>
          <Top />
        </Route>
        <Route path={ROUTES.about} exact>
          <About />
        </Route>
      </>
    </Switch>
  </BrowserRouter>
);

export default Router;
