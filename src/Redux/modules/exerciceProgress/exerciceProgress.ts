const STATE_INITIAL_VALUE = {
  basic: {
    degrade: false,
    ball: false,
    petal: false,
    rose: false,
  },
  intermediary: {
    shortHair: false,
    blueRose: false,
  },
  advanced: {
    TerryCrews: false,
    HulkBuster: false,
  },
  all: 0,
};

const ACTION_INITIAL_STATE = {
  type: '',
  dificulty: '',
  exercice: '',
};

function exerciceProgress(state = STATE_INITIAL_VALUE, action = ACTION_INITIAL_STATE) {
  switch (action.type) {
    case 'DECRESS_PROGRESS':
      return state;
    default:
      return state;
  }
}

export default exerciceProgress;
