import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer';
import MenuScreen from './components/MenuScreen';
import { Container } from 'react-bootstrap';
import './bootstrap.min.css'
import CartScreen from './components/CartScreen';
import SignInScreen from './components/SignInScreen'; 
import SignUpScreen from './components/SignUpScreen'; 
import { useState } from 'react';
import {Toast, Row, Col, Button} from 'react-bootstrap'
import ToastMsg from './components/ToastMsg';
import CheckOutScreen from './components/CheckOutScreen';
import ForgotPwd from './components/ForgotPwd';
import Scrollbars from 'react-custom-scrollbars';
import ThankyouScreen from './components/ThankyouScreen';
import FeedbackScreen from './components/FeedbackScreen';


function App() {

  // const [checkedOut, setCheckedOut] = useState(false)
  // const [feedback, setFeedback] = useState(false)

  // const setCO = () => {
  //   setCheckedOut(true)
  // }

  if (localStorage.getItem('User') === null) {
    localStorage.setItem('User', 'false')
  }
  const [isLogged, setLogIn] = useState(() => {
    return JSON.parse(localStorage.getItem('User'))
  })

  const handleLogOut = () => {
    sendMsg('Logged out!', 'success')
    console.log("handle logout")
    if (isLogged === true) {
      localStorage.setItem('User', 'false')
      setLogIn(false)
    }
  }
  
  const handleLogIn = () => {
  sendMsg('Logged in succesfully!', 'success')
  if(isLogged === false) {
    localStorage.setItem('User', 'true')
    setLogIn(true) }
  }
  
  if (localStorage.getItem('Cart') === null) {
    localStorage.setItem('Cart', '[]')
  }

  if (localStorage.getItem('DatabaseUser') === null) {
    localStorage.setItem('DatabaseUser', '{"phoneNumber": "0394844790", "password": "@123456"}')
  }

  const [toastMsg, setToastMsg] = useState(null)
  const [variant, setToastVariant] = useState('success')
  const closeToast = () => setToastMsg(null)

  const sendMsg = (msg, variant) => {
    setToastMsg(null)   
    setToastMsg(msg)
    setToastVariant(variant)
  }
	return (

    
    <Router>
      {/* <Scrollbars style={{height: "100vh"}}
          renderTrackHorizontal={props => <div {...props} className="track-horizontal"/>}
          renderTrackVertical={props => <div {...props} className="track-vertical"/>}
          renderThumbHorizontal={props => <div {...props} className="thumb-horizontal"/>}
          renderThumbVertical={props => <div {...props} className="thumb-vertical"/>}
      > */}
      <Header isLogged={isLogged} sendMsg={sendMsg} handleLogOut={handleLogOut}/>
        <body style={{paddingTop: "4.5rem"}}>
        <ToastMsg toastMsg={toastMsg} closeToast={closeToast} variant={variant}/>
        <main className='py-3'>
          <Container>
            <Routes>
              <Route path = "/forgotpwd" element={<ForgotPwd sendMsg={sendMsg}/>}/>
              <Route path = "/checkout" element={<CheckOutScreen/>}/>
              <Route path ="/menu" element={<MenuScreen sendMsg={sendMsg}/>} exact/>
              <Route path ="/cart" element={<CartScreen sendMsg={sendMsg}/>} exact/>
              <Route path ="/signin" element={<SignInScreen sendMsg={sendMsg} handleLogIn={handleLogIn}/>} exact/>
              <Route path ="/signup" element={<SignUpScreen sendMsg={sendMsg}/>} exact/>
              <Route path ="/thankyou" element={<ThankyouScreen/>} exact/>
              <Route path ="/feedback" element={<FeedbackScreen sendMsg={sendMsg}/>} exact/>
              <Route path ="/" element={<Navigate to='/home'/>}/>
            </Routes>
          </Container>
        </main>
        </body>
        <Footer/>
        {/* </Scrollbars> */}

    </Router>
	);
}

export default App;
