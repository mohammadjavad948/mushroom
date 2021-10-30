import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://big-mushroom.herokuapp.com/v1',
});
