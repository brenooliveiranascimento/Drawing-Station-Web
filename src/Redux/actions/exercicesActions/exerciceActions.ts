import { Dispatch } from 'react';
import { errorMessageConsole } from '../../../globalFuncions/errorMessage';
import { getProductioModulesData, getProductionData } from '../../../Services/versionControlFirebase/versionControlFirebase';
import { updateExerciceStore, updateExerciceStoreFail, updateExerciceStoreInit } from './genericActions';

export const updateExerciceState = async (dispatch: Dispatch<any>) => {
  const fetchExerciceData = await getProductionData();
  const fetchModulesData = await getProductioModulesData();
  dispatch(updateExerciceStore(fetchExerciceData, fetchModulesData));
};

export const failInUpdateStore = (errorMessage: string, dispatch: any) => {
  dispatch(updateExerciceStoreFail(errorMessage));
  errorMessageConsole(errorMessage);
};

export const updateExerciceData = (): any => {
  return async (dispatch: Dispatch<any>) => {
    dispatch(updateExerciceStoreInit());
    try { updateExerciceState(dispatch); } catch (error: any) {
      failInUpdateStore(error.message, dispatch);
    }
  };
};
