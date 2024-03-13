import React from 'react'
import { Row, Col } from 'react-bootstrap'

function Footer() {
    return (
        <>
            <div className='container-fluid'style={{backgroundColor:'#80c4e4',color:'black',fontSize:'20px'}}>
                <Row>
                <Col lg={4} md={4} sm={12} xs={12}>
                        <div className='d-flex justify-content-center align-items-center'>
                            <div>
                                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column' }}>
                                    <li> <h4>Information</h4></li>
                                    <li>Handle with Plenaire</li>
                                    <li>Sustainability</li>
                                    <li>Ingredients</li>
                                </ul>




                            </div>
                        </div></Col>
                    <Col lg={4} md={4} sm={12} xs={12}>
                        <div className='d-flex justify-content-center align-items-center'>
                            <input className='form-control' type="email" placeholder='Subscribe Our News letter' />
                            <button className='btn btn-outline-ptimary'>Subscribe</button>
                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={12} xs={12}>
                        <div className='d-flex justify-content-center align-items-center flex-column'>
                            <h5>Contact Us</h5>
                            <div>
                                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column' }}>
                                    <li>lorem</li>
                                    <li>1234</li>
                                    <li>a@gmail.com</li>
                                    <li>123</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    

                </Row>
            </div>
        </>
    )
}

export default Footer