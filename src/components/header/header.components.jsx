import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  Option,
} from './header.styles';

const Header = ({ currentUser, dropdownHidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <Option as={Link} to='/shop'>
          Shop
        </Option>
        {currentUser ? (
          <Option onClick={() => auth.signOut()}>Sign out</Option>
        ) : (
          <Option as={Link} to='/signin'>
            Sign in
          </Option>
        )}
        <CartIcon />
      </OptionsContainer>
      {!dropdownHidden && <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  dropdownHidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
