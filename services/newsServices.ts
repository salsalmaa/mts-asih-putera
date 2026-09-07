import axios from 'axios';
import { loginService } from './loginServices';

const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:7000/";

export const newsService = {
  getNews: async (token?: string) => {
    console.log("📌 Calling Backend Go Fiber for News directly...");
    
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    try {
      const response = await axios.get(`${apiUrl}api/content?KanalType=K001`, { headers });
      return response.data;
    } catch (error: any) {
      throw error;
    }
  }
};