import React from 'react';
import ExerciceInf from '../../Components/ExerciceComponents/ExerciceInf/ExerciceInf';
import ExerciceSide from '../../Components/ExerciceComponents/ExerciceSide/ExerciceSide';
import VideoPlayer from '../../Components/ExerciceComponents/Video/VideoPlayer';
import { ExerciceContainer, VideoArea } from './ExerciceComponents';

function ExerciceArea() {
  return (
    <ExerciceContainer>
      <VideoArea>
        <VideoPlayer />
        <ExerciceInf />
      </VideoArea>
      <ExerciceSide />
    </ExerciceContainer>
  );
}

export default ExerciceArea;
