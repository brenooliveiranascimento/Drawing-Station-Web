import React from 'react';
import { useSelector } from 'react-redux';
import {
  BtnArea, BtnUser, Divisor, UserMain,
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
          Deletar conta
        </BtnUser>
      </BtnArea>

      <Divisor />
    </UserMain>
  );
}

export default User;
