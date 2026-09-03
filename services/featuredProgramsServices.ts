import axios from 'axios';

export const featuredProgramsService = {
  getFeaturedPrograms: async () => {
    console.log("📌 Calling Local Featured Programs API Route...");
    
    try {
      const response = await axios.get('/api/featured-programs', { withCredentials: true });
      console.log("✅ Featured Programs Response:", response.data);
      return response.data;
    } catch (error: any) {
      console.error("❌ Featured Programs Error:", error.response?.status || error.message);
      throw new Error(`HTTP ${error.response?.status || 'Unknown'}`);
    }
  }
};