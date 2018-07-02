import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import Logo from './logo';
import PDF from '../documents/kerenfabrisrotelli_cv.pdf';

const Header = () => {
  return(
    <Navbar collapseOnSelect fixedTop className="header">
      <Navbar.Header>
        <Navbar.Brand>
          <div className="header-logo">
            <Logo width="30" height="50" color="#000000" />
          </div>
          <Navbar.Text>KEREN FABRIS-ROTELLI</Navbar.Text>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem href="#about">About</NavItem>
          <NavItem href="#companies">Companies</NavItem>
          <NavItem href="#projects">Projects</NavItem>
          <NavItem href="#contact">Contact</NavItem>
          <NavItem href={PDF} target="_blank" rel="noopener noreferrer">Download CV</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;