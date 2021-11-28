import React from "react";
import {Carousel} from "react-bootstrap"
function CarouselBar() {
  return (
    <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/15-01.png"
          alt="First slide"
        />
        <Carousel.Caption style={{textAlign: "left"}}>
          <h2 style={{color:"#fff"}}>Salad</h2>
          <h3 style={{color:"#fff"}}>tươi, ngon, đầy đủ dinh dưỡng</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/20-01.png"
          alt="Second slide"
        />

        <Carousel.Caption style={{textAlign: "right"}}>
          <h2 style={{color:"#fff"}}>Bánh ngọt</h2>
          <h3 style={{color:"#fff"}}>hài lòng ngay cả người khó tính nhất</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/21-01.png"
          alt="Third slide"

        />

        <Carousel.Caption >
          <h2 style={{color:"#fff"}}>Hải sản</h2>
          <h3 style={{color:"#fff"}}>đem đến một trải nghiệm hoàn toàn mới</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}


export default CarouselBar