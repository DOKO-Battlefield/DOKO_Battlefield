// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:5000', // your backend URL
  withCredentials: false, // optional: for cookies/session auth
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;