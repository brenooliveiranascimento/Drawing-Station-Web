/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';
import {
  ContentContainer,
  Divise, Exercicelist, ExerciceListItem, ModulesNameContent, SideContent, SideSearch,
} from './ExeerciceSide';
import { changeNowExercice } from '../../../Redux/actions/exercicesActions/genericActions';

function ExerciceSide() {
  const exercicesData = useSelector(({ exerciceData }: any) => exerciceData.exercices);
  const userProgressData = useSelector(({ exerciceProgress }: any) => exerciceProgress);
  const nowExerciceState = useSelector(({ exerciceData }: any) => exerciceData.nowExerciceData);

  const dispatch = useDispatch();
  console.log(exercicesData);
  const dificultys = Object.keys(exercicesData);
  const [nowModule, setNowModule] = useState('');
  const [nowExercice, setNowExercice] = useState('');

  const updateExercice = (exercice: any) => {
    setNowExercice(exercice.name);
    dispatch(changeNowExercice(exercice));
  };

  return (
    <SideContent>
      <SideSearch />
      <Divise />
      {
        dificultys.map((dificulty, index) => (
          <ContentContainer key={dificulty}>
            <ModulesNameContent
              onClick={() => setNowModule(dificulty)}
            >
              <span>
                <strong>
                  Módulo
                  {' '}
                  {index + 1}
                  :
                  {' '}
                </strong>
                {dificulty}
              </span>
            </ModulesNameContent>
            {
              nowModule === dificulty && (
                <Exercicelist>
                  {
                    exercicesData[dificulty].map((exercice: any, exerciceIndex:any) => {
                      console.log(userProgressData[dificulty][exercice.name]);
                      return (
                        <ExerciceListItem
                          color={nowExerciceState.name === exercice.name ? '#08111C' : '#212630'}
                          key={exercice.id}
                        >
                          <button
                            onClick={() => updateExercice(exercice)}
                            type="button"
                          >
                            <span>
                              {
                                userProgressData[dificulty][exercice.name] ? (
                                  <AiFillCheckCircle className="check_icon_check" />
                                ) : (
                                  <AiFillCloseCircle className="check_icon_no_check" />
                                )
                              }
                              {exerciceIndex + 1}
                              #
                              {' '}
                              {exercice.name}
                              {' '}
                              {exercice.description}
                            </span>
                          </button>
                        </ExerciceListItem>
                      );
                    })
                  }
                </Exercicelist>
              )
            }
          </ContentContainer>
        ))
      }
    </SideContent>
  );
}

export default ExerciceSide;
