import {
  FETCH_EXERCICE_FAIL, FETCH_EXERCICE_INIT, FETCH_EXERCICE_SUCCESS, SET_NOW_EXERCICE,
} from '../../modules/exerciceData/exerciceDataTypes';

export const updateExerciceStore = (exerciceData: any, modulesData: any): any => ({
  type: FETCH_EXERCICE_SUCCESS,
  payLoad: exerciceData,
  modules: modulesData,
});

export const updateExerciceStoreInit = () => ({
  type: FETCH_EXERCICE_INIT,
});

export const updateExerciceStoreFail = (errorMessage: string) => ({
  type: FETCH_EXERCICE_FAIL,
  error: errorMessage,
});

export const changeNowExercice = (nowExercice: any) => ({
  type: SET_NOW_EXERCICE,
  payLoad: nowExercice,
});
