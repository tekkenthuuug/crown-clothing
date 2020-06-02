import React, { Component } from 'react';

import FormInput from '../../components/form-input/form-input.components';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import { Buttons, SignInContainer, Title } from './sign-in.styles';

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { handleSubmit, handleChange } = this;
    const { email, password } = this.state;

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
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              Sign in with Google
            </CustomButton>
          </Buttons>
        </form>
      </SignInContainer>
    );
  }
}
