/* eslint-disable no-unused-vars */
import React from 'react';
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { ExerciceInfContainer } from './components';

function ExerciceInf() {
  const userprogress = useSelector(({ exerciceProgress }: any) => exerciceProgress);
  const nowExercice = useSelector(({ exerciceData }: any) => exerciceData.nowExerciceData);

  return (
    <ExerciceInfContainer>
      <h1>{nowExercice.name}</h1>
      {
        userprogress[nowExercice.dificulty][nowExercice.name] ? (
          <AiFillCheckCircle className="check_icon_check" />
        ) : (
          <AiFillCloseCircle className="check_icon_no_check" />
        )
      }
    </ExerciceInfContainer>
  );
}

export default ExerciceInf;
