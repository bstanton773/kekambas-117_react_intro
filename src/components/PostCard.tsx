import Card from 'react-bootstrap/Card';
import PostType from '../types/post';

type PostCardProps = {
    post: PostType
}

export default function PostCard({ post }: PostCardProps) {
    console.log(post)
    return (
        <Card className='mt-3'>
            <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.body}</Card.Text>
                <Card.Subtitle>By user</Card.Subtitle>
                <Card.Text className='text-muted'>Date Created:</Card.Text>
            </Card.Body>
        </Card>
    )
}
