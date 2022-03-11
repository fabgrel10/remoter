import React from 'react';

const SearchJobs = () => (
  <form className="search-jobs__form">
    <div className="search-jobs__input">
      <input type="text" placeholder="Search Remote Jobs ..." />
      <div className="line" />
    </div>
    <select className="search-jobs__select">
      <option>All Categories</option>
      <option>Web Development</option>
      <option>Design</option>
      <option>Product</option>
      <option>Dev Ops</option>
      <option>QA</option>
    </select>
  </form>
);

export default SearchJobs;
