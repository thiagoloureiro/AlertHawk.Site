import { siteUrl } from '@/lib/site';
import { appUrl, docsUrl, githubUrl } from './config';

export function homepageMarkdown(): string {
  return `# AlertHawk — Self-hosted monitoring for APIs, websites, servers & Kubernetes

Open-source monitoring you run on your infrastructure: HTTP/TCP uptime, Kubernetes CPU/RAM metrics, multi-channel alerts, Azure FinOps, and mobile apps.

## Key capabilities

- HTTP, TCP, and API uptime with response-time history
- Kubernetes node and pod CPU/RAM metrics via a cluster agent
- Alerts via email, Slack, Teams, Telegram, webhooks, and mobile push
- Self-hosted Helm deploy — MIT license, no per-check fees
- FinOps dashboards for Azure cost analysis and AI recommendations

## Links

- [Live demo](${appUrl})
- [Helm Chart](https://artifacthub.io/packages/helm/alerthawk/alerthawk)
- [Documentation](${docsUrl})
- [GitHub](${githubUrl})
- [API Catalog](${siteUrl}/.well-known/api-catalog)
- [Agent Skills](${siteUrl}/.well-known/agent-skills/index.json)

## Sections

- [Advantages](#advantages) — why self-host AlertHawk
- [Capabilities](#capabilities) — what you can monitor
- [Product](#proof) — Kubernetes, FinOps, and mobile screenshots
- [Deploy](#deploy) — Helm and open source
- [Pricing](#pricing) — free self-hosted
- [Contact](#contact) — demo and GitHub
`;
}

export function privacyMarkdown(): string {
  return `# Privacy Policy — AlertHawk

AlertHawk respects your privacy. This page describes how we collect, use, and protect information when you visit ${siteUrl} or use the AlertHawk application at ${appUrl}.

## Information we collect

- Account and contact details when you register for AlertHawk
- Usage and telemetry data to improve the service
- Cookies and analytics on the marketing site (Google Analytics)

## How we use information

- To provide monitoring, alerting, and FinOps features
- To communicate about your account and product updates
- To improve site performance and user experience

## Contact

For privacy questions, use the contact form on ${siteUrl}/#contact or email support through the AlertHawk app.
`;
}

export function estimateTokenCount(markdown: string): number {
  return Math.ceil(markdown.length / 4);
}
