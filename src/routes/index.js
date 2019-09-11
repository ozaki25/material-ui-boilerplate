import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Top from '../containers/TopContainer';
import About from '../containers/AboutContainer';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <>
        <Route path="/" exact component={Top} />
        <Route path="/about" exact component={About} />
      </>
    </Switch>
  </BrowserRouter>
);

export default Router;
