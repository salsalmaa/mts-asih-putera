import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import axios from "axios";

export async function GET(request: NextRequest) {
  return handleSiteInformation(request);
}

export async function POST(request: NextRequest) {
  return handleSiteInformation(request);
}

async function handleSiteInformation(request: NextRequest) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:7000/";

  // Fungsi helper untuk mengambil data site information dari backend
  async function fetchSiteInfo(authToken: string, cookieStore: any) {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    };

    const allCookies = cookieStore.getAll();
    const cookieString = allCookies
      .map((c: any) => `${c.name}=${c.value}`)
      .join("; ");
    if (cookieString) {
      headers["Cookie"] = cookieString;
    }

    return await axios.get(`${apiUrl}api/SiteInformation`, {
      headers,
    });
  }

  // Fungsi helper untuk melakukan auto-login langsung ke backend Go Fiber
  async function performAutoLogin(cookieStore: any) {
    console.log("🔑 Melakukan login otomatis ke /Api/Auth/Login...");
    
    const formData = new FormData();
    formData.append("Username", process.env.CMS_USERNAME || "");
    formData.append("Password", process.env.CMS_PASSWORD || "");
    formData.append("SiteId", process.env.CMS_SITE_ID || "");

    const loginResponse = await axios.post(`${apiUrl}Api/Auth/Login`, formData);
    const newToken = loginResponse.data?.Data?.Token || loginResponse.data?.Token;

    if (newToken) {
      cookieStore.set({
        name: "token",
        value: newToken,
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 24, // 1 hari
      });
    }
    return newToken;
  }

  try {
    const cookieStore = await cookies();
    let token = cookieStore.get("token")?.value;

    // 1. Jika token belum ada di cookies, lakukan auto-login
    if (!token) {
      token = await performAutoLogin(cookieStore);
    }

    if (!token) {
      return NextResponse.json(
        { error: "No session token found. Please login first." },
        { status: 401 },
      );
    }

    console.log("📤 Fetching site information dengan token menggunakan Axios...");

    // 2. Coba ambil data site information
    const response = await fetchSiteInfo(token, cookieStore);
    console.log(`📥 Backend response: ${response.status}`);
    return NextResponse.json(response.data);

  } catch (error: any) {
    console.error("❌ Site Information API Route Error:", error);

    // 3. Tangani jika token ditolak (401 Unauthorized)
    if (error?.response?.status === 401) {
      console.log("🔄 Token ditolak backend (401), mencoba login ulang otomatis...");
      try {
        const cookieStore = await cookies();
        cookieStore.delete("token");
        
        // Login ulang & dapatkan token baru
        const newToken = await performAutoLogin(cookieStore);
        
        // Coba ambil data ulang dengan token baru
        const retryResponse = await fetchSiteInfo(newToken, cookieStore);
        console.log(`📥 Retry Backend response: ${retryResponse.status}`);
        return NextResponse.json(retryResponse.data);
      } catch (retryError: any) {
        console.error("❌ Auto-login ulang gagal saat retry:", retryError);
      }
    }

    if (error.response) {
      console.error("❌ Backend error:", error.response.status, error.response.data);
      return NextResponse.json(
        { error: `Backend error ${error.response.status}`, details: error.response.data },
        { status: error.response.status },
      );
    }

    return NextResponse.json({ Data: {} }, { status: 200 });
  }
}