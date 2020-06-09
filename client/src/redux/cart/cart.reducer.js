import cartActionTypes from './cart.types';

import { addItemToCart, clearItemFromCart, removeItem } from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: {},
  error: null,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case cartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: clearItemFromCart(state.cartItems, action.payload),
      };
    case cartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItem(state.cartItems, action.payload),
      };
    case cartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: {},
      };
    case cartActionTypes.FETCH_CART_SUCCESS:
      return {
        ...state,
        cartItems: action.payload,
        error: null,
      };
    case cartActionTypes.FETCH_CART_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
