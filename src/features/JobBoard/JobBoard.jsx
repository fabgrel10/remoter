import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobBoard } from './jobBoardActions';
import JobItem from './JobItem';

const JobBoard = () => {
  const dispatch = useDispatch();
  const jobs = useSelector(state => state.jobs);

  useEffect(() => {
    dispatch(fetchJobBoard());
  }, [dispatch]);

  return (
    <>
      {jobs.map(job => (
        <JobItem
          key={job.id}
          title={job.title}
          companyName={job.companyName}
          publicationDate={job.publicationDate}
        />
      ))}
    </>
  );
};

export default JobBoard;
