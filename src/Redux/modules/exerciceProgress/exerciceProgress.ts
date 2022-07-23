import { FETCH_PROGRESS, PROGRESS_DECREMENT, PROGRESS_INCREMENT } from './exerciceProgressTypes';

const STATE_INITIAL_VALUE = {
  basics: {
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

const ACTION_INITIAL_STATE: any = {
  type: '',
  dificulty: '',
  exercice: '',
  payLoad: {},
};

function exerciceProgress(state = STATE_INITIAL_VALUE, action = ACTION_INITIAL_STATE) {
  console.log(action.payLoad);
  switch (action.type) {
    case FETCH_PROGRESS:
      return {
        ...state,
        all: action.payLoad.all,
        basics: action.payLoad.basics,
        intermediary: action.payLoad.intermediary,
        advanced: action.payLoad.advanced,
      };
    case PROGRESS_INCREMENT:
      return {
        ...state,
        [action.dificulty]: {
          [action.exercice]: true,
        },
        all: state.all + 1,
      };
    case PROGRESS_DECREMENT:
      return {
        ...state,
        [action.dificulty]: {
          [action.exercice]: false,
        },
        all: state.all - 1,
      };
    default:
      return state;
  }
}

export default exerciceProgress;
