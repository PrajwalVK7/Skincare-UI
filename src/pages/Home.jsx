import React from 'react';
import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
import sample1 from '../assets/Home/sample-1.avif';
import sample2 from '../assets/Home/sample-2.avif';
import sample3 from '../assets/Home/sample-3.avif';
import { Col, Row } from 'react-bootstrap';
import Category from '../components/Category/Category'
import Zoom from 'react-reveal/Zoom';
import { Bounce } from 'react-reveal';

function Home() {
  return (
    <>
      <section id='home-container' className='mb-5 mt-5' >
        <Row style={{ height: '95vh' }}>
          <Col lg={6}>
            <div className='d-flex mt-5 justify-content-center align-items-center w-100 h-100'>
              <div className='intro-home'>
                <div className='d-flex justify-content-center align-items-center home-col ms-5'>
                  <Bounce>
                  <div>
                    <h2 id='home-heading1' style={{fontSize:'4rem'}}>Transform Your Skin, <br />
                      Transform Your Story</h2>
                    <p className=''>Lorem, ipsum dolor sit amet consectetur <br />
                      adipisicing elit. Praesentium, accusantium.</p>
                    <div className=''>
                      <button className='btn btn-light'> Explore Products</button>
                      <button className='btn btn-primary ms-4'> Know More</button>
                    </div>
                  </div>
                  </Bounce>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={6}>
            {/* Content for the right column */}
          </Col>
        </Row>
      </section>

      <section className='mt-5 mb-5'>
        <Carousel fade className='mt-5 mb-5'>
          <Carousel.Item>
            <img className='carousel-img' src={sample1} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img className='carousel-img' src={sample2} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img className='carousel-img' src={sample3} alt="" />
          </Carousel.Item>
        </Carousel>
      </section>
      <section className='mt-5 mb-5'>
        <div className='container mt-5 mb-5 p-5'>
          <Row>
            <Col lg={3} md={3} sm={6} xs={6}>
              <Zoom>
              <div className=' p-4 d-flex justify-content-center align-items-center flex-column'>
                <span><i class="icon fa-solid fa-leaf"></i></span>
                <h4>Lorem </h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, asperiores.</p>
              </div>
              </Zoom>
            </Col>
            <Col lg={3} md={3} sm={6} xs={6}>
              <Zoom>
              <div className='d-flex p-4  justify-content-center align-items-center flex-column'>
                <span><i class=" icon fa-solid fa-ban"></i></span>
                <h4>Lorem </h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, asperiores.</p>
              </div>
              </Zoom>
            </Col>
            <Col lg={3} md={3} sm={6} xs={6}>
              <Zoom>
              <div className='d-flex p-4  justify-content-center align-items-center flex-column'>
                <span><i class="icon fa-solid fa-shield"></i></span>
                <h4>Lorem </h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, asperiores.</p>
              </div>
              </Zoom>
            </Col>
            <Col lg={3} md={3} sm={6} xs={6}>
              <Zoom>
              <div className='d-flex p-4  justify-content-center align-items-center flex-column'>
                <span><i class=" icon fa-brands fa-slack"></i></span>
                <h4 >Lorem </h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, asperiores.</p>
              </div>
              </Zoom>
            </Col>
          </Row>
        </div>
      </section>
      <section>
        <div>
          <h2 className='text-center'>Explore , Shop___</h2>
          <div className='container'>
            <Zoom>
            <Category />
            </Zoom>
          </div>
        </div>
      </section>
      <section className='mt-5 mb-5'>
        <div className='container'>
          <Row>
            <Col lg={6} md={6}>
              <Zoom>
              <img className='img-fluid' src="https://www.plenaire.co/cdn/shop/files/Picture9_333834c8-588f-45d7-aac3-76314cecd651.png?crop=bottom&height=950&v=1694390102&width=950" alt="" />
              </Zoom>
            </Col>
            <Col lg={6} md={6}>
              <div className='d-flex justify-content-center align-items-center h-100 flex-column'>
              <h2 className='text-center'>Lorem Lorem, ipsum dolor.</h2>
                <hr />
              <div >
                <h6 className='text-center'>lorem</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, odio, repellendus, omnis dolore labore saepe eaque reprehenderit natus ducimus atque a sit. Vero repellendus voluptates repudiandae est a sequi perspiciatis ad error incidunt harum architecto odit ipsam fugiat, aspernatur exercitationem temporibus pariatur suscipit. Dignissimos non sed eligendi aperiam voluptate assumenda?</p>
              </div>
              </div>
            </Col>
          </Row>
        </div>

      </section>
    </>
  );
}

export default Home;
