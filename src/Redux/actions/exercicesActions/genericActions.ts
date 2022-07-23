import { FETCH_EXERCICE_FAIL, FETCH_EXERCICE_INIT, FETCH_EXERCICE_SUCCESS } from '../../modules/exerciceData/exerciceDataTypes';

export const updateExerciceStore = (exerciceData: any): any => ({
  peyLoad: FETCH_EXERCICE_SUCCESS,
  payLoad: exerciceData,
});

export const updateExerciceStoreInit = () => ({
  type: FETCH_EXERCICE_INIT,
});

export const updateExerciceStoreFail = (errorMessage: string) => ({
  type: FETCH_EXERCICE_FAIL,
  error: errorMessage,
});
