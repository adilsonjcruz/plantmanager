import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.106:3333',
})

export default api;

//https://youtu.be/HZfuL7pN9Wo?t=2912