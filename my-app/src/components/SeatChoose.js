import React, { useState } from "react";
import { Container, Row, Table, ToggleButton, Button, InputGroup, FormControl, Col } from "react-bootstrap";

function SeatChoose({ chosenSeat, setChosenSeat }) {
  const handleClick = (index) => {
    setChosenSeat(index)
    setDisplay(false)
  }


  const [display, setDisplay] = useState(false)

  const toggleDisplay = () => {
    setDisplay(!display)
  }  
  return (
    <>
      <InputGroup>
        <FormControl
          value={chosenSeat}
          readOnly
        >

        </FormControl>
        <Button
          variant='info'
          onClick={() => toggleDisplay()}
        >
          Change table
        </Button>
      </InputGroup>
      {display && (
        <Row className="mt-3">
          {Array.from({ length: 24 }).map((_, y) => (
            <Col xs={2} sm={2} md={1} className="d-grid gap-0" key={y}>
              <Button className='btn-block mt-2' style={{paddingLeft: "0",paddingRight: "0"}} onClick={() => handleClick(y+1)}>
                {y+1}
              </Button>
            </Col>
          ))}
        </Row>)}
    </>
  )
}

export default SeatChoose;