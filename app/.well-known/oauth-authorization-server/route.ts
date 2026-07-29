import { jsonResponse } from '@/lib/agent-discovery/json-response';
import { oauthAuthorizationServerDocument } from '@/lib/agent-discovery/documents';

export function GET() {
  return jsonResponse(oauthAuthorizationServerDocument(), {
    cacheControl: 'public, max-age=3600',
  });
}
