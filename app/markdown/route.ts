import { NextResponse } from 'next/server';
import {
  estimateTokenCount,
  homepageMarkdown,
} from '@/lib/agent-discovery/markdown';

export function GET() {
  const markdown = homepageMarkdown();
  const tokens = estimateTokenCount(markdown);

  return new NextResponse(markdown, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'x-markdown-tokens': String(tokens),
      'Cache-Control': 'public, max-age=300',
    },
  });
}
