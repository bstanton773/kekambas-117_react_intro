import Button from "react-bootstrap/Button";

type Post = {
    id: number
    title: string
}

type HomeProps = {
    name: string
    handleClick: (e:React.MouseEvent) => void
    posts: Post[]
}

export default function Home({ name, handleClick, posts }: HomeProps) {
    return (
        <>
            <h1>Hello {name.toUpperCase()}</h1>
            <Button variant="danger" onClick={handleClick}>Log Out</Button>
            {posts.map( p => <li key={p.id}>{p.title}</li>)}
        </>
    )
}