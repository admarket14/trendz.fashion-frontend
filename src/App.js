import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import PageRoutes from './routes/PageRoutes';

const App = () => (
  <Provider store={store}>
    <PageRoutes />
  </Provider>
);

export default App;
