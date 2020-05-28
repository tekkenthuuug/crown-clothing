// export const addItemToCart = (cartItems, cartItemToAdd) => {
//   const existingCartItem = cartItems.find(
//     (cartItem) => cartItem.id === cartItemToAdd.id
//   );

//   if (existingCartItem) {
//     return cartItems.map((cartItem) =>
//       cartItem.id === cartItemToAdd.id
//         ? { ...cartItem, quantity: cartItem.quantity + 1 }
//         : cartItem
//     );
//   }

//   return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
// };

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
