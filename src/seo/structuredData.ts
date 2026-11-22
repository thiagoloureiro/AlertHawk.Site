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
        'Self-hosted monitoring for APIs, websites, servers, and Kubernetes — with multi-channel alerts and Azure FinOps.',
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
        'Open-source, self-hosted monitoring: HTTP/TCP uptime, Kubernetes CPU/RAM metrics, multi-channel alerts, Azure FinOps, and mobile apps.',
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
            text: 'AlertHawk is an open-source, self-hosted monitoring platform for APIs, websites, servers, and Kubernetes. It covers uptime checks, cluster CPU/RAM metrics, multi-channel alerts, Azure FinOps, and mobile apps.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is AlertHawk free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. AlertHawk is MIT-licensed and free to self-host. Deploy with Docker images and the official Helm chart. A live demo is available at app.alerthawk.net.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does AlertHawk support Kubernetes monitoring?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. A metrics agent collects node and pod CPU/RAM, stores data in ClickHouse, and provides dashboards by cluster, namespace, and pod.',
          },
        },
        {
          '@type': 'Question',
          name: 'What notification channels does AlertHawk support?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AlertHawk supports email, Slack, Microsoft Teams, Telegram, webhooks, and mobile push notifications.',
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
