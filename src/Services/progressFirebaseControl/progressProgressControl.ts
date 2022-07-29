/* eslint-disable max-len */
import { getUserInDataBase } from '../authControlFirebase/authControlFirebase';
import firebase from '../firebase_connection';

export const fetchUserData = async (uid: string) => {
  const requestUserData = await getUserInDataBase(uid);
  return requestUserData?.data();
};

export const updateDataBase = async (uid: string, userProgress: any) => {
  await firebase.firestore().collection('users').doc(uid).set(userProgress);
};

export const updateUserProgressInDatabase = async (uid: any, exercice: string, dificulty: string) => {
  const userData: any = await fetchUserData(uid);
  const allExerciceConclude = await userData.progress.all;
  const exerciceConcludes = await userData.progress[dificulty].concldes;

  if (userData.progress[dificulty][exercice]) {
    userData.progress[dificulty][exercice] = false;
    userData.progress.all = allExerciceConclude - 1;
    userData.progress[dificulty].concldes = exerciceConcludes - 1;
    console.log(userData);
    updateDataBase(uid, userData);
    return;
  }
  userData.progress[dificulty][exercice] = true;
  userData.progress.all = allExerciceConclude + 1;
  userData.progress[dificulty].concldes = exerciceConcludes + 1;
  console.log(userData);
  updateDataBase(uid, userData);
};
