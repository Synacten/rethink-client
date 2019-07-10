import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Crumbs(props) {
  const { crumb } = props;
  return (
    <div className="crumbsWrap">
      <ul>
        {Object.keys(crumb).length ? (
          crumb.map((item, i) => (<li key={item.id}><Link style={i === crumb.length - 1 ? { color: 'black' } : null} to={item.link}>{item.heading}</Link></li>))
        ) : null}
      </ul>
    </div>
  );
}

Crumbs.propTypes = {
  crumb: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.string])).isRequired,
};
