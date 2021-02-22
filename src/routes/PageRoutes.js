import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// pages
import Home from '../pages/Home';
import HomeTemp from '../pages/HomeTemp';

const PageRoutes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/himateja/home" component={HomeTemp} />
    </Switch>
  </Router>
);

export default PageRoutes;
