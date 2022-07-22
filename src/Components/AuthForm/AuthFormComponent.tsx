import React from 'react';
import {
  BtnRegister,
  BtnSignIn, FormContainer, FormLabel, InputAuth,
} from './AuthForm';
import {
  emailVerification,
  passwordVerification,
} from '../../Services/emailAndPasswordVerificaion/emailAndPasswordVerificaion';

class AuthForm extends React.Component {
  constructor(props:any) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      isRegister: false,
    };
  }

  updateUserState = (name: any, value: any) => this.setState({ [name]: value });

  changeMode = () => this.setState(({ isRegister }: any): any => ({
    isRegister: !isRegister,
  }));

  register = () => {
    const {
      email, password, name, confirmPassword,
    }: any = this.state;

    if (!name.length && confirmPassword !== password) return;
    if (emailVerification(email) && passwordVerification(password)) {
      alert('logado');
      return;
    }
    alert('erro register');
  };

  signIn = () => {
    const {
      email, password,
    }: any = this.state;
    if (emailVerification(email) && passwordVerification(password)) {
      alert('logar');
      return;
    }
    alert('erro signIn');
  };

  render() {
    const {
      name, email, password, confirmPassword, isRegister,
    }: any = this.state;
    return (
      <FormContainer>
        {
          isRegister && (
            <FormLabel htmlFor="name">
              <InputAuth
                name="name"
                value={name}
                onChange={({ target }) => this.updateUserState(target.name, target.value)}
              />
            </FormLabel>
          )
        }
        <FormLabel htmlFor="email">
          <InputAuth
            name="email"
            value={email}
            onChange={({ target }) => this.updateUserState(target.name, target.value)}
          />
        </FormLabel>
        <FormLabel htmlFor="password">
          <InputAuth
            type="password"
            name="password"
            value={password}
            onChange={({ target }) => this.updateUserState(target.name, target.value)}
          />
        </FormLabel>
        {
          isRegister && (
            <FormLabel htmlFor="confirmPassword">
              <InputAuth
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={({ target }) => this.updateUserState(target.name, target.value)}
              />
            </FormLabel>
          )
        }
        <BtnSignIn
          onClick={() => (isRegister ? this.register() : this.signIn())}
        >
          Signin
        </BtnSignIn>
        <BtnRegister
          onClick={this.changeMode}
        >
          Registrar
        </BtnRegister>
      </FormContainer>
    );
  }
}

export default AuthForm;
