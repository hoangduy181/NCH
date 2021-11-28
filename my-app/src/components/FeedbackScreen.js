import React, { useEffect, useState } from "react";
import { FloatingLabel, Form, Modal, Row, Col, Card, Container, Button, ListGroup, Image, FormControl } from "react-bootstrap"
import Scrollbars from "react-custom-scrollbars";
import { Link, useNavigate } from "react-router-dom";
import { Rating } from 'react-simple-star-rating'
import { getProductById } from "./CartScreen";

function FeedbackItem({ item }) {
  const product = getProductById({ item })

  const [rating, setRating] = useState(0) // initial rating value
  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
    // Some logic
  } 
  return (
    <ListGroup.Item key={product._id}>
      <Row>
        <Col xs={6} sm={6} md={2} className='d-flex flex-row'>
          <Image src={product.image} fluid rounded style={{ width: "75%", height: "15vh", objectFit: "cover" }}></Image>
        </Col>
        <Col xs={6} sm={6} md={3} className='d-flex flex-row'>
          {product.name}
        </Col>
        <Col md={3} sm={6} className='d-flex flex-row'>
          <Rating
            onClick={handleRating}
            ratingValue={rating}
            size={20}
            label
            transition
            fillColor='orange'
            emptyColor='#bbbbbb'
            className='foo' // Will remove the inline style if applied
          />
        </Col>
        <Col md={4} className='d-flex flex-row'>
          <FormControl
            as="textarea"
            placeholder="Additional note"
            style={{ height: '100px' }}
          />
        </Col>
      </Row>
    </ListGroup.Item>
  )
}

function FeedbackScreen({ sendMsg }) {
  const navigate = useNavigate()

  const [phase, setPhase] = useState(1)

  function hanldeSendFB() {
    // navigate('/menu')
    // sendMsg("we've recieved your feedback, thank you very much!", 'light')
    localStorage.setItem('Cart', '[]')
    setPhase(2)
  }

  const cartItems = JSON.parse(localStorage.getItem('Cart'))

  console.log(cartItems)

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }, [])

  return (
    <Row className='justify-content-center'>
      <Col md={8} sm={10} xs={12}>
        <Card>
          <Card.Header>
            <Card.Title>
              Feedback
            </Card.Title>
          </Card.Header>
          {phase === 1 && (
            <><Card.Body>
              <Scrollbars
                style={{ height: "40vh" }}>
                <ListGroup variant='flush'>
                  {cartItems.map((item) => (
                    <FeedbackItem item={item} />
                  ))}
                </ListGroup>

              </Scrollbars>
            </Card.Body>
              <Card.Footer className='d-flex flex-row-reverse'>
                <Button onClick={() => hanldeSendFB()} variant='dark'>
                  Send feedback
                </Button>
              </Card.Footer></>)}
          {phase === 2 && (
            <>
              <Card.Body>
                <Col className='justify-content-center'>
                  <h2 className='p-2'>Thanks for your feedback</h2>
                  <Link to='/menu' style={{textDecoration:"none"}}><h3 className='p-2'>Go to menu</h3></Link>
                </Col>
              </Card.Body>


            </>
          )}
        </Card>
      </Col>
    </Row>
  )
}


export default FeedbackScreen