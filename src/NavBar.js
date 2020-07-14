import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Navbar, NavbarBrand, NavLink } from 'reactstrap';
import './NavBar.css';
import Resume from './resume.pdf';

import FontAwesome from 'react-fontawesome';

const NavBar = (props) => {
  return (
    <div>
      <Navbar light>
        <NavbarBrand href="/" className="mr-auto" id="brand"> Victor Chen </NavbarBrand>
          <NavLink className="navlink" href="https://github.com/vchen8761"> 
            <FontAwesome name="github" size="2x" style={{ '--fa-primary-color': 'red' }}/>
            <span className="tooltiptext">vchen8761 @ Github</span>
          </NavLink>
          <NavLink className="navlink" href="https://www.linkedin.com/in/victorchencs">
            <FontAwesome name="linkedin" size="2x"/>
            <span className="tooltiptext">victorchencs @ Linkedin</span> 
          </NavLink>
          <NavLink className="navlink" href="mailto:vchen8761@gmail.com">
            <FontAwesome name="envelope" size="2x"/>
            <span className="tooltiptext">vchen8761 @ Gmail</span>
          </NavLink>
          <NavLink className="navlink" href={Resume} target="_blank">
            <FontAwesome name="file" size="2x"/>
            <span className="tooltiptext">Resume</span>
          </NavLink>
      </Navbar>
    </div>
  );
}

export default NavBar;