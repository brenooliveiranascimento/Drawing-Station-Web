/* eslint-disable no-console */
/* eslint-disable consistent-return */
import { userDataBase } from '../../MOCKS/__ExerciceData';
import firebase from '../firebase_connection';

export const createUserInDataBase = async (userData: any) => {
  try {
    await firebase.firestore().collection('users').doc(userData.uid).set(userData);
  } catch (error: any) {
    console.log(error.message);
  }
};

export const signInUser = async (email: string, password: string) => {
  try {
    const createUser = await firebase.auth().createUserWithEmailAndPassword(email, password);
    const userData = createUser.user?.uid;
    return userData;
  } catch (error: any) {
    console.log(error.message);
  }
};

export const registerUser = async (email: string, password: string, name: string) => {
  try {
    const createUser = await firebase.auth().createUserWithEmailAndPassword(email, password);
    const userUid = createUser.user?.uid;
    await createUserInDataBase(userDataBase(email, userUid, name));
    return userDataBase(email, userUid, name);
  } catch (error: any) {
    console.log(error.message);
  }
};
