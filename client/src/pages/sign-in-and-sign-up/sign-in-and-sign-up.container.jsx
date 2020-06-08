import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selectors';

import SignInAndSignUp from './sign-in-and-sign-up.component';

const SignInAndSignUpContainer = ({ currentUser, ...otherProps }) =>
  currentUser ? <Redirect to='/' /> : <SignInAndSignUp {...otherProps} />;

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(SignInAndSignUpContainer);
