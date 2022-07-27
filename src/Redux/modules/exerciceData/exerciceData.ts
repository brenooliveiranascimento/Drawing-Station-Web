import { accessLocalStore } from '../../../globalFuncions/localStoreControl';
import { exerciceBaseData, modules } from '../../../MOCKS/__ExerciceData';
import { DRAWING_STATION_LOCAL_DATA } from '../../../__GlobalTypes/globalTypes';
import {
  FETCH_EXERCICE_FAIL, FETCH_EXERCICE_INIT, FETCH_EXERCICE_SUCCESS, SET_NOW_EXERCICE,
} from './exerciceDataTypes';

const STATE_INITIAL_VALUE = {
  exercices: exerciceBaseData,
  nowExerciceData: {},
  modules,
  loading: false,
  error: '',
};

const ACTION_INITIAL_STATE = {
  type: '',
  payLoad: {},
  error: '',
  modules: {},
};

console.log(accessLocalStore(DRAWING_STATION_LOCAL_DATA));

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
    default:
      return state;
  }
}

export default exerciceData;
