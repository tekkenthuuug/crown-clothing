import React from 'react';

import FormInput from '../../components/form-input/form-input.components';
import CustomButton from '../../components/custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import { SignUpContainer, Title } from './sign-up.styles';

const initialState = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = { ...initialState };
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState(initialState);
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <SignUpContainer>
        <Title>I do not have a account</Title>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Display name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm password'
            required
          />
          <CustomButton type='submit'>Sign up</CustomButton>
        </form>
      </SignUpContainer>
    );
  }
}

export default SignUp;
