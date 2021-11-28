import { React, useState } from "react";

import { Button, ButtonGroup, FormControl, InputGroup, ToggleButton} from "react-bootstrap";

function NumberSpinner({item, onCart=false, setTotal, setNumberModal}) {

  const [number, setNumber] = useState(item? item.qty:1)

  const cartHandler = (x) => {
    const data = JSON.parse(localStorage.getItem('Cart'));
    for (let i = 0; i < data.length; i++) {
      if (data[i]._id === item._id) {
        data[i].qty += x
      }
    }
    localStorage.setItem('Cart', JSON.stringify(data))
    setTotal()
  }

  const handleIncrease = () => {
    setNumber(number + 1)
    if (onCart) {
      cartHandler(1)
    }
    else {
      setNumberModal(number+1)
    }
  }
  const handleDecrease = () => {
    if (number>1)
    { setNumber(number - 1)
      if (onCart) {cartHandler(-1)}
      else {
        setNumberModal(number-1)
      }
    }
  } 

  console.log("number", number)
  return (
    <ButtonGroup style = {{padding: "0"}}>
      <Button 
        id="toggle-check"
        type="checkbox"
        variant="outline-dark"
        onClick={handleDecrease}>
        <i class="fa fa-minus" aria-hidden="true"></i>
      </Button>  
      <FormControl 
        value={number}
        type = "number"
        className='text-center'
        readOnly
        style = {{borderRadius:"0",padding: "0", textAlign:"center", border: "1px solid #343a40"}}>
      </FormControl>
      <Button         
        id="toggle-check"
        type="checkbox"
        variant="outline-dark"
        onClick={handleIncrease}>
        <i class="fa fa-plus" aria-hidden="true"></i>
      </Button>
    </ButtonGroup>
  )

}

export default NumberSpinner;  