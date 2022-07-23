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

export const createUserCount = ({ name, email, password }: any): any => {
  return async function (dispatch: Dispatch<any>) {
    try {
      await createAccountAndData({
        name, email, password,
      }, dispatch);
    } catch (error: any) {
      errorMessageConsole(error.message);
      dispatch(setUserDataFail());
    }
  };
};

export const signIn = ({ email, password }: any): any => {
  return async function (dispatch: Dispatch<any>) {
    dispatch(setUserDataInit());
    try {
      const fetchUserData: any = await signInUser(email, password);
      dispatch(setUserDataSuccess(fetchUserData));
      dispatch(setExerciceProgress(fetchUserData));
    } catch (error: any) {
      errorMessageConsole(error.message);
      dispatch(setUserDataFail());
    }
  };
};
