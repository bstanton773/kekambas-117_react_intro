import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PostType from '../types/post';


type PostFormProps = {
    handleSubmit: (e:React.FormEvent) => void
    handleChange: (e:React.ChangeEvent<HTMLInputElement>) => void
    newPost: PostType
}

export default function PostForm({ handleSubmit, handleChange, newPost }: PostFormProps) {
    return (
        <Card className='mt-3'>
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Label>Title</Form.Label>
                    <Form.Control value={newPost.title} name='title' onChange={handleChange} />
                    <Form.Label>Body</Form.Label>
                    <Form.Control value={newPost.body} name='body' onChange={handleChange} />
                    <Button variant='warning' type='submit'>Create Post</Button>
                </Form>
            </Card.Body>
        </Card>
    )
}