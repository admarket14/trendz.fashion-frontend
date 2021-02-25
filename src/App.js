import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IntlProvider } from 'react-intl';

import PageRoutes from './routes/PageRoutes';
import appLanguage from './lang/appLanguage';

import languageAction from './redux/actions/languageAction';

const App = () => {
  const dispatch = useDispatch();
  const locale = useSelector((state) => state.language.locale);

  // here we will be getting locale lang from browser in set that in redux state
  // useEffect(() => {
  //   dispatch(languageAction.changeLanguage('en'));
  // }, []);

  return (
    <IntlProvider locale={locale} messages={appLanguage[locale]}>
      <PageRoutes />
    </IntlProvider>
  );
};

export default App;
