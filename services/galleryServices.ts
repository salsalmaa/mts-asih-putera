import axios from 'axios';

export const galleryService = {
  getGallery: async () => {
    console.log("📌 Calling Local Gallery API Route...");
    
    try {
      const response = await axios.get('/api/gallery', { withCredentials: true });
      console.log("✅ Gallery Response:", response.data);
      return response.data;
    } catch (error: any) {
      console.error("❌ Gallery Error:", error.response?.status || error.message);
      throw new Error(`HTTP ${error.response?.status || 'Unknown'}`);
    }
  }
};