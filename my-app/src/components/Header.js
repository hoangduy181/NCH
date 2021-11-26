import React from "react";
import { Container, Navbar, Nav, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../logo.png'

function Header() {
  return (
    <header>
      <Navbar variant="dark" bg="danger" expand="lg" collapseOnSelect fixed="top">
        <Container>
          <Link to="/home" className='nav-link'>
            <Navbar.Brand href="/home" >
            <img
              src={logo}
              width="25"
              height="25"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            NCH</Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Link to="/menu" className='nav-link'>
                <Nav.Link href="/menu" activeKey="/menu">Menu</Nav.Link>
              </Link>
              <Link to="/aboutus" className='nav-link'>
                <Nav.Link href="/aboutus" activeKey="/aboutus">About us</Nav.Link>
              </Link>

            </Nav>
            <Nav
              className="ml-auto my-2 my-lg-0 justify-content-end"
              style={{ maxHeight: '100px' }}
              navbarScroll>
              <Link to="/cart" className='nav-link'>
                <Nav.Link href="/cart" activeKey="/cart">
                  <i className='fas fa-shopping-cart me-1'></i>
                  Cart
                </Nav.Link>
              </Link>
              <Link to="/signin" className='nav-link'>
                <Nav.Link href="/signin" activeKey="/signin">
                  <i className='fas fa-user me-1'></i>
                  Sign in
                </Nav.Link>
              </Link>
            </Nav>
            {/* <Form className="d-flex">
                <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
            </Form> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header;