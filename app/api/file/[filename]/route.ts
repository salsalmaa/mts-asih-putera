import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers"; // Pastikan import ini benar
import axios from "axios";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ filename: string }> },
) {
  try {
    // 1. Ambil filename dari params
    const { filename } = await params;
    if (!filename) {
      return NextResponse.json(
        { error: "Filename is required" },
        { status: 400 },
      );
    }

    // 2. Ambil token dari cookies (HARUS PAKAI AWAIT)
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    const headers: Record<string, string> = {};
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    } else {
      // Opsional: Log jika token tidak ditemukan di proxy
      console.log("⚠️ Token not found in proxy request");
    }

    // 3. Panggil backend utama CMS Cration (Tambahkan ekstensi .enc kembali untuk backend)
    const targetFilename = filename.endsWith('.enc') ? filename : `${filename}.enc`;

    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:7000/";
    const backendUrl = `${apiUrl}file/${targetFilename}`;

    // Gunakan axios dengan responseType arraybuffer untuk data binary
    const response = await axios.get(backendUrl, {
      headers,
      responseType: "arraybuffer",
    });

    // 4. Tentukan Content-Type dengan aman
    const rawContentType = response.headers["content-type"];
    const contentType = String(
      Array.isArray(rawContentType)
        ? rawContentType[0]
        : rawContentType || "application/octet-stream",
    );

    // 5. Kirim kembali data gambar ke frontend
    return new NextResponse(response.data, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        // Cache agar tidak boros request
        "Cache-Control": "public, max-age=86400, immutable",
      },
    });
  } catch (error: any) {
    // Tangani error dari axios atau lainnya
    console.error(
      "❌ Proxy File Error:",
      error.response?.status || error.message,
    );

    return NextResponse.json(
      { error: "Failed to fetch file" },
      { status: error.response?.status || 500 },
    );
  }
}