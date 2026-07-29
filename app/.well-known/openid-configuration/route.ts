import { jsonResponse } from '@/lib/agent-discovery/json-response';
import { oauthAuthorizationServerDocument } from '@/lib/agent-discovery/documents';

export function GET() {
  const oauth = oauthAuthorizationServerDocument();
  return jsonResponse(
    {
      ...oauth,
      subject_types_supported: ['public'],
      id_token_signing_alg_values_supported: ['RS256'],
    },
    { cacheControl: 'public, max-age=3600' },
  );
}
