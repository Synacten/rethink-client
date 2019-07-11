import React, { useState } from 'react';

const Search = () => {
  const submitSearch = (e) => {
    e.preventDefault();
    console.log('form submitted');
  };
  return (
    <div className="searchWrap">
      <form onSubmit={submitSearch}>
        <label htmlFor="search">
          <input type="search" name="searchparams" placeholder="search" />
        </label>
        <label htmlFor="submit">
          <input type="submit" />
        </label>
      </form>
    </div>
  );
};

export default Search;
