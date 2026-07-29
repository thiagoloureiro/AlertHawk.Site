import { jsonResponse } from '@/lib/agent-discovery/json-response';
import { mcpServerCardDocument } from '@/lib/agent-discovery/documents';

export function GET() {
  return jsonResponse(mcpServerCardDocument(), {
    cacheControl: 'public, max-age=3600',
  });
}
