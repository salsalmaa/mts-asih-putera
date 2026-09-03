import axios from 'axios';

export const testimonialsService = {
  getTestimonials: async () => {
    console.log("📌 Calling Local Testimonials API Route...");
    
    try {
      const response = await axios.get('/api/testimonials', { withCredentials: true });
      console.log("✅ Testimonials Response:", response.data);
      return response.data;
    } catch (error: any) {
      console.error("❌ Testimonials Error:", error.response?.status || error.message);
      throw new Error(`HTTP ${error.response?.status || 'Unknown'}`);
    }
  }
};