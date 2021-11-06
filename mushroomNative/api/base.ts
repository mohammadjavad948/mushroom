import axios from 'axios';
import {ToastAndroid} from "react-native";

const api = axios.create({
  baseURL: __DEV__ ? 'http://localhost:3000/v1' : 'https://big-mushroom.herokuapp.com/v1',
});


api.interceptors.response.use((response) => response, (error) => {

  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx

    ToastAndroid.showWithGravity(
        `Error ${error.response.status}`,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
    );

  } else if (error.request) {
    // The request was made but no response was received

    ToastAndroid.showWithGravity(
        "No Response Received",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
    );
  } else {
    // Something happened in setting up the request that triggered an Error

    ToastAndroid.showWithGravity(
        "Unknown Error",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
    );
  }

  throw error;
});


export {api}
