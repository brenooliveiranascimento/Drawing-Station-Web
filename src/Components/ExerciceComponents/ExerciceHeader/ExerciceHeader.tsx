import React from 'react';
import { useLocation } from 'react-router-dom';
import { HeaderContainer } from './components';

function ExerciceHeader() {
  const nowPath = useLocation().pathname;
  return (
    <HeaderContainer>
      <h1>
        {nowPath.substring(1)}
      </h1>
    </HeaderContainer>
  );
}

export default ExerciceHeader;
