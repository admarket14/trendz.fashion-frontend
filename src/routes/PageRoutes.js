import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// pages
import Home from '../pages/HomePage/HomePage';
import SingleProduct from '../pages/singleProduct/SingleProduct';

const PageRoutes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/product/:id" component={SingleProduct} />
    </Switch>
  </Router>
);

export default PageRoutes;
