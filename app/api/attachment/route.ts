import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import axios from 'axios';
import crypto from 'crypto';

const MIME_MAP: Record<string, string> = {
  mp4: 'video/mp4',
  webm: 'video/webm',
  mov: 'video/quicktime',
  webp: 'image/webp',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  png: 'image/png',
  gif: 'image/gif',
};

function inferContentType(filename: string, fallback: string): string {
  if (fallback && fallback !== 'application/octet-stream') return fallback;
  const ext = filename.replace(/\.enc$/i, '').split('.').pop()?.toLowerCase() ?? '';
  return MIME_MAP[ext] ?? 'application/octet-stream';
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  
  // Mendukung parameter pencarian fleksibel milikmu (mengakomodasi gaya huruf besar/kecil)
  const id = searchParams.get('Id') || searchParams.get('id');
  const refId = searchParams.get('RefId') || searchParams.get('refId') || searchParams.get('ref_id');
  const filename = searchParams.get('Filename') || searchParams.get('filename') || searchParams.get('Name') || searchParams.get('name');

  if (!filename) {
    return NextResponse.json({ error: 'Missing required param: Filename' }, { status: 400 });
  }

  const cookieStore = await cookies();
  const token = 
    cookieStore.get('token')?.value || 
    cookieStore.get('access_token')?.value || 
    cookieStore.get('auth_token')?.value;
  
  const authHeader = token ? { Authorization: `Bearer ${token}` } : {};

  const rawBaseUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:7000';
  const baseUrl = rawBaseUrl.replace(/\/api\/?$/, '').replace(/\/+$/, '');

  try {
    let targetUrl = '';

    // Jika parameter lengkap (seperti struktur temanmu), ambil SignedPath dari metadata API
    if (id && refId) {
      try {
        const metaResponse = await axios.get(`${baseUrl}/api/Attachment`, {
          params: { Id: id, RefId: refId, Filename: filename },
          headers: authHeader,
        });

        const signedPath: string | undefined = metaResponse.data?.Data?.[0]?.SignedPath;
        if (signedPath) {
          targetUrl = signedPath;
        }
      } catch (metaErr) {
        // Jika gagal mengambil via metadata API, fallback ke sistem signature aslimu
        console.warn('Gagal mengambil metadata SignedPath, menggunakan fallback signature kriptografi.');
      }
    }

    // Jika SignedPath tidak ditemukan dari metadata, gunakan logika HMAC Signature aslimu
    if (!targetUrl) {
      const expires = searchParams.get('expires') || String(Math.floor(Date.now() / 1000) + 86400);
      const secretKey = process.env.ASSET_SECRET_KEY || 'cms-secret-key'; 
      const signaturePayload = `${filename}:${expires}`;
      const sig = crypto.createHmac('sha256', secretKey).update(signaturePayload).digest('hex');

      targetUrl = `${baseUrl}/resources/asset/${filename}?expires=${expires}&sig=${sig}`;
    }

    // Step 2: Forward Range header untuk dukungan streaming video/media
    const rangeHeader = req.headers.get('range');
    const mediaResponse = await axios.get(targetUrl, {
      responseType: 'arraybuffer',
      headers: {
        ...authHeader,
        ...(rangeHeader && { Range: rangeHeader }),
      },
      validateStatus: (status) => status < 500,
    });

    if (mediaResponse.status !== 200 && mediaResponse.status !== 206) {
      return NextResponse.json(
        { error: 'Failed to fetch media from source' },
        { status: mediaResponse.status }
      );
    }

    const contentType = inferContentType(
      filename,
      (mediaResponse.headers['content-type'] as string) ?? ''
    );

    const isPartial = mediaResponse.status === 206;
    const responseHeaders: Record<string, string> = {
      'Content-Type': contentType,
      'Cache-Control': 'public, max-age=3600',
      'Accept-Ranges': 'bytes',
    };

    if (isPartial) {
      const contentRange = mediaResponse.headers['content-range'] as string | undefined;
      const contentLength = mediaResponse.headers['content-length'] as string | undefined;
      if (contentRange) responseHeaders['Content-Range'] = contentRange;
      if (contentLength) responseHeaders['Content-Length'] = contentLength;
    }

    return new NextResponse(mediaResponse.data, {
      status: isPartial ? 206 : 200,
      headers: responseHeaders,
    });
  } catch (error: any) {
    console.error('Failed to proxy attachment:', error?.response?.status, error.message);
    return NextResponse.json(
      { error: 'Attachment not found' },
      { status: error?.response?.status ?? 404 }
    );
  }
}