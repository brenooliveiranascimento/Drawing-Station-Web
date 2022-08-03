import React from 'react';
import { useSelector } from 'react-redux';
import {
  MaterialArea, MaterialsContainer, MutipleColorArea, ColorsArea,
} from './components';

function Materiais() {
  const nowExerciceColors = useSelector(({ exerciceData }: any) => exerciceData.nowExerciceData);
  return (
    <MaterialsContainer>
      <h2>
        Materiais Necessarios
      </h2>
      {
        nowExerciceColors.multiExample ? (
          <MutipleColorArea>
            {
              Object.keys(nowExerciceColors.colors).map((nowColor) => (
                <ColorsArea>
                  <h2>{nowColor}</h2>
                  {
                    nowExerciceColors.colors[nowColor].map(({ cor }: any) => (
                      <span>{cor}</span>
                    ))
                  }
                </ColorsArea>
              ))
            }
          </MutipleColorArea>
        ) : (
          <MaterialArea>
            {
          nowExerciceColors.colors.map(({ cor }: any) => (
            <span key={cor}>
              {cor}
            </span>
          ))
        }
          </MaterialArea>
        )
      }
    </MaterialsContainer>
  );
}

export default Materiais;
