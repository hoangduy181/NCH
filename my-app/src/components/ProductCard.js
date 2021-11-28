import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom"
function ProductCard({ product, setItem, setLgShow, addToCartHandler }) {
  const handleClick = () => {
    setItem(product);
    setLgShow(true);
  }



  const cartItem = {
    _id: product._id,
    qty: 1
  }

  return (
    <Card className="my-3 p-1 pt-2 rounded" >

      <Card.Img src={product.image} variant='top' onClick={handleClick} style={{ width: "100%", height: "25vh", objectFit: "cover" }} />

      <Card.Body onClick={handleClick}>
        <Card.Title as='div'>
          <strong>{product.name}</strong>
        </Card.Title>
        <Card.Text as='h3'>
          {product.price.toFixed(3)} VND
        </Card.Text>
      </Card.Body>
      <Card.Footer style={{ textAlign: "end", backgroundColor: "#FFFFFF", padding: ".25rem 1rem" }}>
        <Button onClick={() => addToCartHandler(cartItem)} disabled={(product.countInStock === 0)}>
          <i class="fas fa-shopping-cart"></i> Add to cart
        </Button>
      </Card.Footer>

    </Card>
  )
}

export default ProductCard;