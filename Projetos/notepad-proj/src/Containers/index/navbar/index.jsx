import React from 'react';

import NavbarWrapper from './navbar.Style';
import Header from './Header';
import Content from './Content';

const Navbar = () => (
  <NavbarWrapper className="navbar">
    <Header />
    <Content />
  </NavbarWrapper>
);

export default Navbar;
