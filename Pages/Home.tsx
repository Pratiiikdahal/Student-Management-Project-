import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Home() {
    return (
        <>
            <section className='main-students'>
                <Container>
                    <h1>Welcome to Student Management System Dashboard.</h1>
                    <div className="card-container">
                        <Row>
                            <Col lg={4}>
                                <div className="std-card d-flex flex-column gap-1">
                                    <div className="image-container">
                                    </div>
                                    <div className="student-info">
                                        <p>Ram Bahadur</p>
                                        <p>+977 123456789 </p>
                                        <p>Kathmandu,Nepal</p>
                                    </div>
                                    <div className="crud-btns">
                                        <button className='edit-btn'>Edit Info</button>
                                        <button className='delete-btn'>Delete Info</button>
                                        <button className='address-btn'>Edit Address</button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Home
