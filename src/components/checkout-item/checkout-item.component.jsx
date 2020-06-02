import React from 'react';
import { connect } from 'react-redux';

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from '../../redux/cart/cart.actions';

import {
  Arrow,
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Quantity,
  RemoveButton,
  Value,
  Price,
} from './checkout-item.styles';

const CheckoutItem = ({ item, clearItem, addItem, removeItem }) => {
  const { imageUrl, name, price, quantity } = item;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt='item' />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={() => removeItem(item)}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={() => addItem(item)}>&#10095;</Arrow>
      </Quantity>
      <Price>${price}</Price>
      <RemoveButton onClick={() => clearItem(item)}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
