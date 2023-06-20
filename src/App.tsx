import { useState } from 'react';
import Navigation from "./components/Navigation";
import Home from './views/Home';
import LoggedOut from './views/LoggedOut';
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
                { isLoggedIn ? (
                    <Home name={name} handleClick={handleClick}/>
                ) : (
                    <LoggedOut handleClick={handleClick}/>
                )}
            </Container>
        </div>
    )
}