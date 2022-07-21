import {
  actionTypes, SIGNIN_FAIL, SIGNIN_INIT, SIGNIN_SUCCESS,
} from './authReducerTypes';

const STATE_INITIAL_VALUE = {
  email: '',
  uid: '',
  loading: false,
  error: '',
};

const ACTION_INITIAL_STATE: actionTypes = {
  type: '',
  payLoad: {
    email: '',
    uid: '',
  },
  error: '',
};

function authReducer(state = STATE_INITIAL_VALUE, actions = ACTION_INITIAL_STATE) {
  switch (actions.type) {
    case SIGNIN_INIT:
      return {
        ...state, loading: true,
      };
    case SIGNIN_SUCCESS:
      return {
        ...state, email: actions.payLoad.email, uid: actions.payLoad.uid, loading: false,
      };
    case SIGNIN_FAIL:
      return {
        ...state, error: actions.error, loading: false,
      };
    default:
      return state;
  }
}

export default authReducer;
