import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api",
  withCredentials: true,
});

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default API;