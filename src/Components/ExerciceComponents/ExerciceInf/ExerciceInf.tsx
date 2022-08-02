/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  AiFillCheckCircle, AiFillCiCircle, AiFillCloseCircle, AiOutlineArrowRight,
} from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { updateuserProgress } from '../../../Redux/actions/updateProgressActions/updateProgressActions';
import {
  BtnAreas, ExerciceInfContainer, IncompletBtn, MaterialBtn, NextBtn,
} from './components';

function ExerciceInf() {
  const dispatch = useDispatch();
  const userprogress = useSelector(({ exerciceProgress }: any) => exerciceProgress);
  const nowExercice = useSelector(({ exerciceData }: any) => exerciceData.nowExerciceData);

  return (
    <ExerciceInfContainer>
      {
          nowExercice.finished ? (
            <section>
              {
              userprogress[nowExercice.dificulty][nowExercice.name] ? (
                <button
                  onClick={() =>
                    dispatch(updateuserProgress(nowExercice.name, nowExercice.dificulty))}
                  className="btn_conclude"
                  type="button"
                >
                  <h1>
                    {nowExercice.name}
                    {' '}
                    {nowExercice.description}
                    <AiFillCheckCircle className="check_icon_check" />
                  </h1>
                </button>
              ) : (
                <button
                  onClick={() =>
                    dispatch(updateuserProgress(nowExercice.name, nowExercice.dificulty))}
                  className="btn_conclude"
                  type="button"
                >
                  <h1>
                    {nowExercice.name}
                    {' '}
                    {nowExercice.description}
                    <AiFillCloseCircle className="check_icon_no_check" />
                  </h1>
                </button>
              )
            }
            </section>
          ) : (
            <section>
              {
             userprogress[nowExercice.dificulty][nowExercice.name] ? (
               <button
                 onClick={() => alert('Exercicio Incompleto')}
                 className="btn_conclude"
                 type="button"
               >
                 <h1>
                   {nowExercice.name}
                   {' '}
                   {nowExercice.description}
                   <AiFillCheckCircle className="check_icon_check" />
                 </h1>
               </button>
             ) : (
               <button
                 onClick={() => alert('Exercicio Incompletp')}
                 className="btn_conclude"
                 type="button"
               >
                 <h1>
                   {nowExercice.name}
                   {' '}
                   {nowExercice.description}
                   <AiFillCiCircle className="check_icon_no_check" />
                 </h1>
               </button>
             )
           }
            </section>
          )
      }
      <BtnAreas>
        {
          nowExercice.finished ? (
            <section style={{ display: 'flex' }}>
              <MaterialBtn>
                <span>Matériais</span>
              </MaterialBtn>
              <NextBtn>
                <span>Próxima aula</span>
                <AiOutlineArrowRight className="change_exercice" />
              </NextBtn>
            </section>
          ) : (
            <IncompletBtn>
              <span>Exercicio Incompleto Incompleto</span>
            </IncompletBtn>
          )
        }
      </BtnAreas>
    </ExerciceInfContainer>
  );
}

export default ExerciceInf;
