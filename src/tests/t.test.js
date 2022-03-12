import { SET_JOBBOARD_ACTION } from '../features/JobBoard/jobBoardActions';
import jobBoardReducer from '../features/JobBoard/jobBoardReducer';

describe('jobBoar reducer tests: ', () => {
  test('Test JobBoard reducer initial state', () => {
    expect(jobBoardReducer(undefined, {})).toEqual({
      error: {},
      isLoading: false,
      jobs: [],
    });
  });

  test('Data is fetched', () => {
    const action = {
      type: SET_JOBBOARD_ACTION,
      payload: [{

      }],
    };
    expect(jobBoardReducer({ data: {} }, action)).toEqual({
      data: {},
      isLoading: false,
      jobs: [
        {}
      ]
    });
  });
});
