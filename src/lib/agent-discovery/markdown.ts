import { siteUrl } from '@/lib/site';
import { appUrl, docsUrl, githubUrl } from './config';

export function homepageMarkdown(): string {
  return `# AlertHawk — Kubernetes & Infrastructure Monitoring

Enterprise-grade monitoring for Kubernetes and infrastructure: real-time CPU and RAM metrics, uptime checks, intelligent multi-channel alerts, and Azure FinOps cost insights.

## Key capabilities

- Kubernetes cluster, node, pod, and namespace metrics
- Website and API uptime monitoring with instant notifications
- Alerts via email, SMS, Slack, Discord, Teams, Telegram, and webhooks
- Self-hosted, open source deployment with an official Helm chart
- FinOps dashboards for Azure cost analysis and AI recommendations

## Links

- [Helm Chart](https://artifacthub.io/packages/helm/alerthawk/alerthawk)
- [Documentation](${docsUrl})
- [GitHub](${githubUrl})
- [AlertHawk App](${appUrl})
- [API Catalog](${siteUrl}/.well-known/api-catalog)
- [Agent Skills](${siteUrl}/.well-known/agent-skills/index.json)

## Sections

- [How it Works](#how-it-works) — deployment and alerting workflow
- [Kubernetes Monitoring](#kubernetes-monitoring) — cluster and pod metrics
- [Pricing](#pricing) — self-hosted and cloud options
- [Contact](#contact) — get in touch
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
