import axios from 'axios';

export const siteInformationService = {
  getSiteInformation: async () => {
    console.log("📌 Calling Local Site Information API Route...");
    
    try {
      const response = await axios.get('/api/site-information', { withCredentials: true });
      console.log("✅ Site Information Response:", response.data);
      return response.data;
    } catch (error: any) {
      console.error("❌ Site Information Error:", error.response?.status || error.message);
      throw new Error(`HTTP ${error.response?.status || 'Unknown'}`);
    }
  }
};