import React, { useState } from 'react';

const Search = () => {
  const [searchParams, setParams] = useState('');
  const [searchResult, setResults] = useState([]);
  const handleParams = async (e) => {
    setParams(e.target.value);
    if (e.target.value !== '') {
      const searchData = await fetch('http://localhost:2700/searcharticle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          searchData: e.target.value.toLowerCase(),
        }),
      });
      if (searchData.status === 200) {
        const { rows } = await searchData.json();
        if (rows.length > 0) {
          setResults(rows);
        } else {
          setResults([]);
        }
      }
    }
    if (e.target.value.length === 0) {
      setResults([]);
    }
  };

  const clearParams = () => {
    setResults([]);
  };
  return (
    <div className="searchWrap">
      <label htmlFor="search">
        <input type="text" name="searchparams" placeholder="search" value={searchParams} onChange={handleParams} onBlur={clearParams} />
        <i className="fas fa-search" />
      </label>
      <div className="searchResults">
        {Object.keys(searchResult).length ? (
          searchResult.map(item => (
            <div className="tag" key={item.id}>
              <div className="imgBlock">
                <img src="https://kor.ill.in.ua/m/190x120/2372562.jpg" alt="" />
              </div>
              <div className="content">
                <p>{item.title}</p>
                <span>{item.description}</span>
              </div>
            </div>
          ))
        ) : null}

      </div>
    </div>
  );
};

export default Search;
