import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from '../components/navigation/Navigation';

const PageRoutes = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Navigation />
      <Switch>
        <Route exact path="/" component={lazy(() => import('../pages/HomePage/HomePage'))} />
        <Route
          exact
          path="/product/:id"
          component={lazy(() => import('../pages/singleProduct/SingleProduct'))}
        />
        <Route
          exact
          path="/search"
          component={lazy(() => import('../pages/searchPage/SearchPage'))}
        />
        <Route
          exact
          path="/shop/men"
          component={lazy(() => import("../pages/products/men"))}
        />
        <Route component={() => <h2>404: Page not Found</h2>}></Route>
      </Switch>
    </Suspense>
  </Router>
);

export default PageRoutes;
