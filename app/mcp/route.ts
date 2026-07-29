import { NextResponse } from 'next/server';
import { mcpEndpoint } from '@/lib/agent-discovery/config';

export function GET() {
  return NextResponse.json(
    {
      jsonrpc: '2.0',
      result: {
        protocolVersion: '2024-11-05',
        capabilities: {
          tools: { listChanged: false },
          resources: { subscribe: false, listChanged: false },
        },
        serverInfo: {
          name: 'AlertHawk',
          version: '1.0.0',
        },
        endpoint: mcpEndpoint,
      },
      id: null,
    },
    {
      headers: {
        'Cache-Control': 'public, max-age=3600',
      },
    },
  );
}

export function POST() {
  return NextResponse.json(
    {
      jsonrpc: '2.0',
      error: {
        code: -32601,
        message: 'MCP session initialization required. See /.well-known/mcp/server-card.json',
      },
      id: null,
    },
    { status: 501 },
  );
}
