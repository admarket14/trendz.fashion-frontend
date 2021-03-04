import { SET_LANGUAGE } from '../type';

const initialState = {
  locale: 'en',
};

export default function languageReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_LANGUAGE:
      return {
        ...state,
        locale: payload,
      };
    default:
      return state;
  }
}
