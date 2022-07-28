import React from 'react';
import ExerciceSide from '../../Components/ExerciceComponents/ExerciceSide/ExerciceSide';
import VideoPlayer from '../../Components/ExerciceComponents/Video/VideoPlayer';
import { ExerciceContainer } from './ExerciceComponents';

function ExerciceArea() {
  return (
    <ExerciceContainer>
      <VideoPlayer />
      <ExerciceSide />
    </ExerciceContainer>
  );
}

export default ExerciceArea;
