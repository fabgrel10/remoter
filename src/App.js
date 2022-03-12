import React from 'react';
import { useSelector } from 'react-redux';
import logo from './assets/images/job-offers-bro.png';
// import SearchJobs from './features/SearchJobs/SearchJobs';
import JobBoard from './features/JobBoard/JobBoard';
import './style/main.css';

function App() {
  const jobs = useSelector(state => state.jobBoard.jobs);

  return (
    <div className="container">
      <header className="header__section">
        <div className="header__content">
          <img src={logo} className="header__logo" alt="app logo" />
          <div>
            <h2 className="header__text">Remoter</h2>
            <p className="header__jobs-total">Jobs Total: {jobs.length}</p>
          </div>
        </div>
      </header>
      {/* <section className="search__section">
        <SearchJobs />
      </section> */}
      <section className="job-board__section">
        <JobBoard />
      </section>
    </div>
  );
}

export default App;
