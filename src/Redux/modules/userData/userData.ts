import {
  actionTypes, LOGOUT, SIGNIN_FAIL, SIGNIN_INIT, SIGNIN_SUCCESS,
} from './userDataTypes';

const STATE_INITIAL_VALUE = {
  email: '',
  uid: '',
  name: '',
  loading: false,
  loged: false,
  error: '',
};

const ACTION_INITIAL_STATE: actionTypes = {
  type: '',
  payLoad: {
    email: '',
    uid: '',
    name: '',
  },
  error: '',
};

function userData(state = STATE_INITIAL_VALUE, actions = ACTION_INITIAL_STATE) {
  switch (actions.type) {
    case SIGNIN_INIT:
      return {
        ...state, loading: true,
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        email: actions.payLoad.email,
        uid: actions.payLoad.uid,
        loading: false,
        name: actions.payLoad.name,
        loged: true,
      };
    case SIGNIN_FAIL:
      return {
        ...state, error: actions.error, loading: false,
      };
    case LOGOUT:
      return {
        ...state,
        email: '',
        uid: '',
        loged: false,
        name: '',
      };
    default:
      return state;
  }
}

export default userData;
