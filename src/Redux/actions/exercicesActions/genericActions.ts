import {
  FETCH_COMMENTS,
  FETCH_EXERCICE_FAIL,
  FETCH_EXERCICE_INIT,
  FETCH_EXERCICE_SUCCESS,
  HANDLE_SIDE_EXERCICE,
  HIDDEN_MATERIALS,
  NEXT_EXERCICE,
  PREV_EXERCICE,
  REMOVE_COMMENT,
  SET_COMMENTS, SET_NOW_EXERCICE, SHOWN_MATERIALS,
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

export const nextExercice = () => ({
  type: NEXT_EXERCICE,
});

export const prevExercice = () => ({
  type: PREV_EXERCICE,
});

export const showMaterial = () => ({
  type: SHOWN_MATERIALS,
});

export const hiddenMaterial = () => ({
  type: HIDDEN_MATERIALS,
});

export const setComments = (comments: any) => ({
  type: SET_COMMENTS,
  comments,
});

export const fetchCommentsData = (comments: any) => ({
  type: FETCH_COMMENTS,
  comments,
});

export const removeComment = (comments: any) => ({
  type: REMOVE_COMMENT,
  comments,
});

export const handleSideBar = (condition: boolean) => ({
  type: HANDLE_SIDE_EXERCICE,
  payLoad: condition,
});
