/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-unused-vars */
import React from 'react';
import './styles.css';
import {
  AiFillCheckCircle, AiFillCiCircle, AiFillCloseCircle, AiOutlineArrowRight,
} from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { hiddenMaterial, showMaterial } from '../../../Redux/actions/exercicesActions/genericActions';
import { updateuserProgress } from '../../../Redux/actions/updateProgressActions/updateProgressActions';
import {
  BtnAreas, ExerciceInfContainer, IncompletBtn, MaterialBtn, NextBtn,
} from './components';

function ExerciceInf() {
  const dispatch = useDispatch();
  const userprogress = useSelector(({ exerciceProgress }: any) => exerciceProgress);
  const nowExercice = useSelector(({ exerciceData }: any) => exerciceData.nowExerciceData);
  const showExerciceMaterials = useSelector(({ exerciceData }: any) => exerciceData.showMaterials);

  const handleMaterials = () =>
    (showExerciceMaterials ? dispatch(hiddenMaterial()) : dispatch(showMaterial()));

  return (
    <ExerciceInfContainer>
      {
          nowExercice.finished ? (
            <section className="ExerciceNameContainer">
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
            <section className="ExerciceNameContainer">
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
                   <AiFillCheckCircle />
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
                   <AiFillCiCircle color="white" style={{ marginBottom: -5 }} />
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
            <section className="btn_content">
              <MaterialBtn onClick={handleMaterials}>
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
