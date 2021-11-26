import { React, useState, useEffect } from "react";
import { Button, Modal, Col, Row, Container, Form } from "react-bootstrap";
import CarouselBar from "./Carousel";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import ToastMsg from "./ToastMsg";
import dishes from "../dish";
import MenuTabs from "./Tabs";
import Scrollbars from "react-custom-scrollbars";


function Menu({ sendMsg, cataId = '' }) {
  
  let products = dishes.slice()
  if (cataId !== '') products = dishes.filter(e => e.category === cataId)

  const [lgShow, setLgShow] = useState(false);

  const temp = dishes[0]

  const [itemToShow, setItem] = useState(temp);

  if (localStorage.getItem('Cart') === null) {
    localStorage.setItem('Cart', '[]')
  }

  function addToCartHandler(curProd) {
    const data = JSON.parse(localStorage.getItem('Cart'));
    if (data.length === 0) {
      data.push(curProd)
    }
    else {
      let check = false
      for (let i = 0; i < data.length; i++) {
        if (data[i]._id === curProd._id) {
          data[i].qty += curProd.qty
          check = true
        }
      }
      if (check === false) {
        data.push(curProd)
      }
    }
    localStorage.setItem('Cart', JSON.stringify(data))
    sendMsg("Successfully added to cart!",'success')
  }
  return (
    <>
      {/* <Scrollbars
        autoHeight
        autoHeightMin={500}
        //renderTrackHorizontal={props => <div {...props} className="track-horizontal" />}
        // renderTrackVertical={props => <div {...props} className="track-vertical" />}
        renderThumbHorizontal={props => <div {...props} className="thumb-horizontal" />}
        // renderThumbVertical={props => <div {...props} className="thumb-vertical" />}
        renderView={props => <div {...props} className="view" />}
      > */}
        <Row>

          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <ProductCard product={product} setItem={setItem} setLgShow={setLgShow} addToCartHandler={addToCartHandler} />
            </Col>
          ))}
          <ProductModal lgShow={lgShow} setLgShow={setLgShow} product={itemToShow} sendMsg={sendMsg} />
        </Row>
      {/* </Scrollbars> */}
    </>
  )
}

function MenuScreen({ sendMsg }) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }, [])
  return (
    <>
      <Row>
        <Col>
          <CarouselBar />
        </Col>
      </Row>
      <Row>
        <Col>
          <MenuTabs sendMsg={sendMsg} />
        </Col>
      </Row>
    </>
  )
}
export { Menu }
export default MenuScreen;

