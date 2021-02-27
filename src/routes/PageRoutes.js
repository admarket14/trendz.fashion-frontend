import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const PageRoutes = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={lazy(() => import('../pages/HomePage/HomePage'))} />
        <Route exact path="/product/:id" component={lazy(() => import('../pages/singleProduct/SingleProduct'))} />
        <Route component={() => <h2>404: Page not Found</h2>}></Route>
      </Switch>
    </Suspense>
    <Switch>
    </Switch>
  </Router>
);

export default PageRoutes;
