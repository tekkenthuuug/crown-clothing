import React from 'react';

import {
  CartItemContainer,
  Details,
  Name,
  StyledImg,
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemContainer>
      <StyledImg src={imageUrl} alt='Item' />
      <Details>
        <Name>{name}</Name>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </Details>
    </CartItemContainer>
  );
};

export default CartItem;
