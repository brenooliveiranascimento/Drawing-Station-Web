import { FETCH_EXERCICE_FAIL, FETCH_EXERCICE_INIT, FETCH_EXERCICE_SUCCESS } from './exerciceDataTypes';

const STATE_INITIAL_VALUE = {
  exercices: {},
  loading: false,
  error: '',
};

const ACTION_INITIAL_STATE = {
  type: '',
  payMount: {},
  error: '',
};

function exerciceData(state = STATE_INITIAL_VALUE, action = ACTION_INITIAL_STATE) {
  switch (action.type) {
    case FETCH_EXERCICE_INIT:
      return { ...state, loading: true };
    case FETCH_EXERCICE_SUCCESS:
      return { ...state, loading: false, exercices: action.payMount };
    case FETCH_EXERCICE_FAIL:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
}

export default exerciceData;
