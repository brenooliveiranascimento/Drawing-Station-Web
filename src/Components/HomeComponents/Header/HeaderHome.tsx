import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearUserData } from '../../../globalFuncions/localStoreControl';
import { logoutUser } from '../../../Redux/actions/authActions/genericAuthActions';
import { Container, HeaderContent, LogoutButton } from './headerComponents';

function HeaderHome() {
  const user = useSelector(({ userData }: any) => userData);
  const dispatch = useDispatch();
  const signOutUser = () => {
    dispatch(logoutUser());
    clearUserData();
  };
  return (
    <Container>
      <h1>
        Olá
        {' '}
        {user.name}
      </h1>
      <span>
        Hora de pintar!!
      </span>
      <LogoutButton
        onClick={signOutUser}
      >
        Sair
      </LogoutButton>
      <HeaderContent>
        <h1>Sente Dificuldade Em Algum Exercicio? Não Temas!!!</h1>
        <span>Fique a vontate para tirar duvidas</span>
      </HeaderContent>
    </Container>
  );
}

export default HeaderHome;
