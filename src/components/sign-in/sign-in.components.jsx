import React, { Component } from 'react';

import FormInput from '../../components/form-input/form-input.components';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ email: '', password: '' });
  }

  handleChange(e) {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  }

  render() {
    const { handleSubmit, handleChange } = this;
    const { email, password } = this.state;

    return (
      <div className='sign-in' onSubmit={handleSubmit}>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form>
          <FormInput
            type='text'
            name='email'
            value={email}
            handleChange={handleChange}
            required
            label='email'
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            handleChange={handleChange}
            required
            label='password'
          />
          <div className='buttons'>
            <CustomButton type='submit'>Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
