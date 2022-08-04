import React from 'react';
import { useLocation } from 'react-router-dom';
import { HandleBtn, HeaderContainer } from './components';

function ExerciceHeader() {
  const nowPath = useLocation().pathname;
  return (
    <HeaderContainer>
      <h1>
        {nowPath.substring(1)}
      </h1>
      <HandleBtn>
        Exercicios
      </HandleBtn>
    </HeaderContainer>
  );
}

export default ExerciceHeader;
