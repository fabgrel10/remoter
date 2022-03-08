import React from 'react';
import PublicRoutes from './routes/PublicRoutes';
import './style/main.css';

function App() {
  return (
    <div className="container">
      <header className="header">
       <h1>Remoter</h1>
      </header>
      <section className="search">
        <h2>Search</h2>
      </section>
      <section className="jobs-list">
        <PublicRoutes />
      </section>
    </div>
  );
}

export default App;
