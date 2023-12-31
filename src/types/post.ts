import UserType from './auth'


type PostType = {
    id?: number
    title: string
    body: string
    author?: UserType
    dateCreated?: string
    imageURL?: string
}

export default PostType
