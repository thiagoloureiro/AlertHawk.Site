import { HomePage } from '@/components/HomePage';

export default function Page() {
  return (
    <>
      <noscript>
        <article
          style={{
            maxWidth: '48rem',
            margin: '2rem auto',
            padding: '0 1rem',
            fontFamily: 'system-ui, sans-serif',
            lineHeight: 1.6,
          }}
        >
          <h1>AlertHawk — Self-hosted monitoring for APIs, websites, servers &amp; Kubernetes</h1>
          <p>
            Open-source monitoring you run on your infrastructure: HTTP/TCP uptime, Kubernetes
            CPU/RAM metrics, multi-channel alerts, Azure FinOps, and mobile apps. Deploy with Helm
            or try the live demo.
          </p>
          <h2>What you get</h2>
          <ul>
            <li>HTTP, TCP, and API uptime with response-time history</li>
            <li>Kubernetes node and pod CPU/RAM metrics via a cluster agent</li>
            <li>Alerts to email, Slack, Teams, Telegram, webhooks, and mobile push</li>
            <li>Azure FinOps cost views and AI-assisted recommendations</li>
            <li>Self-hosted Helm deploy — MIT license, no per-check fees</li>
          </ul>
          <p>
            <a href="https://app.alerthawk.net/">Try demo</a>
            {' · '}
            <a href="https://artifacthub.io/packages/helm/alerthawk/alerthawk">
              Deploy with Helm
            </a>
            {' · '}
            <a href="https://docs.alerthawk.net/">Documentation</a>
            {' · '}
            <a href="https://github.com/thiagoloureiro/AlertHawk">GitHub</a>
          </p>
          <p>
            <small>JavaScript is required for the full interactive experience on this site.</small>
          </p>
        </article>
      </noscript>
      <HomePage />
    </>
  );
}
