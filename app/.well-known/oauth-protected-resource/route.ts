import { jsonResponse } from '@/lib/agent-discovery/json-response';
import { oauthProtectedResourceDocument } from '@/lib/agent-discovery/documents';

export function GET() {
  return jsonResponse(oauthProtectedResourceDocument(), {
    cacheControl: 'public, max-age=3600',
  });
}
