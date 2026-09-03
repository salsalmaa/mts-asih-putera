import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:7000/",
  timeout: 10000,
  withCredentials: true, // Memastikan cookies/session terkirim otomatis di sisi klien
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
});

export default api;