import axios from 'axios';

const BASE_URL = "http://localhost:8080/posts";

const fetchPosts = () => axios.get(BASE_URL);

export const getPosts =() => async (dispatch) => {
    try {
        const { data } = await fetchPosts();

        dispatch({ type: 'FETCH_ALL', payload: data })

    } catch (error) {
        console.log(error)
    }
}

const create = (newPost) => axios.post(BASE_URL, newPost)

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await create(post);

        dispatch({ type: 'CREATE', payload: data})
    } catch (error) {
        console.log(error)

    }
}

const update = (id, updatedPost) => axios.put(`${BASE_URL}/${id}`, updatedPost);

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await update(id, post);

        dispatch({ type: 'UPDATE', payload: data })

    } catch (error) {
        console.log(error)

    }
}


const deletePosts = (id) => axios.delete(`${BASE_URL}/${id}`);

export const deletePost = (id) => async (dispatch) => {
    try {
        await  deletePosts(id);

        dispatch({ type: 'DELETE', payload: id})
    } catch (error) {
        console.log(error)

    }
}

const likes = (id) => axios.put(`${BASE_URL}/${id}/likePost`);

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await likes(id);

        dispatch({ type:'UPDATE', payload: data })

    } catch (error) {
        console.log(error)

    }
}