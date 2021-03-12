import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Preloader from '../components/loader/Preloader/Preloader';

import Navigation from '../components/navigation/Navigation';
import Sidebar from "../components/sidebar/Sidebar";

const PageRoutes = () => (
  <Router>
    <Suspense fallback={<Preloader />}>
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
          component={lazy(() => import("../pages/products/products"))}
        />
        <Route
          exact
          path="/shop/women"
          component={lazy(() => import("../pages/products/products"))}
        />
        <Route
          exact
          path="/shop/jewellery"
          component={lazy(() => import("../pages/products/products"))}
        />
        <Route
          exact
          path="/shop/electronics"
          component={lazy(() => import("../pages/products/products"))}
        />
        <Route
          exact
          path="/help"
          component={lazy(() => import("../pages/help/help"))}
        />
        <Route component={() => <h2>404: Page not Found</h2>}></Route>
      </Switch>
    </Suspense>
  </Router>
);

export default PageRoutes;