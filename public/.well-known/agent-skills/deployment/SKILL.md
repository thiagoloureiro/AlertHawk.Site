# AlertHawk Deployment

Deploy AlertHawk as a self-hosted monitoring stack using Helm on Kubernetes.

## When to use

Use this skill when an agent needs to guide users through installing or upgrading AlertHawk.

## Prerequisites

- Kubernetes cluster (1.24+)
- Helm 3.x
- Persistent storage for AlertHawk data

## Installation

```bash
helm repo add alerthawk https://thiagoloureiro.github.io/AlertHawk/
helm install alerthawk alerthawk/alerthawk
```

## Configuration

- Set notification channels (email, Slack, Discord, Teams, Telegram, webhooks)
- Configure uptime check targets
- Connect Azure subscription for FinOps features

## Links

- GitHub: https://github.com/thiagoloureiro/AlertHawk
- Docs: https://docs.alerthawk.net/
