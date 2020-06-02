import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser, dropdownHidden }) => {
  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link to='/shop' className='option'>
          Shop
        </Link>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            Sign out
          </div>
        ) : (
          <Link to='/signin' className='option'>
            Sign in
          </Link>
        )}
        <CartIcon />
      </div>
      {!dropdownHidden && <CartDropdown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  dropdownHidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
