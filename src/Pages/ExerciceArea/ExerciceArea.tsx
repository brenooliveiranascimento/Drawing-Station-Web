import React from 'react';
import { useSelector } from 'react-redux';
import ComentsArea from '../../Components/ExerciceComponents/Coments/ComentsAre';
import ExerciceInf from '../../Components/ExerciceComponents/ExerciceInf/ExerciceInf';
import ExerciceSide from '../../Components/ExerciceComponents/ExerciceSide/ExerciceSide';
import Materiais from '../../Components/ExerciceComponents/Materiais/Materiais';
import VideoPlayer from '../../Components/ExerciceComponents/Video/VideoPlayer';
import { ExerciceContainer, Main, VideoArea } from './ExerciceComponents';

function ExerciceArea() {
  const nowExercice = useSelector(({ exerciceData }: any) => exerciceData);
  console.log(nowExercice);
  return (
    <Main>
      <ExerciceContainer>
        <VideoArea>
          <VideoPlayer />
          <ExerciceInf />
          {
            nowExercice.showMaterials && nowExercice.nowExerciceData.finished && <Materiais />
          }
          <ComentsArea />
        </VideoArea>
        <ExerciceSide />
      </ExerciceContainer>
    </Main>
  );
}

export default ExerciceArea;
