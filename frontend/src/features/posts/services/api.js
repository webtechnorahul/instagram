import axios from 'axios'

// Creates the shared HTTP client for post and like API requests.
export const api = axios.create({
    baseURL: "http://localhost:3000/api/post",
    withCredentials: true
})