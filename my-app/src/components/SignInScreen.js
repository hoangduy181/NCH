import React, {useEffect } from "react";
import { FloatingLabel, Form, Modal, Row, Col, Card ,Container, Button} from "react-bootstrap"
import { Link } from "react-router-dom";
function SignInScreen() {
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
          </Card.Body>
          <Button type= 'submit'  className='btn-block mx-auto'>
            Sign in
          </Button>
          <hr/>
          <h5 className='text-center'>Or</h5>
          <Button className='m-3 mt-0 mb-1 btn-outline-info' variant='light' >
          <i class="fab fa-facebook-f p-1"></i>
          Login with Facebook
          </Button>
          <Button className='m-3 mt-1 mb-0 btn-outline-secondary' variant='dark'>
          <i class="fab fa-google p-1"></i>
            Login with Google
          </Button>

          <Card.Body>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    </Container>
  )
}

export default SignInScreen