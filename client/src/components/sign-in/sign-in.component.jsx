import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions';

import { Buttons, SignInContainer, Title } from './sign-in.styles';

const initialState = {
  email: '',
  password: '',
};

const SignIn = ({ googleSignInStart, emailSighInStart }) => {
  const [userCredentials, setUserCredentials] = useState({ ...initialState });
  const { email, password } = userCredentials;

  const handleSubmit = async (e) => {
    e.preventDefault();

    emailSighInStart(email, password);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInContainer onSubmit={handleSubmit}>
      <Title>I already have an account</Title>
      <span>Sign in with your email and password</span>
      <form>
        <FormInput
          type='text'
          name='email'
          value={email}
          handleChange={handleChange}
          required
          label='Email'
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          handleChange={handleChange}
          required
          label='Password'
        />
        <Buttons>
          <CustomButton type='submit'>Sign in</CustomButton>
          <CustomButton
            type='button'
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </Buttons>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSighInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
