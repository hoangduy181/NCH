import React, { useState, useEffect } from "react";
import { Card, Row, Col, Button, Form, Container, ToggleButton, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import SeatChoose from "./SeatChoose";
import { getProductById } from "./CartScreen"
import { useNavigate } from 'react-router-dom'
function CheckOutScreen({ }) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }, [])
  let navigate = useNavigate();
  const cartItems = JSON.parse(localStorage.getItem('Cart'))
  const total = cartItems.reduce((acc, item) => acc + item.qty * getProductById({ item }).price, 0)

  let [takeAway, setTA] = useState(true);
  const toggleTakeAway = () => { setTA(!takeAway) }

  let [chosenSeat, setChosenSeat] = useState(1)

  let saleOff = 0.01 * total
  let addFee = 0.02 * total
  let finallyTotal = total - saleOff + addFee

  const handleSubmit = () => {
    let msg = "thanh toán"
    alert(`thanh toán ${finallyTotal < 1000 ? finallyTotal.toFixed(0)+'.000' : (finallyTotal/1000).toFixed(3)+'.000' } VND!!!!!!`)
    navigate("/thankyou")
  }
  return (
    <Col>
      <Row>
        <Col xs={2} sm={2} md={2}>
          <Link to='/cart' className='nav-link'>
            <Button variant='dark'>
              Go Back
            </Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={9} className="mx-auto">
          <Card>
            <Card.Header>
              <h2>CHECK OUT</h2>
            </Card.Header>
            <Card.Body>
              <Card.Title>
                Chọn bàn
              </Card.Title>
              <Row >
                <ButtonGroup >
                  <ToggleButton
                    checked={!takeAway}
                    onClick={() => toggleTakeAway()}
                    type="checkbox"
                    variant='secondary'
                  >
                    Ăn tại chỗ
                  </ToggleButton>
                  <ToggleButton
                    checked={takeAway}
                    onClick={() => toggleTakeAway()}
                    type="checkbox"
                    variant='secondary'
                  >
                    Mang về
                  </ToggleButton>
                </ButtonGroup>
              </Row>
              {!takeAway ? (
                <>
                  <Card.Subtitle className="mt-3">Bàn hiện tại của quý khách</Card.Subtitle>
                  <SeatChoose chosenSeat={chosenSeat} setChosenSeat={setChosenSeat} />
                  {/* {console.log(chosenSeat)} */}
                </>
              ) : (<Card.Subtitle className="mt-3">
                Quý khách hàng chọn mang về
              </Card.Subtitle>)}
              <br />
              <Card.Title>
                Chọn phương thức thanh toán
              </Card.Title>
              <Card.Subtitle>

                <Form.Select aria-label="Default select example">
                  <option value="1">Thanh toán bằng tiền mặt</option>
                  <option value="2">Thanh toán bằng thẻ tín dụng</option>
                  <option value="3">Thanh toán qua ví điện tử</option>
                  <option value="4">Thanh toán qua tài khoản ngân hàng</option>
                </Form.Select>
              </Card.Subtitle>
              <br />

              <Card.Title>
                Tổng tiền
              </Card.Title>
              <Row>
                <Col xs={11} sm={10} md={8} style={{ marginLeft: "auto" }}>
                  <Row>
                    <Col xs={8} sm={7} md={8}>
                      <Card.Subtitle>
                        Tổng giá trị đơn
                      </Card.Subtitle>
                    </Col>
                    <Col xs={4} sm={5} md={4}>
                      <Card.Subtitle>
                      {total < 1000 ? total.toFixed(0)+'.000' : (total/1000).toFixed(3)+'.000' } VND
                      </Card.Subtitle>
                    </Col>
                  </Row>
                </Col>
                <br />
                <Col xs={11} sm={10} md={8} style={{ marginLeft: "auto" }}>
                  <Row>
                    <Col xs={8} sm={7} md={8}>
                      <Card.Subtitle>
                        Giảm giá
                      </Card.Subtitle>
                    </Col>
                    <Col xs={4} sm={5} md={4}>
                      <Card.Subtitle>
                        {saleOff.toFixed(3)} VND
                      </Card.Subtitle>
                    </Col>
                  </Row>
                </Col>
                <br />
                <Col xs={11} sm={10} md={8} style={{ marginLeft: "auto" }}>
                  <Row>
                    <Col xs={8} sm={7} md={8}>
                      <Card.Subtitle>
                        Phí phụ thu
                      </Card.Subtitle>
                    </Col>
                    <Col xs={4} sm={5} md={4}>
                      <Card.Subtitle>
                        {addFee.toFixed(3)} VND
                      </Card.Subtitle>
                    </Col>
                  </Row>
                </Col>
                <Col xs={11} sm={10} md={8} style={{ marginLeft: "auto" }}>
                  <hr />
                  <Row>
                    <Col xs={8} sm={7} md={8}>
                      <Card.Subtitle>
                        Tổng tiền
                      </Card.Subtitle>
                    </Col>
                    <Col xs={4} sm={5} md={4}>
                      <Card.Subtitle>
                      {finallyTotal < 1000 ? finallyTotal.toFixed(0)+'.000' : (finallyTotal/1000).toFixed(3)+'.000' } VND
                      </Card.Subtitle>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer className="text-center">
              <Button type="submit" onClick={() => handleSubmit()}>
                Check out
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Col>
  )
}

export default CheckOutScreen;