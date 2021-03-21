import { TOGGLE_SIDEBAR } from '../type';

const initialState = {
  sidebarStatus: (window.innerWidth >= 900)
};

export default function HomeReducer(state = initialState, action) {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebarStatus: payload,
      };
    default:
      return state;
  }
}
