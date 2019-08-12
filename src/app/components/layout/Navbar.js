import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  getInitial,
  getArticles,
  showCrumbs,
  getArticleByCategories,
} from '../../actions/mainActions';

const Navbar = ({
  dataInit,
  getInitial: _getInitial,
  getArticles: _getArticles,
  showCrumbs: _showCrumbs,
  getArticleByCategories: _getArticleByCategories,
}) => {
  useEffect(() => {
    window.addEventListener('load', () => {
      _getInitial();
      _getArticles();
      if (window.location.href === '/') {
        _showCrumbs(false);
      } else {
        _showCrumbs(true);
      }
    }, []);
  });
  return (
    <div className="navBar">
      <div className="flexNav">
        <div className="flLogoLink">
          <div className="logo">
            <Link to="/" onClick={() => _showCrumbs(false)}><h1>Logo</h1></Link>
          </div>
          <div className="links">
            <ul>
              {Object.keys(dataInit).length ? dataInit.map(item => (
                <li key={item.id}><Link to={`/category/${item.category_name}`} onClick={() => _getArticleByCategories(item.category_name)}>{item.category_name}</Link></li>
              )) : null}
            </ul>
          </div>
          <div className="hamb">
            <i className="fas fa-bars" />
          </div>
        </div>
        <div className="orderPhone">
          <div className="phone"><i className="fas fa-phone" /> 8 (800) 800 000</div>
          <div className="callOrder">Order service</div>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  dataInit: PropTypes.arrayOf(PropTypes.object, PropTypes.string).isRequired,
  getInitial: PropTypes.func.isRequired,
  getArticles: PropTypes.func.isRequired,
  showCrumbs: PropTypes.func.isRequired,
  getArticleByCategories: PropTypes.func.isRequired,
};


const mapDispatchToProps = state => ({
  dataInit: state.monitor.dataInit,
});


export default connect(mapDispatchToProps, {
  getInitial,
  getArticles,
  showCrumbs,
  getArticleByCategories,
})(Navbar);
