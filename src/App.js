import React from 'react';
import PublicRoutes from './routes/PublicRoutes';
import logo from './assets/images/job-offers-bro.png';
import './style/main.css';
import SearchJobs from './features/SearchJobs/SearchJobs';

function App() {
  return (
    <div className="container">
      <header className="header__section">
        <div className="header__content">
          <img src={logo} className="header__logo" alt="app logo" />
          <h2 className="header__text">Remoter</h2>
        </div>
      </header>
      <section className="search-jobs__section">
        <SearchJobs />
      </section>
      <section className="jobs-list">
        <PublicRoutes />
      </section>
    </div>
  );
}

export default App;
