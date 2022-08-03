/* eslint-disable no-console */
/* eslint-disable consistent-return */
import { errorMessageAlert } from '../../globalFuncions/errorMessage';
import { setUserInLocalStore } from '../../globalFuncions/persistUser';
import { userDataBase } from '../../_MOCKS/__ExerciceData';
import firebase from '../firebase_connection';

export const createUserInDataBase = async (userData: any) => {
  try {
    await firebase.firestore().collection('users').doc(userData.uid).set(userData);
  } catch (error: any) {
    errorMessageAlert(error.message);
  }
};

export const getUserInDataBase = async (userId: string) => {
  try {
    return await firebase.firestore().collection('users').doc(userId).get();
  } catch (error: any) {
    errorMessageAlert('erro');
  }
};

export const signInUser = async (email: string, password: string) => {
  try {
    const signIn = await firebase.auth().signInWithEmailAndPassword(email, password);
    const userId: any = await signIn.user?.uid;
    const userData = await getUserInDataBase(userId);
    setUserInLocalStore(userData?.data());
    return userData?.data();
  } catch (error: any) {
    errorMessageAlert(error.message);
  }
};

export const registerUser = async (email: string, password: string, name: string) => {
  try {
    const createUser = await firebase.auth().createUserWithEmailAndPassword(email, password);
    const userUid = createUser.user?.uid;
    await createUserInDataBase(userDataBase(email, userUid, name));
    setUserInLocalStore(userDataBase(email, userUid, name));
    return userDataBase(email, userUid, name);
  } catch (error: any) {
    errorMessageAlert(error.message);
  }
};
