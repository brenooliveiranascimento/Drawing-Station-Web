import { getUserInDataBase } from '../authControlFirebase/authControlFirebase';
import firebase from '../firebase_connection';

export const fetchUserData = async (uid: string) => {
  const requestUserData = await getUserInDataBase(uid);
  return requestUserData?.data();
};

export const updateDataBase = async (uid: string, userProgress: any) => {
  await firebase.firestore().collection('users').doc(uid).set(userProgress);
};

export const updateUserProgress = async (uid: any, exercice: string, dificulty: string) => {
  const userData: any = await fetchUserData(uid);
  const exerciceConcludes = await userData.progress.concldes;
  const allExerciceConclude = await userData.progress.all;

  if (await userData.progress[dificulty][exercice]) {
    userData.progress[dificulty][exercice] = false;
    userData.progress.all = allExerciceConclude - 1;
    userData.progress.concldes = exerciceConcludes - 1;
    updateDataBase(uid, userData);
    return;
  }
  userData.progress[dificulty][exercice] = true;
  userData.progress.all = allExerciceConclude + 1;
  userData.progress.concldes = exerciceConcludes + 1;
  updateDataBase(uid, userData);
};
