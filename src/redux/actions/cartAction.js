import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  INCREMENT_COUNT,
  DECREMENT_COUNT,
  TOGGLE_CART_SECTION,
  CLEAR_CART,
} from '../type';

const addToCart = (product) => (dispatch) => {
  try {
    dispatch({
      type: ADD_PRODUCT_TO_CART,
      payload: product.id,
    });
  } catch (error) {}
};

const openCartSection = (toggle) => (dispatch) => {
  try {
    dispatch({
      type: TOGGLE_CART_SECTION,
      payload: toggle,
    });
  } catch (error) {}
};

const clearCart = () => (dispatch) => {
  dispatch({ type: CLEAR_CART, payload: null });
};

export default {
  addToCart,
  openCartSection,
  clearCart,
};
