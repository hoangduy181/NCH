import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

function Footer() {
  return (
    <footer>
      <Row className = "bg-danger">
        <Col>
      <Nav class="navbar justify-content-center pb-3 mb-3" >
        <Nav.Link href="/home" className="nav-link px-3 footer-text">Home</Nav.Link>
        <Nav.Link href="/faqs" className="nav-link px-3 footer-text">FAQs</Nav.Link>
        <Nav.Link href="/aboutus" className="nav-link px-3 footer-text">About us</Nav.Link>
      </Nav>
      <p class="text-center footer-text">&copy; 2021 Company, Inc</p>
      </Col>
    </Row>
    </footer>

  )
}

export default Footer;