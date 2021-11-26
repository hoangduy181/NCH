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
        <Carousel.Caption >
          <h2 style={{color:"#fff"}}>First slide label</h2>
          <h3 style={{color:"#fff"}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/20-01.png"
          alt="Second slide"
        />

        <Carousel.Caption style={{textAlign: "right"}}>
          <h2 style={{color:"#fff"}}>First slide label</h2>
          <h3 style={{color:"#fff"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/21-01.png"
          alt="Third slide"

        />

        <Carousel.Caption>
          <h2>First slide label</h2>
          <h3>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}


export default CarouselBar