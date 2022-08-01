import React from 'react';
import ExerciceInf from '../../Components/ExerciceComponents/ExerciceInf/ExerciceInf';
import ExerciceSide from '../../Components/ExerciceComponents/ExerciceSide/ExerciceSide';
import Materiais from '../../Components/ExerciceComponents/Materiais/Materiais';
import VideoPlayer from '../../Components/ExerciceComponents/Video/VideoPlayer';
import { ExerciceContainer, Main, VideoArea } from './ExerciceComponents';

function ExerciceArea() {
  return (
    <Main>
      <ExerciceContainer>
        <VideoArea>
          <VideoPlayer />
          <ExerciceInf />
          <Materiais />
        </VideoArea>
        <ExerciceSide />
      </ExerciceContainer>
    </Main>
  );
}

export default ExerciceArea;
