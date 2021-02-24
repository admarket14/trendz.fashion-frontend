import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';

import languageAction from '../redux/actions/languageAction';

const Home = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <FormattedMessage id="hello" />
      <br />
      <button onClick={() => dispatch(languageAction.changeLanguage('ja'))}>Japanese</button>
      <button onClick={() => dispatch(languageAction.changeLanguage('en'))}>english</button>
    </div>
  );
};

export default Home;
