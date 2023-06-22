import axios, { AxiosError, AxiosResponse } from 'axios';
import PostType from '../types/post'


const base: string = 'http://127.0.0.1:5000/api';
const postEndpoint: string = '/posts';


const apiClientNoAuth = () => axios.create({
    baseURL: base
})


type APIResponse<T> = {
    error: string | AxiosError | undefined;
    data: T | undefined
}


async function getAllPosts(): Promise<APIResponse<PostType[]>> {
    let error;
    let data;
    try{
        const response: AxiosResponse<PostType[]> = await apiClientNoAuth().get(postEndpoint)
        data = response.data
    } catch(err) {
        if (axios.isAxiosError(err)){
            error = err.message
        } else {
            error = 'Something went wrong'
        }
    }
    return {
        error,
        data
    }
}

export {
    getAllPosts
}
