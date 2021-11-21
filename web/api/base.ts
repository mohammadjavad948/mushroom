import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:3000/v1' : 'https://big-mushroom.herokuapp.com/v1',
});


export {api}
