import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

const NavBar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar light>
        <NavbarBrand href="/" className="mr-auto"> Victor Chen </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={collapsed} navbar>
          <Nav navbar>
            <NavItem >
              <NavLink style={{display: 'inline-block', paddingRight: '30px'}} href="https://github.com/vchen8761"> <FontAwesome name="github"/> My GitHub</NavLink>
              <NavLink style={{display: 'inline-block'}} href="https://www.linkedin.com/in/victorchencs"><FontAwesome name="linkedin"/> My LinkedIn</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;