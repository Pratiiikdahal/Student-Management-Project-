import { Container, Button, Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {useForm} from 'react-hook-form';

type formTitle = {
    title_edit?: boolean
}

type FormTypes={
    student_name:string,
    student_age:number,
    course_enrolled:string,
    student_email:string,
    student_address:string,
    student_phone:number,
}

function Forms({ title_edit = false }: formTitle) {
    const{register,handleSubmit,formState:{errors}} = useForm<FormTypes>();

    const submit_action= (data:FormTypes) =>(console.log(data))
    return (
        <div>
            <Container className="mt-4">
                <section className='students-info-form'>
                    <h1 className="mb-4">{title_edit ? 'Edit Student' : 'Add New Student'}</h1>
                    <Form method='post' onSubmit={handleSubmit(submit_action)}>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Student Name</Form.Label>
                                    <Form.Control placeholder="Enter Student Name" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Student Age</Form.Label>
                                    <Form.Control placeholder="Enter Age" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Course Enrolled</Form.Label>
                                    <Form.Control placeholder="Enter Course" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Student Email</Form.Label>
                                    <Form.Control placeholder="Enter Email" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Student Address</Form.Label>
                                    <Form.Control placeholder="Enter Address" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Student Phone</Form.Label>
                                    <Form.Control placeholder="Enter Phone Number" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Check
                                type="checkbox"
                                label="All the information that i entered are correct here."
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            {title_edit ? 'Edit Student Info' : 'Add New Student'}
                        </Button>
                    </Form>
                </section>
            </Container>
        </div>
    )
}

export default Forms
