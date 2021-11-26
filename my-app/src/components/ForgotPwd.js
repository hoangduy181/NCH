import React, { Component, useState } from 'react';
import { Card, Row, Col, Button, FloatingLabel, Form, Container } from 'react-bootstrap';
import OtpInput from 'react-otp-input';
import { Link } from 'react-router-dom';
import './ForgotPwd.css'
class OtpInputCpn extends Component {
  state = { otp: '' };

  handleChange = (otp) => {
    this.setState({ otp })
    //updateOTPinLocalStorage
    localStorage.setItem('ClientOTP', JSON.stringify({ otp }))
  };



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
        style={{ textAlign: "center", justifyContent: "center" }}
      />
    );
  }
}

function NewPwd() {
  const handleNewPw = (event) => {
    event.preventDefault();
    console.log(event.target[0].value)
    console.log(event.target[1].value)
    if (event.target[0].value === event.target[1].value) {
      alert('doi mk thanh cong')
      //handle doi mk
    }

    else {
      alert('doi ko thanh')
    }
  }
  return (
    <Form onSubmit={handleNewPw}>
      <FloatingLabel controlId="floatingPassword" label="New password" className="mb-3">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Confirm new password" className="mb-3">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      <Col className='d-flex justify-content-center'>
        <Button type='submit' className='m-3 mt-0 mb-1 btn-outline-info' variant='light' >
          Update password
        </Button>
      </Col>
    </Form>
  )
}

function InsertOTP({ handleVerfy, createServerOtp }) {
  return (
    <>
      <p className='text-center'>Please type in the OTP you received</p>
      <Row className='otp-wrapper'>
        <OtpInputCpn />
      </Row>
      <Row className='mx-auto'>
        <Col className='d-flex mb-3 text-center'>
          <Button type='submit' className='btn-block mx-auto' onClick={() => handleVerfy()}>
            Verify OTP
          </Button>
        </Col>
        <Col className='d-flex mb-3 text-center'>
          <Button type='submit' className='btn-block mx-auto' onClick={() => createServerOtp()}>
            Resend OTP
          </Button>
        </Col>
      </Row>
    </>
  )
}

function InsertPhoneNumber({ handlePNSubmit }) {
  return (
    <Form onSubmit={handlePNSubmit}>
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
  )
}

function FPCardBody({ phase, handlePNSubmit, handleVerfy, createServerOtp }) {
  if (phase === 1) return (<InsertPhoneNumber handlePNSubmit={handlePNSubmit} />)
  else if (phase === 2) return (<InsertOTP handleVerfy={handleVerfy} createServerOtp={createServerOtp} />)
  else if (phase === 3) return (<NewPwd />)
}

function ForgotPwd() {
  localStorage.setItem('ClientOTP', '{}')
  if (localStorage.getItem('ServerOTP') === null) {
    localStorage.setItem('ServerOTP', '{}')
  }


  const handleVerfy = () => {
    //check
    let clientOTP = JSON.parse(localStorage.getItem('ClientOTP')).otp
    let serverOTP = JSON.parse(localStorage.getItem('ServerOTP')).otp
    if (clientOTP === serverOTP) {
      alert('oke')
      setPhase(3)
    }
    else {
      alert('sai')
    }
  }

  const [phase, setPhase] = useState(3)
  // let tempPN = 
  // const [phoneNumber, setPN] = useState(tempPN)
  const handlePNSubmit = (event) => {
    event.preventDefault();
    console.log(event.target[0].value)
    //checkk...phone number

    //create serverOTP
    let data = { otp: JSON.stringify(123456) }
    localStorage.setItem('ServerOTP', JSON.stringify(data))
    setPhase(2)
  }

  const createServerOtp = () => {
    let data = { otp: JSON.stringify(225464) }
    localStorage.setItem('ServerOTP', JSON.stringify(data))
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
              <FPCardBody
                phase={phase}
                handlePNSubmit={handlePNSubmit}
                handleVerfy={handleVerfy}
                createServerOtp={createServerOtp} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default ForgotPwd