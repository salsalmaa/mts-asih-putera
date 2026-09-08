import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import axios from 'axios';

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;

  const baseUrl = (process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:7000').replace(/\/api\/?$/, '');

  try {
    const response = await axios.get(`${baseUrl}/api/gallery`, {
      headers: { ...(token && { Authorization: `Bearer ${token}` }) },
      timeout: 5000,
    });

    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error('Failed to fetch gallery:', error?.response?.data ?? error.message);
    return NextResponse.json(
      { Status: 500, Message: 'Failed to fetch gallery', Data: { Gallery: [] } },
      { status: 200 }
    );
  }
}