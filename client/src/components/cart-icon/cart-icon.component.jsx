import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions.js';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import {
  CartIconContainer,
  ItemCount,
  StyledShoppingIcon,
} from './cart-icon.styles';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <CartIconContainer onClick={toggleCartHidden}>
      <StyledShoppingIcon />
      <ItemCount>{itemCount}</ItemCount>
    </CartIconContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
