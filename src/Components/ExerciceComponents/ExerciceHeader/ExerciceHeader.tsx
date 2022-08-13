import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { HandleBtn, HeaderContainer, ProgressBar } from './components';
import { handleSideBar } from '../../../Redux/actions/exercicesActions/genericActions';
import PaitingProgressBar from '../ProgressBar/PaitingProgressBar';

function ExerciceHeader() {
  const nowPath = useLocation().pathname;
  const dispatch = useDispatch();
  return (
    <HeaderContainer>
      <ProgressBar>
        <h1>
          {nowPath.substring(1)}
        </h1>
        <PaitingProgressBar />
      </ProgressBar>
      <HandleBtn onClick={() => dispatch(handleSideBar(true))}>
        Exercícios
      </HandleBtn>
    </HeaderContainer>
  );
}

export default ExerciceHeader;
