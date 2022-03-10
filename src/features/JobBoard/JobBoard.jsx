import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchJobBoard } from './jobBoardActions';

const JobBoard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJobBoard());
  }, [dispatch]);

  return (
    <div>
      <h1>Job Board</h1>
    </div>
  );
};

export default JobBoard;
