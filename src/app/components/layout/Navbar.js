import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => (
  <div className="navBar">
    <div className="flexNav">
      <div className="flLogoLink">
        <div className="logo">
          <Link to="/"><h1>Logo</h1></Link>
        </div>
        <div className="links">
          <ul>
            <li><Link to="/">Blog</Link></li>
            <li><Link to="/">Business</Link></li>
            <li><Link to="/">Technology</Link></li>
            <li><Link to="/">Management</Link></li>
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
