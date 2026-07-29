import { NextResponse } from 'next/server';

export function jsonResponse(
  data: unknown,
  options?: { cacheControl?: string; contentType?: string },
) {
  const headers = new Headers({
    'Content-Type': options?.contentType ?? 'application/json',
  });
  if (options?.cacheControl) {
    headers.set('Cache-Control', options.cacheControl);
  }
  return NextResponse.json(data, { headers });
}
