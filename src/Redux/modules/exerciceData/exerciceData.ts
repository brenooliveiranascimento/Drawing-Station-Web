import { accessLocalStore } from '../../../globalFuncions/localStoreControl';
import { exerciceBaseData } from '../../../MOCKS/__ExerciceData';
import { DRAWING_STATION_LOCAL_DATA_MODULES } from '../../../__GlobalTypes/globalTypes';
import {
  FETCH_EXERCICE_FAIL,
  FETCH_EXERCICE_INIT,
  FETCH_EXERCICE_SUCCESS,
  HIDDEN_MATERIALS,
  SET_NOW_EXERCICE,
  SHOWN_MATERIALS,
} from './exerciceDataTypes';

const STATE_INITIAL_VALUE = {
  exercices: exerciceBaseData,
  nowExerciceData: {
    ...exerciceBaseData.basics[0],
  },
  modules: accessLocalStore(DRAWING_STATION_LOCAL_DATA_MODULES),
  loading: false,
  error: '',
  showMaterials: false,
};

const ACTION_INITIAL_STATE = {
  type: '',
  payLoad: {},
  error: '',
  modules: {},
};

function exerciceData(state = STATE_INITIAL_VALUE, action = ACTION_INITIAL_STATE) {
  switch (action.type) {
    case FETCH_EXERCICE_INIT:
      return { ...state, loading: true };
    case FETCH_EXERCICE_SUCCESS:
      return {
        ...state, loading: false, exercices: action.payLoad, modules: action.modules,
      };
    case FETCH_EXERCICE_FAIL:
      return { ...state, loading: false, error: action.error };
    case SET_NOW_EXERCICE:
      return { ...state, nowExerciceData: action.payLoad };
    case SHOWN_MATERIALS:
      return { ...state, showMaterials: true };
    case HIDDEN_MATERIALS:
      return { ...state, showMaterials: false };
    default:
      return state;
  }
}

export default exerciceData;
