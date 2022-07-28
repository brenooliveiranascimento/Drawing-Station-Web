/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';
import {
  ContentContainer,
  Divise, Exercicelist, ExerciceListItem, ModulesNameContent, SideContent, SideSearch,
} from './ExeerciceSide';

function ExerciceSide() {
  const exercicesData = useSelector(({ exerciceData }: any) => exerciceData.exercices);
  const userProgressData = useSelector(({ exerciceProgress }: any) => exerciceProgress);
  const dificultys = Object.keys(exercicesData);
  const [nowModule, setNowModule] = useState('');

  return (
    <SideContent>
      <SideSearch />
      <Divise />
      {
        dificultys.map((dificulty, index) => (
          <ContentContainer>
            <ModulesNameContent
              onClick={() => setNowModule(dificulty)}
              key={dificulty}
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
                    exercicesData[dificulty].map((exercice: any, exerciceIndex:any) => (
                      <ExerciceListItem key={exercice.id}>
                        <button
                          type="button"
                        >
                          <span>
                            {
                              userProgressData[dificulty].exercice ? (
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
                    ))
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
