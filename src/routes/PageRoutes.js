import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// pages
import Home from '../pages/HomePage/component';

const PageRoutes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>
);

export default PageRoutes;
