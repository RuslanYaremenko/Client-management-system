import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

const NavBar = () => {
  const [visibleMobileNavs, setVisibleMobileNavs] = useState(false);

  const toggleNavBarMobile = () => setVisibleMobileNavs(!visibleMobileNavs);

  const navBarClassName = classNames('collapse', 'navbar-collapse', { 'show': visibleMobileNavs });

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink to="/" className="nav-link">Home</NavLink>
      <button className="navbar-toggler" onClick={toggleNavBarMobile} type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className={navBarClassName} id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/clients" className="nav-link">Clients</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/signup" className="nav-link">Sign Up</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">About</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
