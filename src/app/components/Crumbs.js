import React from 'react';
import { connect } from 'react-redux';


const Crumbs = () => (
  <div className="crumbsWrap">
    <ul>
      <li />
    </ul>
  </div>
);

const mapDispatchToProps = state => ({
  currentArticle: state.monitor.currentArticle,
});

export default connect(mapDispatchToProps)(Crumbs);
