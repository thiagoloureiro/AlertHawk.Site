/** Shared JSON-LD for index.html (static) and future reuse. */
export const structuredDataGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://alerthawk.net/#website',
      url: 'https://alerthawk.net/',
      name: 'AlertHawk',
      description:
        'Enterprise-grade Kubernetes monitoring with uptime tracking, intelligent alerting, and FinOps for Azure.',
      publisher: { '@id': 'https://alerthawk.net/#organization' },
    },
    {
      '@type': 'Organization',
      '@id': 'https://alerthawk.net/#organization',
      name: 'AlertHawk',
      url: 'https://alerthawk.net/',
      logo: 'https://alerthawk.net/logo.png',
      sameAs: [
        'https://github.com/thiagoloureiro/AlertHawk',
        'https://docs.alerthawk.net/',
        'https://www.linkedin.com/in/thiago-loureiro-de-azevedo-dev/',
        'https://artifacthub.io/packages/helm/alerthawk/alerthawk',
        'https://apps.apple.com/us/app/alerthawk/id6739902511',
        'https://play.google.com/store/apps/details?id=net.alerthawk.alerthawk_mobile',
      ],
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://alerthawk.net/#software',
      name: 'AlertHawk',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Web, iOS, Android, Kubernetes',
      description:
        'Self-hosted Kubernetes and infrastructure monitoring with real-time CPU/RAM metrics, uptime checks, multi-channel alerts, and Azure FinOps cost insights.',
      url: 'https://alerthawk.net/',
      image: 'https://alerthawk.net/og-image.png',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        description: 'Open-source, self-hosted deployment',
      },
      provider: { '@id': 'https://alerthawk.net/#organization' },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://alerthawk.net/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is AlertHawk?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AlertHawk is an enterprise-grade monitoring platform for Kubernetes and infrastructure. It provides real-time CPU and RAM metrics, uptime monitoring, intelligent alerting, and instant notifications for DevOps teams.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is AlertHawk free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. AlertHawk is open source and self-hosted at no license cost. You deploy it on your own Kubernetes cluster using the official Helm chart. A hosted option with personalized support is also available.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does AlertHawk support Kubernetes monitoring?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. AlertHawk offers cluster-level and pod-level CPU and memory metrics, multi-cluster visibility, and dashboards for nodes, pods, and namespaces.',
          },
        },
        {
          '@type': 'Question',
          name: 'What notification channels does AlertHawk support?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AlertHawk supports email, SMS, Slack, Discord, Microsoft Teams, Telegram, webhooks, and mobile push notifications.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does AlertHawk include Azure FinOps features?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. AlertHawk can fetch Azure cost and usage metrics, visualize spend trends, and provide AI-assisted recommendations to optimize cloud costs.',
          },
        },
      ],
    },
  ],
} as const;
