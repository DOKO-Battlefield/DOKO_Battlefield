// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://doko-backend-production.up.railway.app', // your backend URL
  withCredentials: true, // optional: for cookies/session auth
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
