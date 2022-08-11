import React from 'react';
import { useSelector } from 'react-redux';
import { Container, HeaderContent, LogoutButton } from './headerComponents';

function HeaderHome() {
  const user = useSelector(({ userData }: any) => userData);
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
      <LogoutButton>
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
