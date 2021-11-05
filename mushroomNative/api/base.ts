import axios from 'axios';

export const api = axios.create({
  baseURL: __DEV__ ? 'http://localhost:3000/v1' : 'https://big-mushroom.herokuapp.com/v1',
});
