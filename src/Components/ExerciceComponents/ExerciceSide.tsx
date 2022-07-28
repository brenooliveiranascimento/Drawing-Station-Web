/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  ContentContainer,
  Divise, Exercicelist, ExerciceListItem, ModulesNameContent, SideContent, SideSearch,
} from './ExeerciceSide';

function ExerciceSide() {
  const exercicesData = useSelector(({ exerciceData }: any) => exerciceData.exercices);
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
                  {index}
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
                            {exerciceIndex}
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
