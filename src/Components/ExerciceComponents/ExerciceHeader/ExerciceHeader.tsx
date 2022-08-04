import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { HandleBtn, HeaderContainer } from './components';
import { handleSideBar } from '../../../Redux/actions/exercicesActions/genericActions';

function ExerciceHeader() {
  const nowPath = useLocation().pathname;
  const dispatch = useDispatch();
  return (
    <HeaderContainer>
      <h1>
        {nowPath.substring(1)}
      </h1>
      <HandleBtn onClick={() => dispatch(handleSideBar(true))}>
        Exercicios
      </HandleBtn>
    </HeaderContainer>
  );
}

export default ExerciceHeader;
