import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import type { signupType } from '../types/StudentTypes'
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from '../Schema/StudentSchema'
import { useNavigate} from 'react-router-dom'
import Header from '../Components/Header';
import Footer from '../Components/Footer';


const Signup = () => {
        const { register, handleSubmit, formState: { errors } } = useForm<signupType>({ resolver: zodResolver(signupSchema), mode: 'onChange' })

        const navigate=useNavigate()

        const form_submit = (data:signupType) => {
            console.log("Form has been submitted !",data)
            const user_credentials=data
            const auth_token=true
            navigate('/')
            localStorage.setItem("userData",JSON.stringify({...user_credentials,auth_token}))
    }

    return (
        <>
        <Header/>
            <Container>
                <form onSubmit={handleSubmit(form_submit)}>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" {...register("email")} />
                        {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
                    </Form.Group>


                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"{...register("password")} />
                    </Form.Group>
                    {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}

                    <Form.Group className="mb-3">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder=" Confirm Password"{...register("confirm_password")} />
                    </Form.Group>
                    {errors.confirm_password && <p style={{ color: 'red' }}>{errors.confirm_password.message}</p>}
                    <Button type="submit">Signup</Button>
                </form>
            </Container>
        <Footer/>
        </>
    )
}

export default Signup
