import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Job = () => {
  const selectedJobId = useParams().id;
  const jobs = useSelector(state => state.jobBoard.jobs);
  const job = jobs.filter(job => job.id.toString() === selectedJobId);

  console.log(job);

  return (
    <div>
      <Link to="/">Home</Link>
      <h2>{job[0].title}</h2>
      <h3>{job[0].companyName}</h3>
      <h3>{job[0].salary}</h3>
      <div dangerouslySetInnerHTML={{__html: job[0].description}} />
      <p>{job[0].url}</p>

    </div>
  );
};

export default Job;
