import { Dispatch } from 'react';
import { updateUserProgressInDatabase } from '../../../Services/progressFirebaseControl/progressProgressControl';
import { PROGRESS_DECREMENT, PROGRESS_INCREMENT } from '../../modules/exerciceProgress/exerciceProgressTypes';

const incrementStoreProgress = (dificulty: any, exercice: string) => ({
  type: PROGRESS_INCREMENT,
  exercice,
  dificulty,
});

const decrementStoreProgress = (dificulty: any, exercice: string) => ({
  type: PROGRESS_DECREMENT,
  exercice,
  dificulty,
});

export const updateuserProgress = (exercice: string, dificulty: string): any => {
  return async (dispatch: Dispatch<any>, getState: any) => {
    await updateUserProgressInDatabase(getState().userData.uid, exercice, dificulty);
    if (getState().exerciceProgress[dificulty][exercice]) {
      dispatch(decrementStoreProgress(dificulty, exercice));
      return;
    }
    dispatch(incrementStoreProgress(dificulty, exercice));
  };
};
