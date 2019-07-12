import React, { useState } from 'react';

const Search = () => {
  const [searchParams, setParams] = useState('');
  const handleParams = (e) => {
    setParams(e.target.value);
    console.log(searchParams);
  };
  return (
    <div className="searchWrap">
      <label htmlFor="search">
        <input type="text" name="searchparams" placeholder="search" value={searchParams} onChange={handleParams} />
        <i className="fas fa-search" />
      </label>
    </div>
  );
};

export default Search;
