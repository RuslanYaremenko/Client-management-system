import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <header>
    <NavLink to="/clients">Clients</NavLink>
    <NavLink to="/signup">Sign Up</NavLink>
    <NavLink to="/about">About</NavLink>
  </header>
);

export default NavBar;
