/* eslint-disable no-unused-vars */
import React from 'react';
import { AiFillCheckCircle, AiFillCloseCircle, AiOutlineArrowRight } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import {
  BtnAreas, ExerciceInfContainer, MaterialBtn, NextBtn,
} from './components';

function ExerciceInf() {
  const userprogress = useSelector(({ exerciceProgress }: any) => exerciceProgress);
  const nowExercice = useSelector(({ exerciceData }: any) => exerciceData.nowExerciceData);

  return (
    <ExerciceInfContainer>
      {
        userprogress[nowExercice.dificulty][nowExercice.name] ? (
          <h1>
            {nowExercice.name}
            <AiFillCheckCircle className="check_icon_check" />
          </h1>
        ) : (
          <h1>
            {nowExercice.name}
            <AiFillCloseCircle className="check_icon_no_check" />
          </h1>
        )
      }
      <BtnAreas>
        <MaterialBtn>
          <span>Matériais</span>
        </MaterialBtn>
        <NextBtn>
          <span>Próxima aula</span>
          <AiOutlineArrowRight className="change_exercice" />
        </NextBtn>
      </BtnAreas>
    </ExerciceInfContainer>
  );
}

export default ExerciceInf;
