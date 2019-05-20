import axios from 'axios';

//api
//local via mongoose, inciar ver: README.mb

const api = axios.create({ baseURL: 'http://localhost:3001/api/'});
export default api;
