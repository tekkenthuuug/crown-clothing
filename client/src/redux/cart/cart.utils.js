export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems[cartItemToAdd.id];

  if (existingCartItem) {
    return {
      ...cartItems,
      [existingCartItem.id]: {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      },
    };
  } else {
    return {
      ...cartItems,
      [cartItemToAdd.id]: { ...cartItemToAdd, quantity: 1 },
    };
  }
};

export const clearItemFromCart = (cartItems, cartItemToRemove) => {
  const { [cartItemToRemove.id]: removedCartItem, ...newCartItems } = {
    ...cartItems,
  };
  return newCartItems;
};

export const removeItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems[cartItemToRemove.id];

  if (existingCartItem.quantity === 1) {
    return clearItemFromCart(cartItems, cartItemToRemove);
  } else {
    return {
      ...cartItems,
      [cartItemToRemove.id]: {
        ...cartItemToRemove,
        quantity: cartItemToRemove.quantity - 1,
      },
    };
  }
};
