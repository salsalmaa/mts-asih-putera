import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import axios from 'axios';

// Pemetaan tipe MIME khusus untuk file gambar fasilitas
const MIME_MAP: Record<string, string> = {
  webp: 'image/webp',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  png: 'image/png',
  gif: 'image/gif',
};

function inferContentType(filename: string, fallback: string): string {
  if (fallback && fallback !== 'application/octet-stream') return fallback;
  const ext = filename.replace(/\.enc$/i, '').split('.').pop()?.toLowerCase() ?? '';
  return MIME_MAP[ext] ?? 'image/webp';
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  
  const id = searchParams.get('Id') || searchParams.get('id');
  const refId = searchParams.get('RefId') || searchParams.get('refId');
  const filename = searchParams.get('Filename') || searchParams.get('filename') || searchParams.get('Name');

  if (!filename) {
    return NextResponse.json({ error: 'Missing required param: Filename' }, { status: 400 });
  }

  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;
  const authHeader = token ? { Authorization: `Bearer ${token}` } : {};

  const baseUrl = (process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:7000').replace(/\/api\/?$/, '');

  try {
    let signedPath = '';

    // Step 1: Wajib tembak metadata /api/Attachment untuk dapat SignedPath dari backend Go
    if (id && refId) {
      const metaResponse = await axios.get(`${baseUrl}/api/Attachment`, {
        params: { Id: id, RefId: refId, Filename: filename },
        headers: authHeader,
        validateStatus: (status) => status < 500,
      });

      signedPath = metaResponse.data?.Data?.[0]?.SignedPath || metaResponse.data?.SignedPath || '';
    }

    // Fallback jika id/refId tidak terkirim dari frontend
    if (!signedPath) {
      signedPath = `${baseUrl}/resources/asset/${filename}`;
    }

    // Step 2: Ambil data biner gambar menggunakan SignedPath yang valid
    const imageResponse = await axios.get(signedPath, {
      responseType: 'arraybuffer',
      headers: authHeader,
      validateStatus: (status) => status < 500,
    });

    if (imageResponse.status !== 200) {
      return NextResponse.json(
        { error: 'Failed to fetch image from source' },
        { status: imageResponse.status }
      );
    }

    const contentType = inferContentType(
      filename,
      (imageResponse.headers['content-type'] as string) ?? ''
    );

    return new NextResponse(imageResponse.data, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error: any) {
    console.error('Failed to proxy facility attachment:', error?.response?.status, error.message);
    return NextResponse.json(
      { error: 'Attachment not found' },
      { status: error?.response?.status ?? 404 }
    );
  }
}