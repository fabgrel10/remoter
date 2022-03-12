import { combineReducers } from 'redux';
import jobBoardReducer from '../features/JobBoard/jobBoardReducer';

const rootReducer = combineReducers({
  jobBoard: jobBoardReducer,
});

export default rootReducer;
