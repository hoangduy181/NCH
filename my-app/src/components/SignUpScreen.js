import React, { useState } from "react";
import { FloatingLabel, Form, Modal, Row, Col, Card, Container, Button } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom";
import { InsertOTP, compareOtp, createServerOtp } from "./ForgotPwd";

function SignUpScreen({ sendMsg }) {
  localStorage.setItem('ClientOTP', '{}')
  if (localStorage.getItem('ServerOTP') === null) {
    localStorage.setItem('ServerOTP', '{}')
  }
  const navigate = useNavigate()
  const [phase, setPhase] = useState(1)
  const handleSignUpSubmit = (event) => {
    event.preventDefault();
    //check
    setPhase(2)
    createServerOtp()

  }

  const handleVerfy = () => {
    if (compareOtp()) {
      setPhase(3)
    }
    else {
      sendMsg('The OTP is incorrect, please check again', 'warning')
    }
  }

  return (
    <Container>
      <Row>
        <Col xs={2} sm={2} md={2}>
          <Link to='/signin' className='nav-link'>
            <Button variant='dark'>
              Go Back
            </Button>
          </Link>
        </Col>
      </Row>
      <br />

      <Row>
        <Col xs={8} sm={9} md={6} className="mx-auto">
          <Card>
            <Card.Header className='text-center'>
              <h3>SIGN UP</h3>
            </Card.Header>
            <Card.Body>
              {phase === 1 && (<Form onSubmit={handleSignUpSubmit}>
                <FloatingLabel controlId="floatingPassword" label="Name" className="mb-3">
                  <Form.Control type="string" placeholder="Password" required />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Phonenumber"
                  className="mb-3"
                >
                  <Form.Control type="string" placeholder="1" required />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                  <Form.Control type="password" placeholder="Password" required />
                </FloatingLabel>
                <Col className='d-flex justify-content-center'>
                  <Button type='submit' className='m-3 mt-0 mb-1 btn-outline-info' variant='light' >
                    Sign up
                  </Button>
                </Col>
              </Form>)}
              {phase === 2 && (
                <InsertOTP handleVerfy={handleVerfy} createServerOtp={createServerOtp} sendMsg={sendMsg} />
              )}
              {phase === 3 && (
                <Row className='justify-content-center'>
                  <Col>
                    <h3 className='p-2'>Signed up successfully!</h3>
                    <Link to='/signin' style={{ textDecoration: "none" }} className='d-flex flex-row-reverse'><h4 className='p-3'>Sign In <i class="fas fa-arrow-right"></i></h4></Link>
                  </Col>
                </Row>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default SignUpScreen