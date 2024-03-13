import React from 'react'
import "./About.css"
import { Col, Row } from 'react-bootstrap'
function About() {
    return (
        <div className='mt-5 mb-5'>
            <div id="about-top">
                <div className='container d-flex align-items-center h-100'>
                    <h2 id='abt-ext'>Skincare that celebrates your skin chemistry.
                    </h2>
                </div>
            </div>
            
            <section>
                <div className='container mt-5 mb-5'>
                    <Row>
                        <Col lg={6}>
                            <img className='img-fluid' src="https://www.plenaire.co/cdn/shop/files/about1.png?crop=center&height=1400&v=1683838684&width=1400" alt="" />
                        </Col>
                        <Col lg={6}>
                            <div className='d-flex justify-content-center align-items-center h-100'>
                                <div>
                                    <h2 className='text-center'>Stay true to yourself.</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam reprehenderit excepturi soluta. Perspiciatis nobis magni ullam voluptates soluta, laudantium itaque laborum aliquam esse necessitatibus. Pariatur, eaque provident. Fugit, corporis cumque.
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, odio?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae harum et eligendi dignissimos nihil, assumenda sequi rem numquam? Dolore, recusandae?
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6}>
                            <div className='d-flex justify-content-center align-items-center h-100'>
                                <div>
                                    <h2 className='text-center'>Truth in transparency.</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam reprehenderit excepturi soluta. Perspiciatis nobis magni ullam voluptates soluta, laudantium itaque laborum aliquam esse necessitatibus. Pariatur, eaque provident. Fugit, corporis cumque.
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, odio?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae harum et eligendi dignissimos nihil, assumenda sequi rem numquam? Dolore, recusandae?
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <img className='img-fluid' src="https://www.plenaire.co/cdn/shop/files/about1.png?crop=center&height=1400&v=1683838684&width=1400" alt="" />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6}>
                            <img className='img-fluid' src="https://www.plenaire.co/cdn/shop/files/about1.png?crop=center&height=1400&v=1683838684&width=1400" alt="" />
                        </Col>
                        <Col lg={6}>
                            <div className='d-flex justify-content-center align-items-center h-100'>
                                <div>
                                    <h2 className='text-center'>Stay true to yourself.</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam reprehenderit excepturi soluta. Perspiciatis nobis magni ullam voluptates soluta, laudantium itaque laborum aliquam esse necessitatibus. Pariatur, eaque provident. Fugit, corporis cumque.
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, odio?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae harum et eligendi dignissimos nihil, assumenda sequi rem numquam? Dolore, recusandae?
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>

        </div>
    )
}

export default About