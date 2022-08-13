/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AiFillCheckCircle, AiFillCiCircle, AiFillCloseCircle } from 'react-icons/ai';
import {
  ContentContainer,
  Divise, Exercicelist, ExerciceListItem, ModulesNameContent, SideContent, SideSearch,
} from './ExeerciceSide';
import { changeNowExercice, handleSideBar, updateExerciceDificulty } from '../../../Redux/actions/exercicesActions/genericActions';
import { HandleBtn } from '../ExerciceHeader/components';

function ExerciceSide() {
  const exercicesData = useSelector(({ exerciceData }: any) => exerciceData.exercices);
  const userProgressData = useSelector(({ exerciceProgress }: any) => exerciceProgress);
  const nowExerciceState = useSelector(({ exerciceData }: any) => exerciceData.nowExerciceData);
  const globalDificlty = useSelector(({ exerciceData }: any) => exerciceData.nowExecideDificulty);
  const dispatch = useDispatch();
  const dificultys = Object.keys(exercicesData);
  const [nowModule, setNowModule] = useState('basics');

  const updateExercice = (exercice: any) => {
    dispatch(changeNowExercice(exercice));
    dispatch(updateExerciceDificulty(exercice.dificulty));
  };

  const showDificulty = (dificulty: string) => dispatch(updateExerciceDificulty(dificulty));

  return (
    <SideContent>
      <HandleBtn
        onClick={() => dispatch(handleSideBar(false))}
        style={{ alignSelf: 'flex-start' }}
      >
        Fechar
      </HandleBtn>
      {/* <SideSearch
        placeholder="Buscar Exercicio"
      /> */}
      <Divise />
      {
        dificultys.map((dificulty, index) => (
          <ContentContainer key={dificulty}>
            <ModulesNameContent
              onClick={() => (globalDificlty === dificulty ? showDificulty('') : showDificulty(dificulty))}
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
              globalDificlty === dificulty && (
                <Exercicelist>
                  {
                    exercicesData[dificulty].map((exercice: any, exerciceIndex:any) => {
                      return (
                        <ExerciceListItem
                          color={nowExerciceState.name === exercice.name ? '#000' : '#212630'}
                          key={exercice.id}
                        >
                          <button
                            onClick={() => updateExercice(exercice)}
                            type="button"
                          >
                            <span>
                              {
                                exercice.finished ? (
                                  <span>
                                    {
                                      userProgressData[dificulty][exercice.name] ? (
                                        <AiFillCheckCircle className="check_icon_check" />
                                      ) : (
                                        <AiFillCloseCircle className="check_icon_no_check" />
                                      )
                                    }
                                  </span>
                                ) : (
                                  <AiFillCiCircle className="incomplete_exercice" />
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
