import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import UserType from '../types/auth';
import { login, getMe } from '../lib/apiWrapper';
import CategoryType from '../types/category';

type LoginProps = {
    logUserIn: (user:UserType) => void
    flashMessage: (message:string, category: CategoryType) => void
}

export default function Login({ logUserIn, flashMessage }: LoginProps) {
    const navigate = useNavigate();

    const [user, setUser] = useState<UserType>({id: 1, username: '', password: ''})

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>): void => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        const response = await login(user.username, user.password!)
        if (response.error){
            flashMessage(response.error, 'danger')
        } else {
            localStorage.setItem('token', response.data?.token as string)
            localStorage.setItem('tokenExp', response.data?.token_expiration as string)
            // Get the User from their token
            const token = localStorage.getItem('token')
            const userResponse = await getMe(token as string);
            if (userResponse.error){
                flashMessage(userResponse.error, 'danger')
            } else {
                // Log in the new user
                logUserIn(userResponse.data!)
                navigate('/');
            }
        }
    }

    return (
        <>
            <h1 className='text-center'>Log In</h1>
            <Card className='mt-3'>
                <Card.Body>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Label>Username</Form.Label>
                        <Form.Control name='username' value={user.username} onChange={handleInputChange} />
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' name='password' value={user.password} onChange={handleInputChange} />
                        <Button variant='outline-primary' type='submit' className='w-100 mt-3'>Log In</Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}