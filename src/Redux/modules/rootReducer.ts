import { combineReducers } from 'redux';
import userData from './userData/userData';
import exerciceData from './exerciceData/exerciceData';
import exerciceProgress from './exerciceProgress/exerciceProgress';

const rootReducer = combineReducers({
  userData,
  exerciceProgress,
  exerciceData,
});

export default rootReducer;
