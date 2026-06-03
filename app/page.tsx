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
          <h1>AlertHawk — Kubernetes &amp; Infrastructure Monitoring</h1>
          <p>
            Enterprise-grade monitoring for Kubernetes and infrastructure: real-time CPU and RAM
            metrics, uptime checks, intelligent multi-channel alerts, and Azure FinOps cost
            insights. Built for DevOps teams who need full visibility into clusters,
            applications, and cloud spend.
          </p>
          <h2>Key capabilities</h2>
          <ul>
            <li>Kubernetes cluster, node, pod, and namespace metrics</li>
            <li>Website and API uptime monitoring with instant notifications</li>
            <li>Alerts via email, SMS, Slack, Discord, Teams, Telegram, and webhooks</li>
            <li>Self-hosted, open source deployment with an official Helm chart</li>
            <li>FinOps dashboards for Azure cost analysis and AI recommendations</li>
          </ul>
          <p>
            <a href="https://artifacthub.io/packages/helm/alerthawk/alerthawk">
              View Helm Chart
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
