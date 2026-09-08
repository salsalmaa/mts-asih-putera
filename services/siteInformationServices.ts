import axios from 'axios';

export const siteInformationService = {
  getSiteInformation: async (token?: string) => {
    console.log("📌 Calling Backend Site Information API...");
    
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:7000/";
      
      const headers: Record<string, string> = {
        "Content-Type": "application/json",
      };

      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }

      const response = await axios.get(`${apiUrl}api/SiteInformation`, {
        headers,
      });

      console.log("✅ Site Information Response Status:", response.status);
      return response.data;
    } catch (error: any) {
      console.error("❌ Site Information Service Error:", error.response?.status || error.message);
      throw error;
    }
  }
};