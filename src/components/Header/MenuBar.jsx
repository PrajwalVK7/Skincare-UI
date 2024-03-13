import React from 'react';
import Nav from 'react-bootstrap/Nav';
import home from '../../assets/Header/home.png';
import About from '../../assets/Header/information.png';
import Call from '../../assets/Header/phone.png';
import rating from '../../assets/Header/rating.png';
import face from '../../assets/Header/face-cream.png';
import './Header.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
function MenuBar() {
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {props}
        </Tooltip>
    );
    return (
        <div className=' container menu' style={{ paddingTop: '100px', width: 'max-content', position: 'fixed', left: '0', zIndex: '1000' }}>
            <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link>
                    <Link to="/">
                        <div className='nav-item'>
                            <OverlayTrigger
                                placement="right"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip("home")}
                            >
                                <img src={home} alt="" className='me-2 menu-img' />
                            </OverlayTrigger>
                        </div>
                    </Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to="/about">
                        <div className='nav-item'>
                            <OverlayTrigger
                                placement="right"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip("About Us")}
                            >
                            <img src={About} alt="" className='me-2 menu-img' />

                            </OverlayTrigger>
                        </div>
                    </Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to='products'>
                        <div className='nav-item'>
                            <OverlayTrigger
                                placement="right"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip("Products")}
                            >
                            <img src={face} alt="" className='me-2 menu-img' />

                            </OverlayTrigger>
                        </div>
                    </Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to='contact'>
                        <div className='nav-item'>
                            <OverlayTrigger
                                placement="right"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip("Contact Us")}
                            >
                            <img src={Call} alt="" className='me-2 menu-img' />

                            </OverlayTrigger>
                        </div>
                    </Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to="testimonial">
                        <div className='nav-item'>
                            <h3 className='menu-text'>  </h3>
                            <OverlayTrigger
                                placement="right"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip("Testimonials")}
                            >
                            <img src={rating} alt="" className='me-2 menu-img' />
                            </OverlayTrigger>
                        </div>
                    </Link>
                </Nav.Link>
            </Nav>
        </div>
    );
}

export default MenuBar;
