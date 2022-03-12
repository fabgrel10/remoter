import fetchJobs from './apiHelper';

export const SET_JOBBOARD_ACTION = 'SET_JOBBOARD_ACTION';

export const setJobBoardAction = jobs => ({
  type: SET_JOBBOARD_ACTION,
  payload: jobs,
});

export const fetchJobBoard = () => async dispatch => {
  const jobs = await fetchJobs();
  dispatch(setJobBoardAction(jobs));
};
