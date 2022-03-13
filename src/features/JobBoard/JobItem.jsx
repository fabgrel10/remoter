import PropTypes from 'prop-types';
import moment from 'moment';
import { NavLink } from 'react-router-dom';

const JobItem = ({
  id, title, companyName, publicationDate,
}) => {
  const formattedDate = moment(publicationDate).format('MMMM Do YYYY');

  return (
    <div key={id} className="job-item">
      <h4 className="job-item__title">{title}</h4>
      <h5 className="job-item__company">{companyName}</h5>
      <div>
        <h6 className="job-item__publication-date">{formattedDate}</h6>
        <NavLink to={`/jobs/${id}`}>Details</NavLink>
      </div>
    </div>
  );
};

JobItem.defaultProps = {
  id: '',
};

JobItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  publicationDate: PropTypes.string.isRequired,
};

export default JobItem;
