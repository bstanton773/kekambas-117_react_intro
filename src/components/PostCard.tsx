import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import PostType from '../types/post';
import UserType from '../types/auth';
import { deletePost } from '../lib/apiWrapper'

type PostCardProps = {
    post: PostType
    user: UserType|null
    setUpdate: React.Dispatch<React.SetStateAction<boolean>>
    update: boolean
}

export default function PostCard({ post, user, setUpdate, update }: PostCardProps) {
    // console.log(post)
    const date = new Date(post.dateCreated as string)

    const handleDeleteClick = (_:React.MouseEvent): void => {
        const token = localStorage.getItem('token');
        deletePost(post.id!, token!)
        setTimeout(() => {
            setUpdate(!update)
        }, 1000)
    }

    return (
        <Card className='mt-3'>
            <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.body}</Card.Text>
                <Card.Subtitle>By {post.author?.firstName} {post.author?.lastName} </Card.Subtitle>
                <Card.Text className='text-muted'>Date Created: {date.toString()}</Card.Text>
            </Card.Body>
            {(post.author?.username === user?.username) ? <Button variant='danger' onClick={handleDeleteClick}>Delete Post</Button> : null}
        </Card>
    )
}
