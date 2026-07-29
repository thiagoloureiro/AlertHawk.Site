import { jsonResponse } from '@/lib/agent-discovery/json-response';
import { acpDocument } from '@/lib/agent-discovery/documents';

export function GET() {
  return jsonResponse(acpDocument(), {
    cacheControl: 'public, max-age=3600',
  });
}
