import React from 'react';
import { useSelector } from 'react-redux';
import PaitingProgressBar from '../../Components/ExerciceComponents/ProgressBar/PaitingProgressBar';
import {
  BtnArea, BtnUser, Divisor, ProgressArea, UserMain,
} from './components';

function User() {
  const user = useSelector(({ userData }: any) => userData);
  const { name, email }: any = user;
  return (
    <UserMain>
      <h1>
        Olá
        {' '}
        {name}
      </h1>
      <span>{email}</span>

      <BtnArea>
        <BtnUser>
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
