import React, { useState } from 'react';
import { 
  Nav, 
  NavItem, 
  NavDropdown, 
  Navbar,
  MenuItem, 
  FormControl, 
  Form, 
  Button, 
  Image 
} from 'react-bootstrap'
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import Profile_image from '../../images/test_image/profile.png';

export const NavBar = observer(() => {

  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/carrylogo.png"
            width="40"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          <span style={{color: '#41bc9d'}}>CarryHome </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-center mr-sm-2">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
        <Nav className="navbar-right ml-auto">
          <Nav.Link as={Link} to="/login">
          {" "}
          Login{" "}
          </Nav.Link>
        </Nav>
        <Image
          alt="Profile_image"
          src={Profile_image}
          className= 'profile-dp'
        />
        <NavDropdown
          title={'Avinash Singh'}
          id="collasible-nav-dropdown"
          className="user-profile-dp"
        >
          <NavDropdown.Item>
            Dashboard
          </NavDropdown.Item>
          <NavDropdown.Item>
            Logout
          </NavDropdown.Item>
        </NavDropdown>
      </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  )
})
