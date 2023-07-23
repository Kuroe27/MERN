import axios from "axios";

const API_URL = 'https://mern-app-60nb.onrender.com/api/post'

const createPost = async (postData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    const res = await axios.post(API_URL, postData, config)


    return res.data
}


const getPosts = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    const res = await axios.get(API_URL, config)


    return res.data
}


const deletePost = async (id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    const res = await axios.delete(API_URL + `/${id}`, config)
    return res.data
}


const postService = {
    createPost,
    getPosts,
    deletePost
}


export default postService