import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Preloader from '../components/loader/Preloader/Preloader';

import Navigation from '../components/navigation/Navigation';
import Sidebar from '../components/sidebar/Sidebar';

const PageRoutes = () => (
  <Router>
    <Suspense fallback={<Preloader />}>
      <Navigation />
      <Switch>
        <Route exact path="/" component={lazy(() => import('../pages/homePage/HomePage'))} />
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
          path="/shop/:category"
          component={lazy(() => import('../pages/shopping/Shopping'))}
        />
        <Route exact path="/help" component={lazy(() => import('../pages/help/Help'))} />
        <Route exact path="/setting" component={lazy(() => import('../pages/setting/Setting'))} />
        <Route
          exact
          path="/checkout"
          component={lazy(() => import('../pages/checkout/Checkout'))}
        />
        <Route
          exact
          path="/order-success"
          component={lazy(() => import('../pages/thankyouPage/ThankyouPage'))}
        />
        <Route component={lazy(() => import('../pages/notFoundPage/NotFoundPage'))}></Route>
      </Switch>
    </Suspense>
  </Router>
);

export default PageRoutes;
