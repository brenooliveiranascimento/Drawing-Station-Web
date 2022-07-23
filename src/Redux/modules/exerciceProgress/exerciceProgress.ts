import { FETCH_PROGRESS } from './exerciceProgressTypes';

const STATE_INITIAL_VALUE = {
  basic: {
    degrade: false,
    ball: false,
    petal: false,
    rose: false,
    concldes: 0,
  },
  intermediary: {
    shortHair: false,
    blueRose: false,
    concldes: 0,
  },
  advanced: {
    TerryCrews: false,
    HulkBuster: false,
    concldes: 0,
  },
  all: 0,
};

const ACTION_INITIAL_STATE = {
  type: '',
  dificulty: '',
  exercice: '',
  payLoad: {},
};

function exerciceProgress(state = STATE_INITIAL_VALUE, action = ACTION_INITIAL_STATE) {
  switch (action.type) {
    case FETCH_PROGRESS:
      return { ...state, state: action.payLoad };
    default:
      return state;
  }
}

export default exerciceProgress;
