import axios from "axios";

export const api = axios.create({
    baseURL: 'https://tranquil-everglades-36236.herokuapp.com/v1'
})