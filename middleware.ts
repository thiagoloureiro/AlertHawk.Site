import { NextRequest, NextResponse } from 'next/server';
import { applyHomepageLinkHeaders } from '@/lib/agent-discovery/link-headers';

const MARKDOWN_PATHS = new Set(['/', '/privacy']);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accept = request.headers.get('accept') ?? '';

  if (
    MARKDOWN_PATHS.has(pathname) &&
    accept.includes('text/markdown') &&
    !accept.includes('text/html')
  ) {
    const url = request.nextUrl.clone();
    url.pathname = pathname === '/' ? '/markdown' : `/markdown${pathname}`;
    return NextResponse.rewrite(url);
  }

  const response = NextResponse.next();

  if (pathname === '/') {
    applyHomepageLinkHeaders(response.headers);
  }

  return response;
}

export const config = {
  matcher: ['/', '/privacy'],
};
