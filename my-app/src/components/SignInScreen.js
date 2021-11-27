import React, {useEffect, useState } from "react";
import { FloatingLabel, Form, Modal, Row, Col, Card ,Container, Button} from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom";
function SignInScreen({sendMsg, handleLogIn}) {

let userAccount = JSON.parse(localStorage.getItem('DatabaseUser'))

  const navigate = useNavigate()
  const handleSignIn = (phoneNumber, password) => {
    if (phoneNumber === userAccount.phoneNumber && password === userAccount.password)
    {
      handleLogIn()
      navigate('/menu')
    }
    else {
      sendMsg('Please check your input again','warning')
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target[0].value)
    console.log(event.target[1].value)
   console.log(userAccount)
   
    handleSignIn(event.target[0].value, event.target[1].value)

  }


  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }, [])
  return (
    <Container>
            <Row>
        <Col xs={2} sm={2} md={2}>
          <Link to='/home' className='nav-link'>
          <Button variant='dark'>
            Go Back
          </Button>
          </Link>
        </Col>
      </Row>
      <br/>
    
    <Row>
      <Col xs={8} sm={9} md={6} className="mx-auto">
        <Card>
          <Card.Header className='text-center'>
            <h3>SIGN IN</h3>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
            <FloatingLabel
              controlId="floatingInput"
              label="Phonenumber"
              className="mb-3"
            >
              <Form.Control type="string" placeholder="1" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
            <div className="d-flex justify-content-between">
              <Link to='/signup' className='nav-link mb-1'><small>Sign up</small></Link>
              <Link to='/forgotpwd' className='nav-link mb-1'><small>Forgot password?</small></Link>
            </div>
          <Col className='d-flex justify-content-center'>
          <Button type = 'submit' className='m-3 mt-0 mb-1 btn-outline-info' variant='light' >
            Sign in
          </Button>
          </Col>
            </Form>
          </Card.Body>
          <h5 className='text-center'>Or</h5>
          <Button className='m-3 mt-0 mb-1 btn-outline-info' variant='light' >
          <i class="fab fa-facebook-f p-1"></i>
          Login with Facebook
          </Button>
          <Button className='m-3 mt-1 mb-0 btn-outline-secondary' variant='dark'>
          <i class="fab fa-google p-1"></i>
            Login with Google
          </Button>
        </Card>
      </Col>
    </Row>
    </Container>
  )
}

export default SignInScreen