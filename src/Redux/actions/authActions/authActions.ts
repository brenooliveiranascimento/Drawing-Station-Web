/* eslint-disable func-names */
/* eslint-disable no-console */
/* eslint-disable arrow-body-style */
import { Dispatch } from 'react';
import { registerUser } from '../../../Services/authControlFirebase/authControlFirebase';
import { FETCH_PROGRESS } from '../../modules/exerciceProgress/exerciceProgressTypes';
import { SIGNIN_FAIL, SIGNIN_INIT, SIGNIN_SUCCESS } from '../../modules/userData/userDataTypes';

export const setExerciceProgress = (progressData: any): any => ({
  type: FETCH_PROGRESS,
  payoad: progressData,
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
  console.log(name, email, password);
  return async function (dispatch: Dispatch<any>) {
    dispatch(setUserDataInit());
    try {
      const createUserInDataBase = await registerUser(email, password, name);
      const userData = await {
        name,
        password,
        email,
        uid: createUserInDataBase.uid,
      };
      await dispatch(setExerciceProgress(createUserInDataBase.progress));
      await dispatch(setUserDataSuccess(userData));
    } catch (error: any) {
      console.log(error.message);
      dispatch(setUserDataFail());
    }
  };
};

export const signInUser = ({ email, password }: any) => {
  console.log(email, password);
};
