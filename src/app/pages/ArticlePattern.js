import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getOneArticle } from '../actions/mainActions';

const ArticlePattern = ({ match: { params }, getOneArticle: _getOneArticle, currentArticle }) => {
  useEffect(() => {
    _getOneArticle(params);
  }, []);
  return (
    <div className="articlePattern">
      {Object.keys(currentArticle).length ? (
        currentArticle.map(item => (
          <div className="articleContent" key={item.id}>
            <div className="title">{item.title}</div>
            <div className="articleImg">
              <img src="https://rexona.football.ua/img/field.png" alt="" />
            </div>
            <div className="content">{item.description}</div>
            <div className="publishData">{item.created_at.split('T')[0]}</div>
          </div>
        ))
      ) : null}

    </div>
  );
};


ArticlePattern.propTypes = {
  match: PropTypes.objectOf(String).isRequired,
  getOneArticle: PropTypes.func.isRequired,
  currentArticle: PropTypes.arrayOf(PropTypes.object, PropTypes.string).isRequired,
};

const mapDispatchToProps = state => ({
  currentArticle: state.monitor.currentArticle,
});

export default connect(mapDispatchToProps, { getOneArticle })(ArticlePattern);
