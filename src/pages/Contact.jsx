import Lottie from 'lottie-react';
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import animation from './Animation - 1710323348423.json'
function Contact() {
    return (
        <>
            <div className='container mt-5 mb-5' style={{marginTop:'120px'}}>
                <div className='d-flex justify-content-evenly' style={{marginTop:'120px'}}>
                    <i class="fa-solid fa-phone"></i>
                    <i class="fa-solid fa-envelope"></i>
                    <i class="fa-brands fa-google"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-facebook"></i>
                </div>
                <Row className='mt-5 mb-5'>
                    <Col>
                        <h2>Contact Us </h2>
                        <h4 className='mt-4'>
                            We'd love to hear from you. Our team is here to help. Drop your question in the contact form below and we'll do our best to get back to you within 48 hours. Enter your details and message below and we'll get in touch as soon as possible.</h4>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter Your password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Message</Form.Label>

                                <textarea className='form-control' name="" id="" cols="20" rows="10"></textarea>
                            </Form.Group>
                            <button className='btn btn-primary'>Submit</button>
                        </Form>
                    </Col>
                    <Col lg={6} className='d-flex justify-content-center align-item-center'>
                        <Lottie className="mb-5 mt-2"  animationData={animation} />
                    
                    </Col>
                </Row>

            </div>
        </>
    )
}

export default Contact