import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormInput from '../../components/form-input/form-input.components';
import CustomButton from '../custom-button/custom-button.component';

import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions';

import { Buttons, SignInContainer, Title } from './sign-in.styles';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { emailSighInStart } = this.props;
    const { email, password } = this.state;

    emailSighInStart(email, password);
  };

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { googleSignInStart } = this.props;
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
              onClick={googleSignInStart}
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

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSighInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
