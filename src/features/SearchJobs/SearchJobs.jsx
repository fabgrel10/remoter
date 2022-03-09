import React from 'react';

const SearchJobs = () => (
  <form>
    <div className="search-jobs__content">
      <input
        type="text"
        name="search"
        className="search-jobs__input"
        id="search"
        placeholder="Search Remote Jobs"
      />
      <button type="submit" className="btn search-jobs__button">
        Submit
      </button>
    </div>
  </form>
);

export default SearchJobs;
