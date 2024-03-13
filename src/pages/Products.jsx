import React from 'react';
import Product from '../components/product/Product';
import { Col, Row } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';

function Products() {

    const products = [{
        img: 'https://www.plenaire.co/cdn/shop/products/LukeWeller-Plenaire_Ecom_Rose_Jelly_100ml.jpg?v=1694391217&width=1920'
    },
    {
        img: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        img: 'https://images.pexels.com/photos/4041391/pexels-photo-4041391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        img: 'https://www.plenaire.co/cdn/shop/products/LukeWeller-Plenaire_Ecom_Rose_Jelly_100ml.jpg?v=1694391217&width=1920'
    },
    {
        img: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        img: 'https://images.pexels.com/photos/4041391/pexels-photo-4041391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
]
    return (
        <>
            <div style={{marginTop:'50px'}}>
                <div
                    className="d-flex justify-content-center align-items-center"
                    style={{
                        backgroundImage: `url('https://www.smartlaboratories.co.in/wp-content/uploads/2020/04/Skincare_banner-1024x267.jpg')`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        height: '20rem',
                        padding: '0 1rem',
                        width:'100%'
                    }}
                >
                    <div>
                        <input type="text" placeholder="Search Products" className="form-control" />
                    </div>
                    <div className="d-flex">
                        <select className="form-select me-2 ms-2" aria-label="Sort By">
                            <option value="" disabled selected>
                                Sort By
                            </option>
                        </select>
                        <select className="form-select" aria-label="Filter By">
                            <option value="" disabled selected>
                                Filter By
                            </option>
                        </select>
                    </div>
                </div>
                <div className='container-fluid mt-5 mb-5 '>
                    <Row >
                        {
                            products?.length > 0 ?
                                products.map((item) => (
                                   <Col className='mt-4 mb-4'   lg={3} md={3} sm={6} xs={6}>
                                    <Zoom>
                                    <Product  data={products}/>
                                    </Zoom>
                                    </Col>
                                )) : <p>....</p>
                        }
                    </Row>
                </div>
            </div>
        </>
    );
}

export default Products;
