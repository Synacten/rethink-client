import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const Footer = ({ dataInit }) => (
  <div className="footer">
    <div className="flexNav">
      <div className="flLogoLink">
        <div className="logo">
          <Link to="/"><h1>Logo</h1></Link>
        </div>
        <div className="links">
          <ul>
            {Object.keys(dataInit).length ? dataInit.map(item => (
              <li key={item.id}><Link to={`/${item.category_name}`}>{item.category_name}</Link></li>
            )) : null}
          </ul>
        </div>
      </div>
      <div className="orderPhone">
        <div className="phone"><i className="fas fa-phone" /> 8 (800) 800 000</div>
        <div className="callOrder">Order service</div>
      </div>
    </div>
    <div className="copyRight">@ {new Date().getFullYear()} &quot;Company&quot; All Rights Recerved </div>
  </div>
);

Footer.propTypes = {
  dataInit: PropTypes.arrayOf(PropTypes.object, PropTypes.string).isRequired,
};


const mapDispatchToProps = state => ({
  dataInit: state.monitor.dataInit,
});

export default connect(mapDispatchToProps)(Footer);
