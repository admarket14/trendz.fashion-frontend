import {
  TOGGLE_SIDEBAR
} from '../type';

const toggleSidebar = (payload) => (dispatch) => {
  try {
    dispatch({
      type: TOGGLE_SIDEBAR,
      payload: payload,
    });
  } catch (error) {}
};

export default {
  toggleSidebar
};
