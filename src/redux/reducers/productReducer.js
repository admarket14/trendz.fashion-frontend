import { GET_PRODUCT, GET_PRODUCTS } from '../type';

const initialState = {
  products: null,
  product: null,
};

export default function languageReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    case GET_PRODUCT:
      return {
        ...state,
        product: payload,
      };
    default:
      return state;
  }
}
