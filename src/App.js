import React from 'react';
import logo from './assets/images/job-offers-bro.png';
import PublicRoutes from './routes/PublicRoutes';
import './style/main.css';

function App() {
  return (
    <div className="container">
      <header className="header__section">
        <div className="header__content">
          <img src={logo} className="header__logo" alt="app logo" />
          <div>
            <h2 className="header__text">Remoter</h2>
          </div>
        </div>
      </header>
      <PublicRoutes />
    </div>
  );
}

export default App;
