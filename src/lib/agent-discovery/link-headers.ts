import { siteUrl } from '@/lib/site';
import { docsUrl } from './config';

export function buildHomepageLinkHeaders(): string {
  const links = [
    '</.well-known/api-catalog>; rel="api-catalog"',
    '</.well-known/agent-skills/index.json>; rel="describedby"',
    `<${docsUrl}>; rel="service-doc"`,
    '</openapi.json>; rel="service-desc"; type="application/openapi+json"',
    '</auth.md>; rel="describedby"',
  ];
  return links.join(', ');
}

export function applyHomepageLinkHeaders(headers: Headers): void {
  headers.set('Link', buildHomepageLinkHeaders());
  headers.append('Link', `<${siteUrl}/.well-known/mcp/server-card.json>; rel="describedby"`);
}
