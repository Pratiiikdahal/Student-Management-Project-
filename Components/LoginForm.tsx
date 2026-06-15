import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import type { loginType } from '../types/StudentTypes'
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from '../Schema/StudentSchema'
import {useNavigate} from 'react-router-dom'



const LoginForm = () => {
    const navigate=useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm<loginType>({ resolver: zodResolver(loginSchema), mode: 'onChange' })

    const form_submit = (data:loginType) => {
        console.log("Form has been submitted !",data)
        navigate('/')
    }
    return (
        <>
            <Container>
                <form onSubmit={handleSubmit(form_submit)}>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" {...register("email")} />
                        {errors.email&&<p style={{color:'red'}}>{errors.email.message}</p>}
                    </Form.Group>


                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"{...register("password")} />
                    </Form.Group>
                        {errors.password && <p style={{color:'red'}}>{errors.password.message}</p>}
                    <Button type="submit">Login</Button>
                </form>
            </Container>
        </>
    )
}

export default LoginForm
