import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import jobBoardReducer from '../features/JobBoard/jobBoardReducer';

const store = createStore(jobBoardReducer, applyMiddleware(logger, thunk));

export default store;
