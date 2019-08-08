import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const Categories = ({ articlesByCategory }) => {
  const getArticleFromCategory = ({ title }) => {
    console.log(title);
  };
  return (
    <div className="articlesByCategory">
      {Object.keys(articlesByCategory).length ? (
        articlesByCategory.map(item => (
          <div className="selfArticle" key={item.id} onClick={() => getArticleFromCategory(item)} role="presentation">
            <div className="image">
              <img src="https://rexona.football.ua/img/field.png" alt="" />
            </div>
            <div className="content">
              <h3>{item.title}</h3>
              <span>{item.description.split('.')[0]}</span>
              <p>{item.created_at.split('T')[0]}</p>
            </div>
          </div>
        ))
      ) : <div className="noContent">No articles yet</div>}
    </div>
  );
};

Categories.propTypes = {
  articlesByCategory: PropTypes.arrayOf(PropTypes.object, PropTypes.string).isRequired,
};

const mapDispatchToProps = state => ({
  articlesByCategory: state.monitor.articlesByCategory,
});

export default connect(mapDispatchToProps)(Categories);
