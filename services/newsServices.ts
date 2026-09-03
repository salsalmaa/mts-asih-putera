import axios from 'axios';

export const newsService = {
  getNews: async () => {
    console.log("📌 Calling Local News API Route...");
    
    try {
      const response = await axios.get('/api/news', { withCredentials: true });
      console.log("✅ News Response:", response.data);
      return response.data;
    } catch (error: any) {
      console.error("❌ News Error:", error.response?.status || error.message);
      throw new Error(`HTTP ${error.response?.status || 'Unknown'}`);
    }
  }
};