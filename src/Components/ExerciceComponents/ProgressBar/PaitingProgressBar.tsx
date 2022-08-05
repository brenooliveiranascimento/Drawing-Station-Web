import React from 'react';
import { useSelector } from 'react-redux';
import { BackBar, Colorbar, MainBar } from './components';

function PaitingProgressBar() {
  const exercicesData = useSelector(({ exerciceData }: any) => exerciceData.exercices);
  const userProgress = useSelector(({ exerciceProgress }: any) => exerciceProgress);
  const calculateProgress = () => {
  };

  const getAllFinishedExercice = () => {
    const exercicesFinished = Object.keys(exercicesData).map((dificulty: any) => {
      return exercicesData[dificulty].reduce((acc: number, exercice: any) => {
        return exercice.finished ? acc + 1 : acc;
      }, 0);
    });
    return exercicesFinished;
  };

  const sumAllExercice = () => {
    return getAllFinishedExercice().reduce((acc, number) => acc + number, 0);
  };

  const convertExerciceNumberToPercentage = () => (userProgress.all / sumAllExercice()) * 200;

  return (
    <MainBar>
      <Colorbar style={{ width: Math.round(convertExerciceNumberToPercentage()) }} />
      <BackBar />
      <h2>
        {`${Math.round(convertExerciceNumberToPercentage() / 2)}%`}
      </h2>
    </MainBar>
  );
}

export default PaitingProgressBar;
