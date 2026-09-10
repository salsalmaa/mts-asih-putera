import axios from 'axios';

const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:7000/";

export interface SliderAttachment {
  AttachmentId?: number;
  ReferenceId?: string | number;
  Name?: string;
  TypeFile?: string;
}

export interface SliderItem {
  SliderId: number;
  Title: string;
  Attachment?: SliderAttachment[];
}

export const sliderService = {
  fetchSliders: async (token?: string, cookieString?: string): Promise<SliderItem[]> => {
    console.log("📌 Calling Backend Go Fiber for Sliders directly from Server...");

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    if (cookieString) {
      headers["Cookie"] = cookieString;
    }

    try {
      const response = await axios.get(`${apiUrl}api/slider`, { headers });
      return response.data?.Data?.Slider ?? [];
    } catch (error: any) {
      throw error;
    }
  },

  performLogin: async () => {
    const formData = new FormData();
    formData.append("Username", process.env.CMS_USERNAME || "");
    formData.append("Password", process.env.CMS_PASSWORD || "");
    formData.append("SiteId", process.env.CMS_SITE_ID || "");

    const response = await axios.post(`${apiUrl}Api/Auth/Login`, formData);
    return response.data?.Data?.Token || response.data?.Token;
  }
};