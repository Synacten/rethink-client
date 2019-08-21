import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import parse from 'html-react-parser';
import { getArticleByCategories } from '../actions/mainActions';


const Article = ({ articles, getArticleByCategories: _getArticleByCategories }) => (
  <div className="selfArticle">
    {Object.keys(articles).length ? (
      articles.map(item => (
        <div className="articleWrap" key={item.id}>
          <div className="image">
            <img src="https://rexona.football.ua/img/field.png" alt="" />
          </div>
          <div className="descript">
            <h2>{item.title}</h2>
            <div className="misk">
              <time>{item.updated_at.split('T')[0]}</time>
              <p>0 comment</p>
              <span><Link to={`/category/${item.category}`} onClick={() => _getArticleByCategories(item.category)}>{item.category}</Link></span>
            </div>
            <h5>{parse(item.description.split('.')[0].concat('...'))}</h5>
            <div className="read">
              <p><Link to={`/article/${item.link}`}>Read More</Link></p>
              <ul>
                <li><i className="fab fa-facebook-square" /></li>
                <li><i className="fab fa-twitter" /></li>
                <li><i className="fab fa-instagram" /></li>
              </ul>
            </div>
          </div>
        </div>
      ))
    ) : null}
  </div>
);

Article.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object, PropTypes.string).isRequired,
  getArticleByCategories: PropTypes.func.isRequired,
};

const mapDispatchToProps = state => ({
  articles: state.monitor.articles,
});

export default connect(mapDispatchToProps, { getArticleByCategories })(Article);
