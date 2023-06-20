import Navigation from "./components/Navigation";

export default function App() {
    const name: string = 'Brian';

    let isLoggedIn: boolean = true;

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

    return (
        <div>
            <Navigation isLoggedIn={isLoggedIn}/>
            { isLoggedIn ? (
                <>
                    <h1>Hello {name.toUpperCase()}</h1>
                    {posts.map( p => <li key={p.id}>{p.title}</li>)}
                </>
            ) : (
                <h1>Hello and Welcome</h1>
            )}
        </div>
    )
}