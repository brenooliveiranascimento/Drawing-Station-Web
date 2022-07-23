import { Dispatch } from 'react';
import { errorMessageConsole } from '../../../globalFuncions/errorMessage';
import { registerUser, signInUser } from '../../../Services/authControlFirebase/authControlFirebase';
import {
  setExerciceProgress, setUserDataFail, setUserDataInit, setUserDataSuccess,
} from './genericAuthActions';

const createAccountAndData = async (userInf: any, dispatch: any) => {
  const { email, password, name } = userInf;

  dispatch(setUserDataInit());
  const fetchUserData = await registerUser(email, password, name);
  const userData = await {
    name, password, email, uid: fetchUserData.uid,
  };
  await dispatch(setExerciceProgress(fetchUserData));
  await dispatch(setUserDataSuccess(userData));
};

const signInWithEmailAndPassword = async (email: string, password: string, dispatch: any) => {
  const fetchUserData: any = await signInUser(email, password);
  dispatch(setUserDataSuccess(fetchUserData));
  dispatch(setExerciceProgress(fetchUserData));
};

const signInFail = (errorMessage: string, dispatch: any) => {
  errorMessageConsole(errorMessage);
  dispatch(setUserDataFail());
};

export const createUserCount = ({ name, email, password }: any): any => {
  return async function (dispatch: Dispatch<any>) {
    try {
      await createAccountAndData({ name, email, password }, dispatch);
    } catch (error: any) {
      errorMessageConsole(error.message);
      dispatch(setUserDataFail());
    }
  };
};

export const signIn = ({ email, password }: any): any => {
  return async function (dispatch: Dispatch<any>) {
    dispatch(setUserDataInit());
    try { signInWithEmailAndPassword(email, password, dispatch); } catch (error: any) {
      signInFail(error.message, dispatch);
    }
  };
};
