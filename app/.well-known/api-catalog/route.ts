import { jsonResponse } from '@/lib/agent-discovery/json-response';
import { apiCatalogDocument } from '@/lib/agent-discovery/documents';

export function GET() {
  return jsonResponse(apiCatalogDocument(), {
    contentType: 'application/linkset+json',
    cacheControl: 'public, max-age=3600',
  });
}
