import { Container, Button, Col, Row, Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import type { formTitle } from '../types/StudentTypes';
import type { formTypes } from '../types/StudentTypes';
import { zodResolver } from "@hookform/resolvers/zod";
import { student_schema } from '../Schema/StudentSchema';
import { useNavigate } from 'react-router-dom';
import useUserStore from '../State/store';
import Modals from '../Components/Modals';
import { useState } from 'react';
import users from '../State/store';


function Forms({ title_edit = false }: formTitle) {
    let navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<formTypes>({
        resolver: zodResolver(student_schema), mode: 'onChange'
    });

    //accessing the functions created in the store
    const addStudents=useUserStore((state)=>(state.addStudents))
    const updateStudents=useUserStore((state)=>state.updateStudents)

    const submit_action = (data: formTypes) => {
        console.log('clicked')
        if(!title_edit){ // if the form is not the edit form 
            //add the Students Information
            console.log('submit data :',data)
            addStudents(data);
            console.log(data);
            navigate('/');
        }

        else{
            //update the Students Information
        }
    }

    return (
        <>
            <Container className="mt-4">
                <section className='students-info-form'>
                    <h1 className="mb-4">{title_edit ? 'Edit Student' : 'Add New Student'}</h1>
                    <Form onSubmit={handleSubmit(submit_action)}>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Student Name</Form.Label>
                                    <Form.Control placeholder="Enter Student Name" {...register('name')} />
                                    {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Student Age</Form.Label>
                                    <Form.Control placeholder="Enter Age" {...register('age', { valueAsNumber: true })} />
                                    {errors.age && <p style={{ color: 'red' }}>{errors.age.message}</p>}
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Course Enrolled</Form.Label>
                                    <Form.Control placeholder="Enter Course" {...register('course')} />
                                    {errors.course && <p style={{ color: 'red' }}>{errors.course.message}</p>}
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Student Email</Form.Label>
                                    <Form.Control placeholder="Enter Email" {...register('email')} />
                                    {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Student Address</Form.Label>
                                    <Form.Control placeholder="Enter Address" {...register('address')} />
                                    {errors.address && <p style={{ color: 'red' }}>{errors.address.message}</p>}
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Student Phone</Form.Label>
                                    <Form.Control placeholder="Enter Phone Number"  {...register('phone')} />
                                    {errors.phone && <p style={{ color: 'red' }}>{errors.phone.message}</p>}

                                </Form.Group>
                            </Col>
                        </Row>
                            <div className='form-btn-group'>
                                <Button variant="primary" type="submit">
                                    {title_edit ? 'Edit Student Info' : 'Add New Student'}
                                </Button>
                                <Button variant="primary" onClick={() => navigate('/home')}>
                                    Return to Home
                                </Button>
                            </div>
                    </Form>
                </section>
            </Container>
        </>
)
}

export default Forms
