import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  INCREMENT_COUNT,
  DECREMENT_COUNT,
  TOGGLE_CART_SECTION,
  CLEAR_CART,
} from '../type';

const initialState = {
  items: {},
  cartSectionOpened: false,
};

export default function cartReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_PRODUCT_TO_CART:
      const { items } = state;
      if (items[payload]) {
        items[payload].count += 1;
      } else {
        items[payload] = {
          count: 1,
        };
      }

      return {
        ...state,
        items: items,
      };
    // case REMOVE_PRODUCT_FROM_CART:
    //   return {
    //     ...state,
    //     products: payload,
    //   };
    // case INCREMENT_COUNT:
    //   return {
    //     ...state,
    //     products: payload,
    //   };
    // case DECREMENT_COUNT:
    //   return {
    //     ...state,
    //     products: payload,
    //   };
    case TOGGLE_CART_SECTION:
      return {
        ...state,
        cartSectionOpened: payload,
      };
    case CLEAR_CART:
      return {
        ...state,
        items: {},
      };

    default:
      return state;
  }
}
