import { useState } from 'react';
import Navigation from "./components/Navigation";
import Home from './views/Home';
import LoggedOut from './views/LoggedOut';


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
                <Home name={name} posts={posts} handleClick={handleClick}/>
            ) : (
                <LoggedOut handleClick={handleClick}/>
            )}
        </div>
    )
}