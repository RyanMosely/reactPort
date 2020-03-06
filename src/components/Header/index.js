import React from "react";
import {
  Navbar,
  Nav,
  Form,
  NavDropdown,
  FormControl,
  Button
} from 'react-bootstrap';
import "./style.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Header (props) {
  return  <div>

<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Ryan Mosely</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home"> <Link to="/">Home</Link></Nav.Link>
      <Nav.Link href="#link"> <Link to="/about">Projects</Link></Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

  
  </div>;
}

export default Header;
