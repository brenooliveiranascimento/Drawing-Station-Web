import { Dispatch } from 'react';
import { errorMessageConsole } from '../../../globalFuncions/errorMessage';
import { getUserInDataBase, registerUser, signInUser } from '../../../Services/authControlFirebase/authControlFirebase';
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
  dispatch(setUserDataSuccess(await fetchUserData));
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

export const signedUser = (uid: string): any => {
  return async function (dispatch: Dispatch<any>) {
    try {
      const userData: any = await getUserInDataBase(uid);
      dispatch(setUserDataSuccess(await userData.data()));
      dispatch(setExerciceProgress(await userData.data()));
    } catch (error: any) {
      errorMessageConsole(error.message);
    }
  };
};
