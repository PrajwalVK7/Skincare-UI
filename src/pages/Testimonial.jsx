import React from 'react'
import { Row, Col } from 'react-bootstrap'

function Testimonial() {
    return (
        <div className='mt-5 shadow card mb-5 p-5' style={{ marginTop: '160px' }}>
            <Row style={{marginTop:'150px'}} >
                <Col lg={6} className="d-flex flex-column mt-5 p-5 justify-content-center align-items-center h-100">
                    <img className='img-fluid' style={{borderRadius:'50%'}} width={"100px"} height={'150px'} src="https://th.bing.com/th/id/R.da2e546841da40cdcf60061743233500?rik=IeO7Sr%2fkUW54wQ&riu=http%3a%2f%2fwww.venmond.com%2fdemo%2fvendroid%2fimg%2favatar%2fbig.jpg&ehk=JihI5nQ0BOd0W%2bZVhtIWmqwac0NMyRMOV7%2bzryywg%2fg%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt="" />
                    <h1>Neel</h1> <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, nihil?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum labore illum deserunt, obcaecati dolores nesciunt blanditiis. Aspernatur vero ipsum minus!
                </Col>
                <Col lg={6}>
                    <div className='conatiner shadow' >
                        <iframe className='rounded shadow' width="600" height="530" src="https://www.youtube.com/embed/DIFCMtzg7xg" title="Student Testimonial - Varnika Chauhan" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                    </div>            </Col>
            </Row>
        </div>
    )
}

export default Testimonial