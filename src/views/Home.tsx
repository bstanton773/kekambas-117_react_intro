import { useState } from 'react';
import Button from "react-bootstrap/Button";
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import PostType from '../types/post';
import UserType from '../types/auth';


type HomeProps = {
    user: UserType|null
    handleClick?: (e:React.MouseEvent) => void
}

export default function Home({ user }: HomeProps) {
    const [posts, setPosts] = useState<PostType[]>([]);
    const [newPost, setNewPost] = useState<PostType>({ id: 1, title: '', body: ''})
    const [displayForm, setDisplayForm] = useState(false)

    const handleFormSubmit = (event: React.FormEvent) : void => {
        event.preventDefault();

        setPosts([...posts, newPost]);
        setNewPost({ id: (posts.length + 2), title: '', body: ''})
        setDisplayForm(false)
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) : void => {
        // console.log(event.target.name, event.target.value)
        setNewPost({...newPost, [event.target.name]: event.target.value})
    }

    return (
        <>
            <h1>Hello {user?.firstName} {user?.lastName}</h1>
            { user && <Button variant="danger" onClick={() => {setDisplayForm(!displayForm)}}>{displayForm ? 'Close X' : 'Compose +'}</Button>}
            {displayForm && <PostForm handleSubmit={handleFormSubmit} newPost={newPost} handleChange={handleInputChange}/>}
            {posts.map( p => <PostCard key={p.id} post={p} />)}
            <Button variant='info' onClick={() => {setPosts([])}}>Clear All Posts</Button>
        </>
    )
}