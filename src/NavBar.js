import React from 'react';
import {Navbar, NavbarBrand, NavLink } from 'reactstrap';
import './NavBar.css';
import Resume from './resume.pdf';

import FontAwesome from 'react-fontawesome';

function NavBar() {
  return (
    <div id="navigation">
      <Navbar light>
        <NavbarBrand href="/" className="mr-auto" id="brand"> Victor Chen </NavbarBrand>
        <div id="links">
          <NavLink className="navlink" href="https://github.com/vchen8761" title="vchen8761 @ Github"> 
            <FontAwesome name="github" size="2x" style={{ '--fa-primary-color': 'red' }}/>
          </NavLink>
          <NavLink className="navlink" href="https://www.linkedin.com/in/victorchencs" title=" victorchencs @ LinkedIn">
            <FontAwesome name="linkedin" size="2x"/>
          </NavLink>
          <NavLink className="navlink" href="mailto:vchen8761@gmail.com" title="vchen8761 @ Gmail">
            <FontAwesome name="envelope" size="2x"/>
          </NavLink>
          <NavLink className="navlink" href={Resume} target="_blank" title="Resume">
            <FontAwesome name="file" size="2x"/>
          </NavLink>
        </div>
      </Navbar>
    </div>
  );
}

export default NavBar;