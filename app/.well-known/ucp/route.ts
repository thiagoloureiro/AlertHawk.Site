import { jsonResponse } from '@/lib/agent-discovery/json-response';
import { ucpDocument } from '@/lib/agent-discovery/documents';

export function GET() {
  return jsonResponse(ucpDocument(), {
    cacheControl: 'public, max-age=3600',
  });
}
