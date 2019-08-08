import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  dataLoad, getOneArticle, addCrumbs, showCrumbs,
} from '../../actions/mainActions';

const Search = ({
  isLoading,
  dataLoad: _dataLoad,
  getOneArticle: _getOneArticle,
  addCrumbs: _addCrumbs,
  showCrumbs,
}) => {
  const [searchParams, setParams] = useState('');
  const [searchResult, setResults] = useState([]);
  const handleParams = async (e) => {
    e.persist();
    setParams(e.target.value);
    if (e.target.value !== '') {
      _dataLoad();
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
        _dataLoad();
        const { rows } = await searchData.json();
        if (rows.length > 0) {
          setResults(rows);
        } else {
          setResults([]);
        }
      }
    }
    if (e.target.value.length === 0) {
      e.preventDefault();
      setResults([]);
    }
  };

  const clearParams = () => {
    setResults([]);
  };

  const getCrumbs = (link, id, category) => {
    Promise.all([
      _getOneArticle({ link }),
      _addCrumbs(id, category),
      showCrumbs(true),
      setResults([]),
    ]);
  };

  return (
    <div className="searchWrap">
      <label htmlFor="search">
        <input
          type="text"
          name="searchparams"
          placeholder="search"
          value={searchParams}
          onChange={handleParams}
          onClick={handleParams}
          onMouseOver={clearParams}
          onFocus={handleParams}
        />
        <i className="fas fa-search" />
      </label>
      {isLoading ? <div className="spinner" /> : null}
      <div className="searchResults">
        {Object.keys(searchResult).length ? (
          searchResult.map(item => (
            <Link className="tag" key={item.id} to={`/${item.link}`} onClick={() => getCrumbs(item.link, item.id, item.category)} role="presentation">
              <div className="imgBlock">
                <img src="https://kor.ill.in.ua/m/190x120/2372562.jpg" alt="" />
              </div>
              <div className="content">
                <p>{item.title}</p>
                <span>{item.description}</span>
              </div>
            </Link>
          ))
        ) : null}
      </div>
    </div>
  );
};

Search.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  dataLoad: PropTypes.func.isRequired,
  getOneArticle: PropTypes.func.isRequired,
  addCrumbs: PropTypes.func.isRequired,
  showCrumbs: PropTypes.func.isRequired,
};

const mapDispatchToProps = state => ({
  isLoading: state.monitor.isLoading,
});

export default connect(mapDispatchToProps, {
  dataLoad, getOneArticle, addCrumbs, showCrumbs,
})(Search);
