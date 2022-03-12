import { SET_JOBBOARD_ACTION } from './jobBoardActions';

const initialState = {
  isLoading: false,
  error: {},
  jobs: [],
};

const jobBoardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JOBBOARD_ACTION:
      return {
        ...state,
        isLoading: false,
        jobs: action.payload,
      };
    default:
      return state;
  }
};

export default jobBoardReducer;
