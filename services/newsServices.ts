import axios from 'axios';

export const newsService = {
  getNews: async () => {
    console.log("📌 Calling Local News API Route...");
    
    try {
      const response = await axios.get('/api/news', {
        withCredentials: true,
        timeout: 2500, // Timeout 2.5 detik agar tidak mengendap saat API offline
      });
      console.log("✅ News Response:", response.data);
      return response.data;
    } catch (error: any) {
      console.warn("⚠️ News API error atau backend offline, beralih ke data fallback lokal:", error.message);
      return { Data: { Content: [] } }; // Return data kosong secara aman agar NewsSection menggunakan NEWS_DATA tanpa menunda loading
    }
  }
};