import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


type Post = {
    id: number
    title: string
}

type PostFormProps = {
    handleSubmit: (e:React.FormEvent) => void
    handleChange: (e:React.ChangeEvent<HTMLInputElement>) => void
    newPost: Post
}

export default function PostForm({ handleSubmit, handleChange, newPost }: PostFormProps) {
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Label>Title</Form.Label>
            <Form.Control value={newPost.title} name='title' onChange={handleChange} />
            <Button variant='warning' type='submit'>Create Post</Button>
        </Form>
    )
}