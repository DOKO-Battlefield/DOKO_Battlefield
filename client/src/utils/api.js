// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL:
    process.env.REACT_APP_API_URL ||
    "http://127.0.0.1:5000",
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
