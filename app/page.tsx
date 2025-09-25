// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

interface GeoNextRequest extends NextRequest {
  geo?: {
    country?: string;
    city?: string;
    region?: string;
  };
}

const FALLBACK = 'en';

export function middleware(req: GeoNextRequest) {
  if (req.nextUrl.pathname !== '/') return NextResponse.next();

  // Try geo first
  let country = req.geo?.country?.toLowerCase();

  // If no geo, fallback to accept-language
  if (!country) {
    const al = req.headers.get('accept-language') || '';
    country = al.split(',')[0]?.split('-')[0]?.toLowerCase();
  }

  // Final fallback
  if (!country) country = FALLBACK;

  const url = req.nextUrl.clone();
  url.pathname = `/${country}`;
  return NextResponse.redirect(url);
}

// Only run for "/"
export const config = {
  matcher: '/',
};
