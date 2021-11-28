import React, { Component, useState } from 'react';
import { Card, Row, Col, Button, FloatingLabel, Form, Container } from 'react-bootstrap';
import OtpInput from 'react-otp-input';
import { Link, useNavigate } from 'react-router-dom';
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
        separator={<span></span>}
        isInputNum
        placeholder='000000'
        className='otp-input'
        style={{ textAlign: "center", justifyContent: "center" }}
      />
    );
  }
}

function NewPwd({sendMsg}) {
  const navigate = useNavigate()
  const handleNewPw = (event) => {
    event.preventDefault();
    console.log(event.target[0].value)
    console.log(event.target[1].value)
    let newPwd = event.target[0].value
    if (event.target[0].value === event.target[1].value) {
      sendMsg('Password changed', 'success')
      navigate('/signin')
      localStorage.setItem('ServerOTP', '{}')
      let data = JSON.parse(localStorage.getItem('DatabaseUser'))

      data.password = newPwd
      localStorage.setItem('DatabaseUser', JSON.stringify(data))


      //handle doi mk
    }

    else {
      sendMsg('The password does not match, please check again')
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

function compareOtp() {
  let clientOTP = JSON.parse(localStorage.getItem('ClientOTP')).otp
  let serverOTP = JSON.parse(localStorage.getItem('ServerOTP')).otp
  if (clientOTP === serverOTP) return true
  return false
}

function InsertOTP({ handleVerfy, createServerOtp, sendMsg }) {
  return (
    <>
      <p className='text-center'>Please type in the OTP you received</p>
      <Row className='otp-wrapper'>
        <OtpInputCpn />
      </Row>
      <Row className='mx-auto'>
        <Col className='d-flex mb-3 text-center'>
          <Button type='submit' variant='dark' className='btn-block mx-auto' onClick={() => handleVerfy({sendMsg})}>
            Verify OTP
          </Button>
        </Col>
        <Col className='d-flex mb-3 text-center'>
          <Button type='submit' variant='dark' className='btn-block mx-auto' onClick={() => createServerOtp()}>
            Resend OTP
          </Button>
        </Col>
      </Row>
    </>
  )
}
function createServerOtp() {
  function getRandomInt(max) {
    return (Math.floor(Math.random() * max) + 1)
  }
  let num = (getRandomInt(8) * 100000 + getRandomInt(8) * 10000 + getRandomInt(8) * 1000 + getRandomInt(8) * 100 + getRandomInt(8) * 10 + getRandomInt(8))
  let data = { otp: JSON.stringify(num) }
  localStorage.setItem('ServerOTP', JSON.stringify(data))
  alert(`otp\n${num}`)
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
          <Button type='submit' className='btn-block mx-auto' variant='dark'>
            Send OTP
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

function FPCardBody({ phase, handlePNSubmit, handleVerfy, createServerOtp , sendMsg}) {
  if (phase === 1) return (<InsertPhoneNumber handlePNSubmit={handlePNSubmit} />)
  else if (phase === 2) return (<InsertOTP handleVerfy={handleVerfy} createServerOtp={createServerOtp} sendMsg={sendMsg}/>)
  else if (phase === 3) return (<NewPwd sendMsg={sendMsg} />)
}

function ForgotPwd({sendMsg}) {

  const [userPN, setUserPN] = useState('')

  const confirmPN = (phoneNumber) => {
    setUserPN(phoneNumber)
  }

  localStorage.setItem('ClientOTP', '{}')
  if (localStorage.getItem('ServerOTP') === null) {
    localStorage.setItem('ServerOTP', '{}')
  }

  const [phase, setPhase] = useState(1)
  // let tempPN = 
  // const [phoneNumber, setPN] = useState(tempPN)
  const handlePNSubmit = (event) => {
    event.preventDefault();
    console.log(event.target[0].value)
    if (event.target[0].value.length === 10) {
    //checkk...phone number
    confirmPN(event.target[0].value)
    //create serverOTP
    createServerOtp()
    setPhase(2)
    }
    else {
      sendMsg('wrong type of phonenumber', 'warning')
    }
  }

  const handleVerfy = () => {
    if (compareOtp()) {
      sendMsg('OTP verified', 'success')
      setPhase(3)
    }
    else {
      sendMsg('OTP not match', 'warning')
    }
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
                createServerOtp={createServerOtp}
                sendMsg={sendMsg} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export {InsertOTP}
export { compareOtp, createServerOtp }
export default ForgotPwd