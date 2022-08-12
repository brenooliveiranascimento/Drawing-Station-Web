import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PaitingProgressBar from '../../Components/ExerciceComponents/ProgressBar/PaitingProgressBar';
import { clearUserData } from '../../globalFuncions/localStoreControl';
import { logoutUser } from '../../Redux/actions/authActions/genericAuthActions';
import { clearExercice } from '../../Redux/actions/exercicesActions/genericActions';
import {
  BtnArea, BtnUser, Divisor, ProgressArea, UserMain,
} from './components';
import firebase from '../../Services/firebase_connection';

function User({ history }: any) {
  const [delet, setDelet] = useState(false);
  const user = useSelector(({ userData }: any) => userData);
  const dispatch = useDispatch();
  const { name, email, uid }: any = user;

  const signOutUser = () => {
    dispatch(logoutUser());
    dispatch(clearExercice());
    clearUserData();
    history.push('/');
    if (user.isVisitant) {
      firebase.firestore().collection('users').doc(user.uid).delete()
        .then(() => firebase.auth().signOut());
    }
  };

  const deleteAccount = () => {
    dispatch(logoutUser());
    dispatch(clearExercice());
    clearUserData();
    firebase.firestore().collection('users').doc(user.uid).delete()
      .then(() => firebase.auth().signOut());
  };

  return (
    <UserMain>
      <h1>
        Olá
        {' '}
        {name}
      </h1>
      <span>{email}</span>

      <BtnArea>
        <BtnUser onClick={signOutUser}>
          Sair
        </BtnUser>

        <BtnUser>
          Deletar Conta
        </BtnUser>
      </BtnArea>

      <Divisor />

      <ProgressArea>
        <span>Seu Progresso Total</span>
        <PaitingProgressBar />
      </ProgressArea>
    </UserMain>
  );
}

export default User;
