import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import UserType from '../types/auth';

type Props = {}

export default function Register({}: Props) {

    const [newUser, setNewUser] = useState<UserType>({firstName: '', lastName: '', username: '', email: '', password: ''})

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>): void => {
        setNewUser({...newUser, [e.target.name]: e.target.value})
    }

    return (
        <>
            <h1 className="text-center">Register for Kekambas Blog</h1>
            <Card className='mt-3'>
                <Card.Body>
                    <Form>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control value={newUser.firstName} name='firstName' onChange={handleInputChange} />
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control value={newUser.lastName} name='lastName' onChange={handleInputChange} />
                        <Form.Label>Username</Form.Label>
                        <Form.Control value={newUser.username} name='username' onChange={handleInputChange} />
                        <Form.Label>Email</Form.Label>
                        <Form.Control value={newUser.email} name='email' type='email' onChange={handleInputChange} />
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={newUser.password} name='password' type='password' onChange={handleInputChange} />
                        <Button variant='outline-primary' className='mt-3 w-100' type='submit'>Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}
