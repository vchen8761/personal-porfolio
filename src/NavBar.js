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
          <NavLink className="navlink" href="https://github.com/vchen8762" title="Github"> 
            <FontAwesome name="github" size="2x" style={{ '--fa-primary-color': 'red' }}/>
          </NavLink>
          <NavLink className="navlink" href="https://www.linkedin.com/in/victorchencs" title="LinkedIn">
            <FontAwesome name="linkedin" size="2x"/>
          </NavLink>
          <NavLink className="navlink" href="mailto:vchen8762@gmail.com" title="Email">
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