import axios from "axios";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:7000/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;