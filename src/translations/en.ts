export const en = {
  nav: {
    home: 'Home',
    advantages: 'Advantages',
    capabilities: 'Capabilities',
    deploy: 'Deploy',
    pricing: 'Pricing',
    contact: 'Contact',
    docs: 'Docs',
  },
  sections: {
    home: 'Home',
    advantages: 'Advantages',
    capabilities: 'Capabilities',
    proof: 'Product',
    deploy: 'Deploy',
    pricing: 'Pricing',
    contact: 'Contact',
  },
  rail: {
    home: 'Home',
    advantages: 'Why',
    capabilities: 'Caps',
    proof: 'Proof',
    deploy: 'Deploy',
    pricing: 'Price',
    contact: 'Talk',
  },
  hero: {
    brand: 'AlertHawk',
    eyebrow: 'Self-hosted monitoring',
    title: 'Monitor APIs, websites, servers, and Kubernetes — on your infrastructure',
    subtitle:
      'Uptime checks, Kubernetes CPU/RAM metrics, multi-channel alerts, and Azure FinOps in one open-source platform.',
    tryDemo: 'Try demo',
    deployHelm: 'Deploy with Helm',
  },
  advantages: {
    title: 'Why AlertHawk',
    subtitle:
      'Clear advantages for teams that need monitoring they own — without SaaS lock-in or inflated feature lists.',
    steps: {
      title: 'How it works',
      monitor: {
        title: 'Monitor',
        description: 'HTTP, TCP, and Kubernetes health on intervals you configure.',
      },
      alert: {
        title: 'Alert',
        description: 'Notify Slack, Teams, Telegram, email, webhooks, or mobile push.',
      },
      act: {
        title: 'Act',
        description: 'Inspect uptime, response times, and cluster metrics in web or mobile.',
      },
    },
    items: {
      selfHosted: {
        title: 'Self-hosted, your data',
        description:
          'Run on your cluster or VMs. Full control of data, retention, and access — MIT licensed.',
      },
      kubernetes: {
        title: 'Kubernetes-native metrics',
        description:
          'Agent collects node and pod CPU/RAM; store in ClickHouse and chart by cluster, namespace, or pod.',
      },
      uptime: {
        title: 'HTTP, TCP, and API uptime',
        description:
          'Track availability and response time for websites and endpoints across environments.',
      },
      alerts: {
        title: 'Alerts where your team already is',
        description:
          'Email, Slack, Microsoft Teams, Telegram, webhooks, and push — no extra paging product required.',
      },
      finops: {
        title: 'Azure FinOps built in',
        description:
          'Pull Azure cost and usage, break down spend, and surface AI-assisted right-sizing ideas.',
      },
      mobile: {
        title: 'Web dashboard + mobile apps',
        description:
          'Native iOS and Android apps plus a web UI for status, history, and alerts on the go.',
      },
    },
  },
  capabilities: {
    title: 'What you can monitor',
    subtitle: 'Concrete capabilities — not buzzwords.',
    items: {
      http: {
        title: 'HTTP / HTTPS monitors',
        description: 'Status codes, response time, and uptime windows (1h, 24h, 7d).',
      },
      tcp: {
        title: 'TCP endpoint checks',
        description: 'Verify services that are not HTTP — ports and connectivity.',
      },
      k8sHealth: {
        title: 'Kubernetes nodes & pods',
        description: 'Cluster health plus CPU and memory at node, pod, and namespace level.',
      },
      groups: {
        title: 'Groups & environments',
        description: 'Organize monitors by team, product, or Production / Staging / QA.',
      },
      channels: {
        title: 'Notification channels',
        description: 'Email, Slack, Teams, Telegram, webhooks, and mobile push.',
      },
      ssl: {
        title: 'SSL & history',
        description: 'Certificate expiry awareness and historical performance charts.',
      },
      metrics: {
        title: 'Metrics pipeline',
        description: 'Metrics agent → API → ClickHouse for fast time-series queries.',
      },
      auth: {
        title: 'Auth that fits ops',
        description: 'Username/password or Microsoft Account / Azure AD.',
      },
      helm: {
        title: 'Helm-ready deploy',
        description: 'Official charts on Artifact Hub for Kubernetes installs.',
      },
    },
  },
  proof: {
    title: 'See it in the product',
    subtitle: 'Real dashboards from AlertHawk — Kubernetes metrics, FinOps, and mobile.',
    kubernetes: {
      title: 'Kubernetes metrics',
      subtitle: 'Cluster and application CPU/RAM across nodes, pods, and namespaces.',
      cluster: 'Cluster metrics',
      application: 'Application metrics',
      overview: 'Clusters overview',
    },
    finops: {
      title: 'Azure FinOps',
      subtitle: 'Cost overview, trends, breakdowns, and AI recommendations.',
      overview: 'Portfolio overview',
      historical: 'Historical spend',
      details: 'Cost details',
      ai: 'AI recommendations',
    },
    mobile: {
      title: 'Mobile',
      subtitle: 'Status, details, and alerts on iOS and Android.',
    },
  },
  technology: {
    title: 'Deploy on your terms',
    subtitle: 'Open source microservices you can run with Helm — or try the hosted demo first.',
    kubernetes: {
      title: 'Kubernetes native',
      description: 'Helm chart deployment and agents that speak the Kubernetes API.',
    },
    database: {
      title: 'Time-series storage',
      description: 'ClickHouse-backed metrics for historical analysis and fast queries.',
    },
    processing: {
      title: 'Modular services',
      description: 'Auth, Monitoring, Notification, Metrics, and FinOps as separate services.',
    },
    security: {
      title: 'Your network, your rules',
      description: 'Keep traffic and data inside your environment; integrate with Azure AD when needed.',
    },
    deployment: {
      title: 'Install with Helm',
      description:
        'Add the AlertHawk Helm repo, set connection strings and secrets, and install on your cluster.',
      viewHelmChart: 'View Helm chart',
    },
    openSource: {
      title: 'Open source on GitHub',
      description: 'Read the code, open issues, and contribute. MIT license.',
      viewGitHub: 'View on GitHub',
    },
  },
  pricing: {
    title: 'Pricing',
    subtitle: 'Self-hosted is free. Unlimited monitors on infrastructure you control.',
    openSource: {
      badge: 'Open source',
      price: '$0',
      period: '/forever',
      description: 'Deploy AlertHawk yourself. No per-check fees. No seat limits from us.',
      unlimited: {
        title: 'Unlimited monitoring',
        description: 'Endpoints, clusters, and metrics limited only by your hardware.',
      },
      sourceCode: {
        title: 'Full source access',
        description: 'MIT license — inspect, modify, and contribute.',
      },
      selfHosted: {
        title: 'Self-hosted deployment',
        description: 'Docker images and Helm charts for your environment.',
      },
      allFeatures: {
        title: 'All product features',
        description: 'Uptime, Kubernetes metrics, alerts, FinOps, and mobile.',
      },
      community: {
        title: 'Community support',
        description: 'GitHub issues and discussions.',
      },
      viewGitHub: 'View on GitHub',
      deployHelm: 'Deploy with Helm',
    },
  },
  contact: {
    title: 'Next steps',
    subtitle: 'Try the demo, deploy with Helm, or open the repo.',
    github: {
      title: 'GitHub',
      description: 'Source code, issues, and contributions.',
      visit: 'Open repository',
    },
    demo: {
      title: 'Live demo',
      description: 'Create an account or sign in with a Microsoft account.',
      view: 'Open demo',
    },
  },
  footer: {
    description: 'Self-hosted monitoring for APIs, websites, servers, and Kubernetes.',
    connect: 'Connect',
    privacy: 'Privacy Policy',
  },
};
