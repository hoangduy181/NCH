import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer';
import MenuScreen from './components/MenuScreen';
import { Container } from 'react-bootstrap';
import './bootstrap.min.css'
import CartScreen from './components/CartScreen';
import SignInScreen from './components/SignInScreen'; 
import { useState } from 'react';
import {Toast, Row, Col, Button} from 'react-bootstrap'
import ToastMsg from './components/ToastMsg';
import CheckOutScreen from './components/CheckOutScreen';
import ForgotPwd from './components/ForgotPwd';


function App() {

  const [isLogged, setLogIn] = useState(false)

  const handleLogOut = () => {
    console.log("handle logout")
    if (isLogged === true)
    setLogIn(false)
  }

  const handleLogIn = () => {
    if(isLogged === false)
    setLogIn(true)
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
      <Header isLogged={isLogged} sendMsg={sendMsg} handleLogOut={handleLogOut}/>
        <body style={{paddingTop: "5rem"}}>
        <ToastMsg toastMsg={toastMsg} closeToast={closeToast} variant={variant}/>
        <main className='py-3'>
          <Container>
            <Routes>
              <Route path = "/forgotpwd" element={<ForgotPwd/>}/>
              <Route path = "/checkout" element={<CheckOutScreen/>}/>
              <Route path ="/menu" element={<MenuScreen sendMsg={sendMsg}/>} exact/>
              <Route path ="/cart" element={<CartScreen sendMsg={sendMsg}/>} exact/>
              <Route path ="/signin" element={<SignInScreen sendMsg={sendMsg} handleLogIn={handleLogIn}/>} exact/>
            </Routes>
          </Container>
        </main>
        </body>
        <Footer/>
        
    </Router>
	);
}

export default App;
