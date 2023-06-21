import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from "./components/Navigation";
import Home from './views/Home';
import Login from './views/Login';
import Container from 'react-bootstrap/Container'


export default function App() {
    const name: string = 'Brian';

    // let isLoggedIn: boolean = false;
    const [isLoggedIn, setLoggedIn] = useState(false)


    const handleClick = (_:React.MouseEvent):void => {
        setLoggedIn(!isLoggedIn)
    }

    return (
        <div>
            <Navigation isLoggedIn={isLoggedIn}/>
            <Container>
                <Routes>
                    <Route path='/' element={<Home name={name} />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
                
            </Container>
        </div>
    )
}