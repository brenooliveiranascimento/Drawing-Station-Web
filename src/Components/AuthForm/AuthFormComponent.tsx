import React from 'react';
import {
  BtnSignIn, FormContainer, FormLabel, InputAuth,
} from './AuthForm';

class AuthForm extends React.Component {
  constructor(props:any) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    const { email, password }: any = this.state;
    return (
      <FormContainer>
        <FormLabel htmlFor="email">
          <InputAuth
            name="email"
            value={email}
          />
        </FormLabel>
        <FormLabel htmlFor="password">
          <InputAuth
            name="password"
            value={password}
          />
        </FormLabel>
        <BtnSignIn>
          Signin
        </BtnSignIn>
      </FormContainer>
    );
  }
}

export default AuthForm;
