import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from "./components/Navigation";
import AlertMessage from './components/AlertMessage';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import Container from 'react-bootstrap/Container'
import UserType from './types/auth';
import CategoryType from './types/category';
import { getMe } from './lib/apiWrapper';


export default function App() {

    // let isLoggedIn: boolean = false;
    const [isLoggedIn, setLoggedIn] = useState((localStorage.getItem('token') && new Date(localStorage.getItem('tokenExp') as string) > new Date()) || false)
    const [loggedInUser, setLoggedInUser] = useState<UserType|null>(null)
    const [message, setMessage] = useState<string|null>(null);
    const [category, setCategory] = useState<CategoryType>(null);

    useEffect(() => {
        const getLoggedInUser = async() => {
            const token = localStorage.getItem('token')
            const response = await getMe(token!)
            setLoggedInUser(response.data!)
        }
        if (isLoggedIn){
            getLoggedInUser()
        }
    }, [])

    const logUserIn = (user:UserType): void => {
        setLoggedIn(true);
        setLoggedInUser(user);
        flashMessage('You have successfully logged in', 'success')
    }

    const logUserOut = (): void => {
        setLoggedIn(false);
        setLoggedInUser(null);
        localStorage.removeItem('token');
        localStorage.removeItem('tokenExp');
        flashMessage('You have been logged out', 'info')
    }

    const flashMessage = (message:string|null, category:CategoryType): void => {
        setMessage(message);
        setCategory(category);
    }

    return (
        <div>
            <Navigation isLoggedIn={isLoggedIn} logUserOut={logUserOut}/>
            <Container>
                {message && <AlertMessage message={message} category={category} flashMessage={flashMessage}/>}
                <Routes>
                    <Route path='/' element={<Home user={loggedInUser} flashMessage={flashMessage}/>} />
                    <Route path='/login' element={<Login logUserIn={logUserIn} flashMessage={flashMessage} />} />
                    <Route path='/register' element={<Register flashMessage={flashMessage} logUserIn={logUserIn} />}/>
                </Routes>
                
            </Container>
        </div>
    )
}