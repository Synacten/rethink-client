import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getInitial, getArticles, removeCrumbs } from '../../actions/mainActions';

const Navbar = ({
  dataInit,
  getInitial: _getInitial,
  getArticles: _getArticles,
  removeCrumbs: _removeCrumbs,
}) => {
  useEffect(() => {
    window.addEventListener('load', () => { _getInitial(); _getArticles(); }, []);
  });
  return (
    <div className="navBar">
      <div className="flexNav">
        <div className="flLogoLink">
          <div className="logo">
            <Link to="/" onClick={() => _removeCrumbs()}><h1>Logo</h1></Link>
          </div>
          <div className="links">
            <ul>
              {Object.keys(dataInit).length ? dataInit.map(item => (
                <li key={item.id}><Link to={`/${item.category_name}`}>{item.category_name}</Link></li>
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
  removeCrumbs: PropTypes.func.isRequired,
};


const mapDispatchToProps = state => ({
  dataInit: state.monitor.dataInit,
});


export default connect(mapDispatchToProps, { getInitial, getArticles, removeCrumbs })(Navbar);
