import { useState } from 'react';
import Navigation from "./components/Navigation";
import Button from "react-bootstrap/Button";

export default function App() {
    const name: string = 'Brian';

    // let isLoggedIn: boolean = false;
    const [isLoggedIn, setLoggedIn] = useState(false)

    const posts: {id:number, title:string}[] = [
        {
            id: 1,
            title: 'First Post'
        },
        {
            id: 2,
            title: 'Second Post'
        },
        {
            id: 3,
            title: 'Third Post'
        },
    ]

    const handleClick = (_:React.MouseEvent):void => {
        setLoggedIn(!isLoggedIn)
    }

    return (
        <div>
            <Navigation isLoggedIn={isLoggedIn}/>
            { isLoggedIn ? (
                <>
                    <h1>Hello {name.toUpperCase()}</h1>
                    <Button variant="danger" onClick={handleClick}>Log Out</Button>
                    {posts.map( p => <li key={p.id}>{p.title}</li>)}
                </>
            ) : (
                <>
                    <h1>Hello and Welcome</h1>
                    <Button variant="primary" onClick={handleClick}>Log In</Button>
                </>
            )}
        </div>
    )
}