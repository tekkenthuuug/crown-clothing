import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';

import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
  CheckoutContainer,
  Header,
  HeaderBlock,
  TestWarning,
  Total,
} from './checkout.styles';

const CheckoutPage = ({ cartItems, cartTotal }) => {
  return (
    <CheckoutContainer>
      <Header>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </Header>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} item={cartItem} />
      ))}
      <Total>
        <span>Total: ${cartTotal}</span>
      </Total>
      <TestWarning>
        *Stripe is working in test mode, please use following credit card for
        payment*
        <br />
        4242 4242 4242 4242 - Exp: any future date - CVV: 123
      </TestWarning>
      <StripeCheckoutButton price={cartTotal} />
    </CheckoutContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
