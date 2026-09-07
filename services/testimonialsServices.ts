import axios from 'axios';

export const testimonialsService = {
  getTestimonials: async (token?: string) => {
    console.log("📌 Calling Backend Testimonials API with KanalType=K010...");
    
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:7000/";
      
      const headers: Record<string, string> = {
        "Content-Type": "application/json",
      };

      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }

      const response = await axios.get(`${apiUrl}api/content?KanalType=K010`, {
        headers,
      });

      console.log("✅ Testimonials Response Status:", response.status);
      return response.data;
    } catch (error: any) {
      console.error("❌ Testimonials Service Error:", error.response?.status || error.message);
      throw error;
    }
  }
};