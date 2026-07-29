import { NextResponse } from 'next/server';
import { openApiDocument } from '@/lib/agent-discovery/openapi';

export function GET() {
  return NextResponse.json(openApiDocument(), {
    headers: {
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
