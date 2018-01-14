import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3010',
    timeout: 1000,
    headers: { 'Access-Control-Allow-Origin': "*"}
});

export default api;