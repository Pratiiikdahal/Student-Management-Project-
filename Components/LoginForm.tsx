import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import type { loginType } from '../types/StudentTypes'
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from '../Schema/StudentSchema'
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom';

const LoginForm = () => {
    const navigate=useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm<loginType>({ resolver: zodResolver(loginSchema), mode: 'onChange' })

    const form_submit = (data:loginType) => {
        console.log("Form has been submitted !",data)
        const user_to_validate=localStorage.getItem('userData');

        if (!user_to_validate){
            console.log('User data cannot be found !');
            return;
        }

        const user=JSON.parse(user_to_validate);
        if(user['email']===data.email && user['password']===data.password){
            console.log('Credentials Successfully matched! you have logged in here!');
            sessionStorage.setItem("loginkey","true");
            navigate('/home')
        }
        else{
            console.log('Credentials could not be matched. Please enter the valid credentials !')
        }

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
                        <Form.Control type="password" placeholder="Password" {...register('password')}/>
                    </Form.Group>
                    <Button type="submit">Login</Button>
                    <Link to='/signup'>Don't have an account? Sign up</Link>
                </form>
            </Container>
        </>
    )
}

export default LoginForm
