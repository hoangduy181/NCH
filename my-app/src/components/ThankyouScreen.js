import React, { useEffect } from "react";
import { Row, Col } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
function ThankyouScreen({ isCheckedOut = true }) {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [])
    let navigate = useNavigate()
    if (isCheckedOut === false) {
        navigate('/home')
    } 

    return (
        <Row>
            <Col>
                <h1 className='text-center'>Thank you for choosing us</h1>
                <hr />
                <Row>
                    <Col sm={12} md={6} className='d-flex flex-row'>
                        <Link to='/menu' className='nav-link' onClick={() => { localStorage.setItem('Cart', '[]') }}>
                    <h2>
                            <i class="fas fa-arrow-left"></i> go to menu
                            </h2>
                            </Link>
                    </Col>
                    <Col sm={12} md={6} className='d-flex flex-row-reverse'>
                        <Link to='/feedback' className='nav-link'>
                            <h2>
                                send feedback <i class="fas fa-arrow-right"></i>
                                </h2>
                            </Link>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default ThankyouScreen