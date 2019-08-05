import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getOneArticle } from '../actions/mainActions';

const ArticlePattern = ({ match: { params }, getOneArticle: _getOneArticle }) => {
  useEffect(() => {
    _getOneArticle(params);
  }, []);
  return (
    <div className="articlePattern">
      <div className="articleContent">
        1
      </div>
    </div>
  );
};


ArticlePattern.propTypes = {
  match: PropTypes.objectOf(String).isRequired,
  getOneArticle: PropTypes.func.isRequired,
};

export default connect(null, { getOneArticle })(ArticlePattern);
