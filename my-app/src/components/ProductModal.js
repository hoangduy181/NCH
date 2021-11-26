import { React, useState } from "react";
import products from "../products";
import { Button, Modal, Col, Row, Container, Form } from "react-bootstrap";
import NumberSpinner from "./NumberSpinner";

function ProductModal({lgShow, product, setLgShow, sendMsg}) {
  const [number, setNumber] = useState(1)
  const tempItem = {
    _id: product._id,
    qty: 1
  }
  const addTCH = (number) => {
    setLgShow(false)
    const data = JSON.parse(localStorage.getItem('Cart'));
    if (data.length === 0) {
      data.push({
        _id: product._id,
        qty: number
      })
    }
    else {
      let check = false
      for (let i = 0; i < data.length; i++) {
        if (data[i]._id === product._id) {
          data[i].qty += number
          check = true
        }
      }
      if (check === false) {
        data.push({
          _id: product._id,
          qty: number
        })
      }
    }
    localStorage.setItem('Cart', JSON.stringify(data))
    sendMsg("succesfully added to cart!")
    setNumber(1)
  }

  


  return (
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {product.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col xs={12} md={6} style={{padding: "0"}}>
                <img
                  src={product.image}
                  className="img-fluid"
                  alt="Responsive image"
                />
              </Col>
              <Col className='d-none d-md-block' md={6}>
                <p className="text-justify">product.description</p>
              </Col>
            </Row>
            <br />
            <Row>
              <Col xs={6} sm={4} md={4}>
                <Row>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Select>
                </Row>
                <br/>
  
                <Row>
                  <NumberSpinner item={tempItem} setNumberModal={setNumber}/>
                </Row>
              </Col>
              <Col xs={6} sm={8} md={8} style={{paddingRight: "0"}}>
                <Form.Control
                  as="textarea"
                  placeholder="Additional note"
                  style={{ height: '100px'}}
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Col className = 'text-center'>
                <Button onClick={() => addTCH(number)} disabled={(product.countInStock === 0)}>
                  Add to cart
                </Button>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
  );
}

export default ProductModal