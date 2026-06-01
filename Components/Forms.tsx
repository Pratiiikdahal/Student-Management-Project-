import { Container, Button, Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import type { formTitle } from '../types/StudentTypes';
import type { formTypes } from '../types/StudentTypes';
import { zodResolver } from "@hookform/resolvers/zod";
import { student_schema } from '../Schema/StudentSchema';
import { useNavigate } from 'react-router-dom';

function Forms({ title_edit = false }: formTitle) {
    let navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<formTypes>({
        resolver: zodResolver(student_schema), mode: 'onChange'
    });

    const submit_action = (data: formTypes) => (console.log(data))
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
                                    <Form.Control placeholder="Enter Student Name" {...register('student_name')} />
                                    {errors.student_name && <p style={{ color: 'red' }}>{errors.student_name.message}</p>}
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Student Age</Form.Label>
                                    <Form.Control placeholder="Enter Age" {...register('student_age', { valueAsNumber: true })} />
                                    {errors.student_age && <p style={{ color: 'red' }}>{errors.student_age.message}</p>}
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Course Enrolled</Form.Label>
                                    <Form.Control placeholder="Enter Course" {...register('course_enrolled')} />
                                    {errors.course_enrolled && <p style={{ color: 'red' }}>{errors.course_enrolled.message}</p>}
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Student Email</Form.Label>
                                    <Form.Control placeholder="Enter Email" {...register('student_email')} />
                                    {errors.student_email && <p style={{ color: 'red' }}>{errors.student_email.message}</p>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Student Address</Form.Label>
                                    <Form.Control placeholder="Enter Address" {...register('student_address')} />
                                    {errors.student_address && <p style={{ color: 'red' }}>{errors.student_address.message}</p>}
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Student Phone</Form.Label>
                                    <Form.Control placeholder="Enter Phone Number"  {...register('student_phone')} />
                                    {errors.student_phone && <p style={{ color: 'red' }}>{errors.student_phone.message}</p>}

                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Check
                                type="checkbox"
                                label="All the information that i entered are correct here."
                            />
                        </Form.Group>
                            <div className='form-btn-group'>
                                <Button variant="primary" type="submit">
                                    {title_edit ? 'Edit Student Info' : 'Add New Student'}
                                </Button>
                                <Button variant="primary" onClick={() => navigate('/')}>
                                    Return to Home
                                </Button>
                            </div>
                    </Form>
                </section>
            </Container>
        </div>
    )
}

export default Forms
