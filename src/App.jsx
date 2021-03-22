import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IntlProvider } from 'react-intl';

import PageRoutes from './routes/PageRoutes';
import appLanguage from './lang/appLanguage';

import authAction from './redux/actions/authAction';
import languageAction from './redux/actions/languageAction';

const App = () => {
  const dispatch = useDispatch();
  const locale = useSelector((state) => state.language.locale);

  useEffect(() => {
    dispatch(authAction.loadUser());
  }, [dispatch]);

  return (
    <IntlProvider locale={locale} messages={appLanguage[locale]}>
      <PageRoutes />
    </IntlProvider>
  );
};

export default App;
