import React, { Component } from 'react';
import { Card, Row, Col, Button, FloatingLabel, Form, Container } from 'react-bootstrap';
import OtpInput from 'react-otp-input';
import { Link } from 'react-router-dom';
import './ForgotPwd.css'
class OtpInputCpn extends Component {
  state = { otp: '' };

  handleChange = (otp) => this.setState({ otp });

  render() {
    return (
      <OtpInput
        value={this.state.otp}
        onChange={this.handleChange}
        numInputs={6}
        separator={<Col md={1}></Col>}
        isInputNum
        placeholder='000000'
        className='otp-input'
        style={{ textAlign: "center" }}
      />
    );
  }
}

function NewPwd() {
  return (
    <>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
    </>
  )
}

function ForgotPwd() {
  // let tempPN = 
  // const [phoneNumber, setPN] = useState(tempPN)
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target[0].value)
  }
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
      <br />

      <Row>
        <Col xs={8} sm={9} md={6} className="mx-auto">
          <Card>
            <Card.Header className='text-center'>
              <h3>FORGOT PASSWORD</h3>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={9}>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Phonenumber"
                      className="mb-3"
                    >
                      <Form.Control type="string" placeholder="1" />

                    </FloatingLabel>
                  </Col>
                  <Col md={3} className='d-flex mb-3'>
                    <Button type='submit' className='btn-block mx-auto'>
                      Send OTP
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>

            <Row className='otp-wrapper'>
              <OtpInputCpn />
            </Row>
            <Row className='mx-auto'>
              <Col className='d-flex mb-3 text-center'>
                <Button type='submit' className='btn-block mx-auto'>
                  Verify OTP
                </Button>
              </Col>
              <Col className='d-flex mb-3 text-center'>
                <Button type='submit' className='btn-block mx-auto'>
                  Resend OTP
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default ForgotPwd