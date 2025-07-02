// import axios from "axios";  
// const api = axios.create({
//    baseURL: 'http://localhost:5000/api',

// })

// export default api;

// api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // change to your backend API URL
});

export default api;
