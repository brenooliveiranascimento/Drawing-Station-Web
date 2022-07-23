/* eslint-disable func-names */
/* eslint-disable no-console */
import { Dispatch } from 'react';
import { registerUser, signInUser } from '../../../Services/authControlFirebase/authControlFirebase';
import { FETCH_PROGRESS } from '../../modules/exerciceProgress/exerciceProgressTypes';
import { SIGNIN_FAIL, SIGNIN_INIT, SIGNIN_SUCCESS } from '../../modules/userData/userDataTypes';

export const setExerciceProgress = ({ progress }: any): any => ({
  type: FETCH_PROGRESS,
  payLoad: progress,
});

export const setUserDataSuccess = ({ name, email, uid }: any): any => ({
  type: SIGNIN_SUCCESS,
  payLoad: {
    name,
    email,
    uid,
  },
});

export const setUserDataInit: any = () => ({
  type: SIGNIN_INIT,
});

export const setUserDataFail: any = () => ({
  type: SIGNIN_FAIL,
});

export const createUserCount = ({ name, email, password }: any): any => {
  return async function (dispatch: Dispatch<any>) {
    dispatch(setUserDataInit());
    try {
      const createUserInDataBase = await registerUser(email, password, name);
      const userData = await {
        name, password, email, uid: createUserInDataBase.uid,
      };
      await dispatch(setExerciceProgress(createUserInDataBase));
      await dispatch(setUserDataSuccess(userData));
    } catch (error: any) {
      console.log(error.message);
      dispatch(setUserDataFail());
    }
  };
};

export const signIn = ({ email, password }: any): any => {
  return async function (dispatch: Dispatch<any>) {
    dispatch(setUserDataInit());
    try {
      const fetchUserData: any = await signInUser(email, password);
      console.log(fetchUserData.progress);
      dispatch(setUserDataSuccess(fetchUserData));
      dispatch(setExerciceProgress(fetchUserData));
    } catch (error: any) {
      console.log(error.message);
      dispatch(setUserDataFail());
    }
  };
};
