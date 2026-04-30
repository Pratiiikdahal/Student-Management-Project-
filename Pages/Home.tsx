import { Col, Container, Row } from 'react-bootstrap'
import useuserStore from '../State/store'
function Home() {
    const students=useuserStore((state)=>state.users)
    return (
        <>
        <section className="head pt-5">
            <Container>
                <Row>
                    <Col lg={8} md={6} sm={5}>
                        <h2>Dashboard</h2>
                    </Col>
                    <Col lg={4} md={6} sm={5} className='d-flex justify-content-end'>
                    <button className='add-btn bg-blue'>
                         + Add Students
                    </button>
                    </Col>
                </Row>
            </Container>
        </section>
            <section className='main-students'>
                <Container>
                    <div className="card-container">
                        <Row className='justify-content-center'>
                            {students.length===0?
                            (<p className='text-center'>No users Found.</p>):
                            (students.map((student)=>(
                            <Col lg={4} md={5} sm={12} className='g-2'>
                                <div className="std-card d-flex flex-column gap-2 ">
                                    <div className="image-container">
                                    </div>
                                    <div className="student-info flex flex-column">
                                        <h5><strong>{student.name}</strong></h5>
                                        <p><b>Contact Number:</b>{student.phone}</p>
                                        <p><b>Address:</b>{student.address}</p>
                                        <p><b>Course:</b>{student.course}</p>
                                    </div>
                                    <div className="crud-btns">
                                        <button className='edit-btn bg-yellow'>Edit Info</button>
                                        <button className='delete-btn bg-red'>Delete Info</button>
                                    </div>
                                </div>
                            </Col>)))}
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Home
