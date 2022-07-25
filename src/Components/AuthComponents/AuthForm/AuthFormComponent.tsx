/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
import React from 'react';
import { connect } from 'react-redux';
import {
  FiLock, FiMail, FiUser, FiXCircle, FiCheckCircle,
} from 'react-icons/fi';
import { createUserCount, signIn } from '../../../Redux/actions/authActions/authActions';
import { emailVerification, passwordVerification } from '../../../Services/emailAndPasswordVerificaion/emailAndPasswordVerificaion';
import {
  BtnRegister,
  BtnSignIn, FormContainer, FormLabel, InputAuth,
} from './AuthForm';

class AuthForm extends React.Component {
  constructor(props:any) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      isRegister: false,
      btnDisabled: true,
    };
  }

  updateUserState = (name: any, value: any) => this.setState({ [name]: value }, () => {
    this.checkUserInf();
  });

  changeMode = () => this.setState(({ isRegister }: any) => ({ isRegister: !isRegister }));

  checkUserInf = () => {
    const {
      email, password, name, confirmPassword,
    }: any = this.state;
    if (emailVerification(email) && passwordVerification(password)) {
      this.setState({ btnDisabled: false });
      return;
    }
    this.setState({ btnDisabled: true });
  };

  register = () => {
    const {
      email, password, name, confirmPassword,
    }: any = this.state;

    const { registerUser }: any = this.props;
    if (!name.length && confirmPassword !== password) return;
    if (emailVerification(email) && passwordVerification(password)) {
      registerUser(this.state);
      return;
    }
    alert('error register');
  };

  signIn = () => {
    const { email, password }: any = this.state;
    const { signInUser }: any = this.props;
    if (emailVerification(email) && passwordVerification(password)) {
      signInUser(this.state);
      return;
    }
    alert('erro signIn');
  };

  render() {
    const {
      name, email, password, confirmPassword, isRegister, btnDisabled,
    }: any = this.state;
    return (
      <FormContainer>
        {
          isRegister && (
            <FormLabel htmlFor="name">
              <FiUser className="Icons" />
              <InputAuth
                name="name"
                placeholder="Name"
                value={name}
                onChange={({ target }) => this.updateUserState(target.name, target.value)}
              />
            </FormLabel>
          )
        }
        <FormLabel htmlFor="email">
          <FiMail className="Icons" />
          <InputAuth
            placeholder="Email"
            name="email"
            value={email}
            onChange={({ target }) => this.updateUserState(target.name, target.value)}
          />
        </FormLabel>
        <FormLabel htmlFor="password">
          <FiLock className="Icons" />
          <InputAuth
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={({ target }) => this.updateUserState(target.name, target.value)}
          />
        </FormLabel>
        {
          isRegister && (
            <FormLabel htmlFor="confirmPassword">
              <FiLock className="Icons" />
              <InputAuth
                type="password"
                name="confirmPassword"
                placeholder="confirmPassword"
                value={confirmPassword}
                onChange={({ target }) => this.updateUserState(target.name, target.value)}
              />
            </FormLabel>
          )
        }
        <BtnSignIn
          color={btnDisabled ? 'rgba(124, 74, 124, 0.2) ' : 'rgba(124, 74, 124, 0.4)'}
          disabled={btnDisabled}
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

const mapDispatchToProps = (dispatch:any) => ({
  registerUser: (userData: any) => dispatch(createUserCount(userData)),
  signInUser: (userData: any) => dispatch(signIn(userData)),
});

export default connect(null, mapDispatchToProps)(AuthForm);
