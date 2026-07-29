import { NextResponse } from 'next/server';
import { siteUrl } from '@/lib/site';
import { contentSignals } from '@/lib/agent-discovery/config';

export function GET() {
  const signalLine = `Content-Signal: ai-train=${contentSignals['ai-train']}, search=${contentSignals.search}, ai-input=${contentSignals['ai-input']}`;

  const body = [
    'User-agent: *',
    'Allow: /',
    signalLine,
    '',
    `Sitemap: ${siteUrl}/sitemap.xml`,
    '',
  ].join('\n');

  return new NextResponse(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
