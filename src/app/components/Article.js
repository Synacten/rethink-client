import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Article = ({ articles }) => {
  console.log(articles);
  return (
    <div className="selfArticle">
      {Object.keys(articles).length ? (
        articles.map(item => (
          <div className="articleWrap" key={item.id}>
            <div className="image">
              <img src="" alt="" />
            </div>
            <div className="descript">
              <h2>{item.title}</h2>
              <div className="misk">
                <time>10.02.19</time>
                <p>1 comment</p>
                <span>{item.category}</span>
              </div>
              <h5>{item.description}</h5>
              <div className="read">
                <p><Link to="/">Read More</Link></p>
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
};

Article.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object, PropTypes.string).isRequired,
};

const mapDispatchToProps = state => ({
  articles: state.monitor.articles,
});

export default connect(mapDispatchToProps)(Article);
