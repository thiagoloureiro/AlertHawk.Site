import { jsonResponse } from '@/lib/agent-discovery/json-response';
import { jwksDocument } from '@/lib/agent-discovery/documents';

export function GET() {
  return jsonResponse(jwksDocument(), {
    cacheControl: 'public, max-age=3600',
  });
}
