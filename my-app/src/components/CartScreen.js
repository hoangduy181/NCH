import React, { useState, useEffect } from "react";
import { Row, Col, ListGroup, Image, Button, ToggleButton, Card, Container } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom";
import NumberSpinner from "./NumberSpinner";
import products from '../dish'
import Scrollbars from "react-custom-scrollbars";

function getProductById({ item }) {
  let product = products.find((p) => p._id === item._id)
  return product;
}

function CartItem({ item, removeItem, setTotal , sendMsg}) {
  let product = products.find((p) => p._id === item._id)
  console.log(product)
  return (
    <ListGroup.Item key={product._id}>
      <Row>
        <Col xs = {6} sm={6} md={2}>
          <Image src={product.image} fluid rounded style={{width: "75%",height: "15vh",objectFit: "cover"}}></Image>
        </Col>
        <Col xs={3} sm={3} md={4}>
          {product.name}
        </Col>
        <Col xs={3} sm={3} md={2}>
          {product.price.toFixed(3)} VND
        </Col>
        <Col xs={4} sm={3} md={3} className='mx-auto'>
          <NumberSpinner item={item} onCart={true} setTotal={setTotal} />
        </Col>
        <Col xs={3} sm={3} md={1} className='mx-auto'>
          <Button
            variant="outline-primary"
            onClick={() => {
              removeItem(item)
              sendMsg('Deleted successfully', 'warning')}}>
            <i class="fa-solid fa-trash-can"></i>
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>
  )
}

function CartList({ cartItems, removeItem, setTotal , sendMsg}) {
  return (
    <ListGroup variant='flush'>
      {cartItems.map((item) => (
        <CartItem item={item} removeItem={removeItem} setTotal={setTotal} sendMsg={sendMsg}/>
      ))}
    </ListGroup>
  )
}


function CartScreen({sendMsg}) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }, [])
  let navigate = useNavigate()
  var [cartItems, SetcartItems] = useState(() => {
    return JSON.parse(localStorage.getItem('Cart'))
  })
  const tempCountQty = cartItems.reduce((acc, item) => acc + item.qty, 0)
  const tempTotal = cartItems.reduce((acc, item) => acc + item.qty * getProductById({ item }).price, 0)
  const [total, setTotal] = useState(tempTotal)
  const [countQty, setCountQty] = useState(tempCountQty)
  const updateTotal = () => {
    const data = JSON.parse(localStorage.getItem('Cart'));
    const t = data.reduce((acc, item) => acc + item.qty * getProductById({ item }).price, 0)

    const c = data.reduce((acc, item) => acc + item.qty, 0)

    setTotal(t)
    setCountQty(c)
  }

  function removeItem(item) {
    var data = []
    cartItems.forEach(
      (element) => {
        if (element._id !== item._id) {
          data.push(element)
        }
      }
    )

    localStorage.setItem('Cart', JSON.stringify(data))
    SetcartItems(data)
    updateTotal()
  }

  return (
    <Col>
      <Row>
        <Col xs={2} sm={2} md={2}>
          <Link to='/menu' className='nav-link'>
          <Button variant='dark'>
            Go Back
          </Button>
          </Link>
        </Col>
      </Row>
      <br/>
      <Row>
        <Col xs={12} sm={12} md={9}>
        <Scrollbars
          autoHeight
          autoHeightMin={500}
        >
          <h1>Cart</h1>
          {cartItems.length === 0 ? (<h2>
            Your cart is empty
          </h2>) : (<CartList cartItems={cartItems} removeItem={removeItem} setTotal={updateTotal} sendMsg={sendMsg}/>)
          }
        </Scrollbars>
        </Col>
        
        <Col sm={12} md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>Total {countQty} item{(countQty > 1) && 's'}</h2>
                {total.toFixed(3)} VND
              </ListGroup.Item>
              <ListGroup.Item className="d-grid gap-2">
                
                  
                  <Button type='button' className='btn-block' disabled={cartItems.length === 0} onClick={() => navigate('/checkout')}>
                    Proceed to checkout
                  </Button>
                
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        
      </Row>
    </Col>
  )
}
export {getProductById}
export default CartScreen;