import { siteUrl } from '@/lib/site';
import { agentRegisterUrl, apiBaseUrl, appUrl, docsUrl, healthUrl } from './config';

export function apiCatalogDocument() {
  return {
    linkset: [
      {
        anchor: `${siteUrl}/.well-known/api-catalog`,
        item: [{ href: apiBaseUrl }],
      },
      {
        anchor: apiBaseUrl,
        'service-desc': [
          {
            href: `${siteUrl}/openapi.json`,
            type: 'application/openapi+json',
          },
        ],
        'service-doc': [{ href: docsUrl }],
        status: [{ href: healthUrl }],
      },
    ],
  };
}

export function oauthAuthorizationServerDocument() {
  return {
    issuer: siteUrl,
    authorization_endpoint: `${appUrl}/oauth/authorize`,
    token_endpoint: `${appUrl}/oauth/token`,
    jwks_uri: `${siteUrl}/.well-known/jwks.json`,
    registration_endpoint: agentRegisterUrl,
    grant_types_supported: ['authorization_code', 'client_credentials', 'refresh_token'],
    response_types_supported: ['code'],
    token_endpoint_auth_methods_supported: ['client_secret_basic', 'client_secret_post'],
    scopes_supported: ['monitoring.read', 'alerts.write', 'metrics.read'],
    code_challenge_methods_supported: ['S256'],
    agent_auth: {
      skill: `${siteUrl}/auth.md`,
      register_uri: agentRegisterUrl,
      identity_types_supported: ['anonymous', 'verified_email'],
      anonymous: {
        credential_types_supported: ['api_key'],
        claim_uri: `${siteUrl}/auth.md#anonymous`,
      },
      verified_email: {
        assertion_types_supported: ['verified_email'],
        credential_types_supported: ['api_key', 'bearer'],
        claim_uri: `${siteUrl}/auth.md#verified-email`,
      },
    },
  };
}

export function oauthProtectedResourceDocument() {
  return {
    resource: siteUrl,
    authorization_servers: [siteUrl],
    scopes_supported: ['monitoring.read', 'alerts.write', 'metrics.read'],
    bearer_methods_supported: ['header'],
  };
}

export function jwksDocument() {
  return {
    keys: [],
  };
}

export function mcpServerCardDocument() {
  return {
    serverInfo: {
      name: 'AlertHawk',
      version: '1.0.0',
      description: 'Kubernetes monitoring, uptime tracking, and infrastructure alerts',
    },
    endpoint: `${siteUrl}/mcp`,
    transport: 'streamable-http',
    capabilities: {
      tools: true,
      resources: true,
      prompts: false,
    },
  };
}

export function ucpDocument() {
  return {
    ucp: {
      version: '2026-04-08',
      services: {
        'dev.ucp.shopping': [
          {
            version: '2026-04-08',
            transport: 'mcp',
            endpoint: `${siteUrl}/mcp`,
          },
        ],
      },
      capabilities: {
        'dev.ucp.shopping.checkout': [{ version: '2026-04-08' }],
      },
      payment_handlers: {},
    },
    signing_keys: [],
  };
}

export function acpDocument() {
  return {
    protocol: {
      name: 'acp',
      version: '2026-01-30',
      supported_versions: ['2026-01-30'],
      documentation_url: docsUrl,
    },
    api_base_url: `${appUrl}/acp`,
    transports: ['rest'],
    capabilities: {
      services: ['checkout'],
      supported_currencies: ['USD'],
      supported_locales: ['en'],
    },
  };
}
