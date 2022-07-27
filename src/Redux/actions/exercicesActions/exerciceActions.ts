import { Dispatch } from 'react';
import { errorMessageConsole } from '../../../globalFuncions/errorMessage';
import { setDataInLocalStore } from '../../../globalFuncions/localStoreControl';
import { getProductioModulesData, getProductionData } from '../../../Services/versionControlFirebase/versionControlFirebase';
import { DRAWING_STATION_LOCAL_DATA, DRAWING_STATION_LOCAL_DATA_MODULES } from '../../../__GlobalTypes/globalTypes';
import { updateExerciceStore, updateExerciceStoreFail, updateExerciceStoreInit } from './genericActions';

export const updateExerciceState = async (dispatch: Dispatch<any>) => {
  const fetchExerciceData = await getProductionData();
  const fetchModulesData = await getProductioModulesData();
  setDataInLocalStore(DRAWING_STATION_LOCAL_DATA_MODULES, fetchModulesData);
  setDataInLocalStore(DRAWING_STATION_LOCAL_DATA, fetchExerciceData);
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
