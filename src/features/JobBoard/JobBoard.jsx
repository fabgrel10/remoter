import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobBoard } from './jobBoardActions';
import JobItem from './JobItem';

const JobBoard = () => {
  const dispatch = useDispatch();
  const jobs = useSelector(state => state.jobBoard.jobs);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if (jobs.length === 0) {
      dispatch(fetchJobBoard());
    }
  }, []);

  const shownJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <section className="job-board__section">
      <p className="jobboard__jobs-total">Total Jobs: {shownJobs.length}</p>
      <div>
        <input
          className="input-search"
          placeholder="Search"
          value={searchValue}
          onChange={e => {
            setSearchValue(e.target.value);
          }}
        />
      </div>
      {shownJobs.map(job => (
        <JobItem
          key={job.id}
          id={job.id}
          title={job.title}
          companyName={job.companyName}
          publicationDate={job.publicationDate}
        />
      ))}
    </section>
  );
};

export default JobBoard;
