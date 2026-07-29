import { NextResponse } from 'next/server';
import { siteUrl } from '@/lib/site';
import { agentRegisterUrl, appUrl, docsUrl } from '@/lib/agent-discovery/config';

export function GET() {
  const body = `# auth.md

Agent authentication and registration for AlertHawk APIs.

## Audience

This document is for AI agents and automated clients that interact with AlertHawk monitoring APIs at \`${appUrl}/api\`.

## Registration

Agents can register using one of the following methods:

### Anonymous {#anonymous}

- **Endpoint:** \`${agentRegisterUrl}\`
- **Method:** POST
- **Credential type:** \`api_key\`
- **Description:** Register an agent with a display name and receive an API key for read-only monitoring access.

### Verified email {#verified-email}

- **Endpoint:** \`${agentRegisterUrl}\`
- **Method:** POST
- **Assertion type:** \`verified_email\`
- **Credential types:** \`api_key\`, \`bearer\`
- **Description:** Register with a verified email address for full API access including alert management.

## OAuth discovery

- Authorization server: \`${siteUrl}/.well-known/oauth-authorization-server\`
- Protected resource metadata: \`${siteUrl}/.well-known/oauth-protected-resource\`
- JWKS: \`${siteUrl}/.well-known/jwks.json\`

## Scopes

| Scope | Description |
|-------|-------------|
| \`monitoring.read\` | Read uptime checks and monitoring status |
| \`metrics.read\` | Read Kubernetes and infrastructure metrics |
| \`alerts.write\` | Create and manage alert rules |

## Documentation

- API catalog: \`${siteUrl}/.well-known/api-catalog\`
- OpenAPI spec: \`${siteUrl}/openapi.json\`
- Human docs: ${docsUrl}
`;

  return new NextResponse(body, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
