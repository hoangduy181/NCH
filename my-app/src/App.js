import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer';
import MenuScreen from './components/MenuScreen';
import { Container } from 'react-bootstrap';
import './bootstrap.min.css'
import CartScreen from './components/CartScreen';
import cartItems from './cartItem';
import SignInScreen from './components/SignInScreen'; 
import { useState } from 'react';
import {Toast, Row, Col, Button} from 'react-bootstrap'
import ToastMsg from './components/ToastMsg';
import CheckOutScreen from './components/CheckOutScreen';
import Scrollbars from 'react-custom-scrollbars';

function App() {

  const [toastMsg, setToastMsg] = useState(null)
  
  const closeToast = () => setToastMsg(null)

  const sendMsg = (msg) => {
    setToastMsg(null)   
    setToastMsg(msg)
  }
	return (
    <Scrollbars 
      style={{height: "100vh"}}
    universal>
    
    <Router>  
        <Header/>
        <body style={{paddingTop: "5rem"}}>
        <ToastMsg toastMsg={toastMsg} closeToast={closeToast}/>
        <main className='py-3'>
          <Container>
            <Routes>
              <Route path = "/checkout" element={<CheckOutScreen/>}/>
              <Route path ="/menu" element={<MenuScreen sendMsg={sendMsg}/>} exact/>
              <Route path ="/cart" element={<CartScreen sendMsg={sendMsg}/>} exact/>
              <Route path ="/signin" element={<SignInScreen sendMsg={sendMsg}/>} exact/>
            </Routes>
          </Container>
        </main>
        </body>
        <Footer/>
        
    </Router>
    </Scrollbars>
	);
}

export default App;
