import axios from 'axios'

const BASE_URL = "https://crypt-tech-backend-mzt2ruahs-poornima-skp.vercel.app";

// const BASE_URL = "http://localhost:8080"

const signIn = (formData) => axios.post(`${BASE_URL}/user/signin`, formData)

export const signin = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await signIn(formData)

        dispatch({ type: 'AUTH', data })
        navigate('/forums')
    } catch (error) {
        console.log(error)
    }
}


const signUp = (formData) => axios.post(`${BASE_URL}/user/signup`, formData)

export const signup = (formData, navigate) => async (dispatch) => {

    
    try {
        // console.log(formData, "formDATA")
        const { data } = await signUp(formData)

        dispatch({ type: 'AUTH', data })

        navigate('/')

    } catch (error) {
        console.log(error)

    }
}