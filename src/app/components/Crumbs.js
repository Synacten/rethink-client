import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const Crumbs = ({ currentArticle, showCrumbs }) => (
  <div className="crumbsWrap">{
  showCrumbs ? (
    <ul>
      {Object.keys(currentArticle).length ? (
        currentArticle.map((item, i) => (<li key={item.id}><Link style={i === currentArticle.length - 1 ? { color: 'black' } : null} to="/">{item.category}</Link></li>))
      ) : null}
    </ul>
  ) : null
      }
  </div>

);

Crumbs.propTypes = {
  currentArticle: PropTypes.arrayOf(PropTypes
    .oneOfType([PropTypes.object, PropTypes.string])).isRequired,
  showCrumbs: PropTypes.bool.isRequired,
};

const mapDispatchToProps = state => ({
  currentArticle: state.monitor.currentArticle,
  showCrumbs: state.monitor.showCrumbs,
});

export default connect(mapDispatchToProps)(Crumbs);
