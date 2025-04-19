// src/api/axiosInstance.js
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api", // senin backend adresin
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // token'ı storage'dan çek
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
