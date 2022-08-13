/* eslint-disable global-require */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
import React from 'react';
import { connect } from 'react-redux';
import {
  FiLock, FiMail, FiUser, FiXCircle, FiCheckCircle, FiEye,
} from 'react-icons/fi';
import {
  FaEye, FaEyeSlash, FaGooglePlay, FaLaptopHouse,
} from 'react-icons/fa';
import Lottie from 'react-lottie';
import { createUserCount, signIn } from '../../../Redux/actions/authActions/authActions';
import { emailVerification, passwordVerification } from '../../../Services/emailAndPasswordVerificaion/emailAndPasswordVerificaion';
import {
  BtnRegister,
  BtnShow,
  BtnSignIn,
  FormContainer,
  FormLabel, InputAuth, LinkBtn, LinksArea, RespansiveLogo, TermosDeUsoAre,
} from './AuthForm';
import animationLoading from '../../../Assets/Lottie/lf30_editor_0ktlr6ix.json';
// import { signinVisitant } from '../../../Redux/actions/authActions/genericAuthActions';

const defaultOptionsLoading: any = {
  loop: true,
  autoplay: true,
  animationData: animationLoading,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

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
      passwordDifferent: 'white',
      showPassword: false,
      isSignin: false,
    };
  }

  updateUserState = (name: any, value: any) => this.setState({ [name]: value }, () => {
    const { isRegister }: any = this.state;
    if (isRegister) return this.checkUserInfRegister();
    this.checkUserInf();
  });

  handlePassword = () => {
    this.setState(({ showPassword }: any) => ({ showPassword: !showPassword }));
  };

  changeMode = () => {
    this.setState(({ isRegister }: any) => ({
      isRegister: !isRegister,
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      btnDisabled: true,
      passwordDifferent: 'white',
    }));
  };

  checkUserInf = () => {
    const { email, password }: any = this.state;
    if (emailVerification(email) && passwordVerification(password)) {
      this.setState({ btnDisabled: false });
      return;
    }
    this.setState({ btnDisabled: true });
  };

  registerVisitant = () => {
    const visitInf = {
      name: 'Pintor',
      email: `pintor${new Date().getMinutes()}${new Date().getFullYear()}${new Date().getDay()}${new Date().getMilliseconds()}@gmail.com`,
      password: '123123',
    };

    const { registerUser, visitLog }: any = this.props;
    registerUser(visitInf);
    visitLog();
    this.setState({ isSignin: false });
  };

  checkUserInfRegister = () => {
    const {
      email, password, name, confirmPassword,
    }: any = this.state;

    if (password !== confirmPassword) {
      this.setState({ passwordDifferent: '#c4354f' });
    } else {
      this.setState({ passwordDifferent: 'white' });
    }
    if (emailVerification(email) && passwordVerification(password) && name.length
      && passwordVerification(confirmPassword)) {
      this.setState({ btnDisabled: false, passwordDifferent: 'white' });
      return;
    }
    this.setState({ btnDisabled: true });
  };

  register = () => {
    this.setState({ isSignin: true });
    const { visitLog, registerUser }: any = this.props;
    const {
      email, password, name, confirmPassword,
    }: any = this.state;

    if (!name.length && confirmPassword !== password) return;
    if (emailVerification(email) && passwordVerification(password)) {
      setTimeout(() => this.setState({ isSignin: false }), 1000);
      registerUser(this.state);
    }
  };

  signIn = () => {
    this.setState({ isSignin: true });
    const { email, password }: any = this.state;
    const { signInUser }: any = this.props;
    if (emailVerification(email) && passwordVerification(password)) {
      signInUser(this.state);
      setTimeout(() => this.setState({ isSignin: false }), 1000);
    }
  };

  render() {
    const {
      name, email, password, confirmPassword, isRegister, btnDisabled, passwordDifferent,
      showPassword, isSignin,
    }: any = this.state;
    return (
      <FormContainer>
        <RespansiveLogo
          src={require('../../../Assets/drawing/logo1.png')}
          alt="logo"
        />
        {
          passwordDifferent === '#c4354f' && (
            <span className="errorMessage">As Senhas Não Condizem</span>
          )
        }
        {
          isRegister && (
            <FormLabel htmlFor="name">
              <FiUser className="Icons" />
              <InputAuth
                autoCapitalize="none"
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
            style={{ borderBottomColor: passwordDifferent, color: passwordDifferent }}
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            value={password}
            onChange={({ target }) => this.updateUserState(target.name, target.value)}
          />
          <BtnShow
            onClick={this.handlePassword}
          >
            {
              !showPassword ? (
                <FaEye />
              ) : (
                <FaEyeSlash />
              )
            }
          </BtnShow>
        </FormLabel>
        {
          isRegister && (
            <FormLabel htmlFor="confirm Password">
              <FiLock className="Icons" />
              <InputAuth
                style={{ borderBottomColor: passwordDifferent, color: passwordDifferent }}
                type={showPassword ? 'text' : 'password'}
                name="confirmPassword"
                placeholder="confirmPassword"
                value={confirmPassword}
                onChange={({ target }) => this.updateUserState(target.name, target.value)}
              />
            </FormLabel>
          )
        }
        <BtnSignIn
          type="button"
          color={btnDisabled ? 'rgba(124, 74, 124, 0.4) ' : 'rgba(124, 74, 124, 0.9)'}
          disabled={btnDisabled}
          onClick={() => (isRegister ? this.register() : this.signIn())}
        >
          {
            isSignin ? (
              <Lottie
                style={{
                  alignSelf: 'center',
                  justifyContent: 'center',
                  width: 56,
                  height: 50,
                }}
                options={defaultOptionsLoading}
              />
            ) : (
              <section>
                { !isRegister ? 'Entrar' : 'Registrar' }
              </section>
            )
          }
        </BtnSignIn>
        <BtnRegister
          type="button"
          onClick={this.changeMode}
        >
          { !isRegister ? 'Registrar' : 'Já possuo conta' }
        </BtnRegister>
        <BtnRegister
          onClick={this.registerVisitant}
        >
          Entrar Como Visitante
        </BtnRegister>
        <LinksArea>
          <LinkBtn
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.drawingstation"
          >
            <FaGooglePlay
              size={20}
            />
            <span>
              Baixe o App
            </span>
          </LinkBtn>
        </LinksArea>
        {
          isRegister && (
            <TermosDeUsoAre href="https://brenooliveiranascimento.github.io/" target="_blank">
              <span>
                Ao se registrar voce concorde com nossos termos de uso
              </span>
            </TermosDeUsoAre>
          )
        }
      </FormContainer>
    );
  }
}

const mapDispatchToProps = (dispatch:any) => ({
  registerUser: (userData: any) => dispatch(createUserCount(userData)),
  signInUser: (userData: any) => dispatch(signIn(userData)),
  // visitLog: () => dispatch(signinVisitant()),
});

export default connect(null, mapDispatchToProps)(AuthForm);
