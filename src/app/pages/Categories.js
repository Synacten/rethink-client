import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';


const Categories = ({ articlesByCategory }) => (
  <div className="articlesByCategory">
    {Object.keys(articlesByCategory).length ? (
      articlesByCategory.map(item => (
        <Link className="selfArticle" to={`/article/${item.link}`} key={item.id}>
          <div className="image">
            <img src="https://rexona.football.ua/img/field.png" alt="" />
          </div>
          <div className="content">
            <h3>{item.title}</h3>
            <span>{(parse(item.description.split('.')[0]))}</span>
            <p>{item.created_at.split('T')[0]}</p>
          </div>
        </Link>
      ))
    ) : <div className="noContent">No articles yet</div>}
  </div>
);

Categories.propTypes = {
  articlesByCategory: PropTypes.arrayOf(PropTypes.object, PropTypes.string).isRequired,
};

const mapDispatchToProps = state => ({
  articlesByCategory: state.monitor.articlesByCategory,
});

export default connect(mapDispatchToProps)(Categories);
