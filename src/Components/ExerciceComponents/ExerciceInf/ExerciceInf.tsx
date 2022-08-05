/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-unused-vars */
import React from 'react';
import './styles.css';
import {
  AiFillCheckCircle, AiFillCiCircle, AiFillCloseCircle, AiOutlineArrowRight,
} from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { changeNowExercice, hiddenMaterial, showMaterial } from '../../../Redux/actions/exercicesActions/genericActions';
import { updateuserProgress } from '../../../Redux/actions/updateProgressActions/updateProgressActions';
import {
  BtnAreas, ExerciceInfContainer, IncompletBtn, MaterialBtn, NextBtn,
} from './components';

function ExerciceInf() {
  const dispatch = useDispatch();
  const userprogress = useSelector(({ exerciceProgress }: any) => exerciceProgress);
  const nowExercice = useSelector(({ exerciceData }: any) => exerciceData.nowExerciceData);
  const showExerciceMaterials = useSelector(({ exerciceData }: any) => exerciceData.showMaterials);
  const allExercice = useSelector(({ exerciceData }: any) => exerciceData.exercices);
  const handleMaterials = () =>
    (showExerciceMaterials ? dispatch(hiddenMaterial()) : dispatch(showMaterial()));

  const findExerciceIndex = () => allExercice[nowExercice.dificulty]
    .findIndex((exercice: any) => exercice === nowExercice);

  const findDificultyIndex = () => Object.keys(allExercice).findIndex((dificulty: any) =>
    dificulty === nowExercice.dificulty) + 1;

  const nextExercice = () => {
    if (findExerciceIndex() + 1 === allExercice[nowExercice.dificulty].length) {
      const nextDificulty = allExercice[Object.keys(allExercice)[findDificultyIndex()]];
      dispatch(changeNowExercice(nextDificulty[0]));
      return;
    }
    dispatch(changeNowExercice(allExercice[nowExercice.dificulty][findExerciceIndex() + 1]));
  };

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
        <section className="btn_content">
          <MaterialBtn onClick={handleMaterials}>
            <span>Materiais</span>
          </MaterialBtn>
          <NextBtn
            onClick={nextExercice}
          >
            <span>Próxima aula</span>
            <AiOutlineArrowRight className="change_exercice" />
          </NextBtn>
        </section>

      </BtnAreas>
    </ExerciceInfContainer>
  );
}

export default ExerciceInf;
