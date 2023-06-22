import { useState } from 'react';
import Button from "react-bootstrap/Button";
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import PostType from '../types/post';
import UserType from '../types/auth';
import CategoryType from '../types/category';


type HomeProps = {
    user: UserType|null
    handleClick?: (e:React.MouseEvent) => void
    flashMessage: (message: string|null, category: CategoryType) => void
}

export default function Home({ user, flashMessage }: HomeProps) {
    const [posts, setPosts] = useState<PostType[]>([]);
    const [newPost, setNewPost] = useState<PostType>({ id: 1, title: '', body: ''})
    const [displayForm, setDisplayForm] = useState(false)

    const handleFormSubmit = (event: React.FormEvent) : void => {
        event.preventDefault();

        const newPostWithAuthor = {...newPost, author: user!}
        setPosts([...posts, newPostWithAuthor]);
        setNewPost({ id: (posts.length + 2), title: '', body: ''})
        setDisplayForm(false)
        flashMessage(newPost.title + ' has been created', 'success');
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