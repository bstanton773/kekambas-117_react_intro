import { useState } from 'react';
import Button from "react-bootstrap/Button";
import PostForm from '../components/PostForm';
import PostType from '../types/post';


type HomeProps = {
    name: string
    handleClick: (e:React.MouseEvent) => void
}

export default function Home({ name, handleClick }: HomeProps) {
    const [posts, setPosts] = useState<PostType[]>([]);
    const [newPost, setNewPost] = useState<PostType>({ id: 1, title: '', body: ''})
    const [displayForm, setDisplayForm] = useState(false)

    const handleFormSubmit = (event: React.FormEvent) : void => {
        event.preventDefault();

        setPosts([...posts, newPost]);
        setNewPost({ id: (posts.length + 2), title: '', body: ''})
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) : void => {
        console.log(event.target.name, event.target.value)
        setNewPost({...newPost, [event.target.name]: event.target.value})
    }

    return (
        <>
            <h1>Hello {name.toUpperCase()}</h1>
            <Button variant="danger" onClick={() => {setDisplayForm(!displayForm)}}>{displayForm ? 'Close X' : 'Compose +'}</Button>
            {displayForm && <PostForm handleSubmit={handleFormSubmit} newPost={newPost} handleChange={handleInputChange}/>}
            {posts.map( p => <li key={p.id}>{p.title}</li>)}
            <Button variant='info' onClick={() => {setPosts([])}}>Clear All Posts</Button>
        </>
    )
}