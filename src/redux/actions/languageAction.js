import { SET_LANGUAGE } from '../type';

const changeLanguage = (language) => (dispatch) => {
  dispatch({ type: SET_LANGUAGE, payload: language });
};

const languageAction = { changeLanguage };
export default languageAction;
