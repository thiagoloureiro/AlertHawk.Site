export const pt = {
  nav: {
    home: 'Início',
    advantages: 'Vantagens',
    capabilities: 'Capacidades',
    deploy: 'Deploy',
    pricing: 'Preços',
    contact: 'Contato',
    docs: 'Docs',
  },
  sections: {
    home: 'Início',
    advantages: 'Vantagens',
    capabilities: 'Capacidades',
    proof: 'Produto',
    deploy: 'Deploy',
    pricing: 'Preços',
    contact: 'Contato',
  },
  rail: {
    home: 'Home',
    advantages: 'Por quê',
    capabilities: 'Caps',
    proof: 'Proof',
    deploy: 'Deploy',
    pricing: 'Preço',
    contact: 'Falar',
  },
  hero: {
    brand: 'AlertHawk',
    eyebrow: 'Monitoramento self-hosted',
    title: 'Monitore APIs, sites, servidores e Kubernetes — na sua infraestrutura',
    subtitle:
      'Uptime, métricas de CPU/RAM no Kubernetes, alertas multicanal e FinOps Azure em uma plataforma open source.',
    tryDemo: 'Experimentar demo',
    deployHelm: 'Deploy com Helm',
  },
  advantages: {
    title: 'Por que AlertHawk',
    subtitle:
      'Vantagens objetivas para equipes que precisam de monitoramento próprio — sem lock-in de SaaS.',
    steps: {
      title: 'Como funciona',
      monitor: {
        title: 'Monitorar',
        description: 'HTTP, TCP e saúde do Kubernetes nos intervalos que você define.',
      },
      alert: {
        title: 'Alertar',
        description: 'Notifique Slack, Teams, Telegram, e-mail, webhooks ou push mobile.',
      },
      act: {
        title: 'Agir',
        description: 'Veja uptime, tempos de resposta e métricas no web ou no mobile.',
      },
    },
    items: {
      selfHosted: {
        title: 'Self-hosted, seus dados',
        description:
          'Rode no seu cluster ou VMs. Controle total de dados, retenção e acesso — licença MIT.',
      },
      kubernetes: {
        title: 'Métricas nativas de Kubernetes',
        description:
          'O agent coleta CPU/RAM de nós e pods; armazena no ClickHouse e gera gráficos por cluster, namespace ou pod.',
      },
      uptime: {
        title: 'Uptime HTTP, TCP e APIs',
        description:
          'Disponibilidade e tempo de resposta para sites e endpoints em vários ambientes.',
      },
      alerts: {
        title: 'Alertas onde o time já está',
        description:
          'E-mail, Slack, Microsoft Teams, Telegram, webhooks e push — sem produto de paging extra.',
      },
      finops: {
        title: 'FinOps Azure integrado',
        description:
          'Custos e uso do Azure, breakdowns e sugestões de right-sizing com apoio de IA.',
      },
      mobile: {
        title: 'Dashboard web + apps mobile',
        description:
          'Apps nativos iOS e Android e UI web para status, histórico e alertas.',
      },
    },
  },
  capabilities: {
    title: 'O que você pode monitorar',
    subtitle: 'Capacidades concretas — sem buzzwords.',
    items: {
      http: {
        title: 'Monitores HTTP / HTTPS',
        description: 'Códigos de status, tempo de resposta e janelas de uptime (1h, 24h, 7d).',
      },
      tcp: {
        title: 'Checagens TCP',
        description: 'Valide serviços que não são HTTP — portas e conectividade.',
      },
      k8sHealth: {
        title: 'Nós e pods Kubernetes',
        description: 'Saúde do cluster e CPU/memória em nó, pod e namespace.',
      },
      groups: {
        title: 'Grupos e ambientes',
        description: 'Organize monitores por time, produto ou Production / Staging / QA.',
      },
      channels: {
        title: 'Canais de notificação',
        description: 'E-mail, Slack, Teams, Telegram, webhooks e push mobile.',
      },
      ssl: {
        title: 'SSL e histórico',
        description: 'Expiração de certificados e gráficos de desempenho histórico.',
      },
      metrics: {
        title: 'Pipeline de métricas',
        description: 'Agent → API → ClickHouse para consultas time-series rápidas.',
      },
      auth: {
        title: 'Auth para ops',
        description: 'Usuário/senha ou Microsoft Account / Azure AD.',
      },
      helm: {
        title: 'Deploy com Helm',
        description: 'Charts oficiais no Artifact Hub para instalação em Kubernetes.',
      },
    },
  },
  proof: {
    title: 'Veja no produto',
    subtitle: 'Dashboards reais do AlertHawk — métricas Kubernetes, FinOps e mobile.',
    kubernetes: {
      title: 'Métricas Kubernetes',
      subtitle: 'CPU/RAM de cluster e aplicações em nós, pods e namespaces.',
      cluster: 'Métricas de cluster',
      application: 'Métricas de aplicação',
      overview: 'Visão dos clusters',
    },
    finops: {
      title: 'FinOps Azure',
      subtitle: 'Visão de custos, tendências, detalhamentos e recomendações de IA.',
      overview: 'Visão do portfólio',
      historical: 'Histórico de gastos',
      details: 'Detalhes de custo',
      ai: 'Recomendações de IA',
    },
    mobile: {
      title: 'Mobile',
      subtitle: 'Status, detalhes e alertas no iOS e Android.',
    },
  },
  technology: {
    title: 'Deploy do seu jeito',
    subtitle: 'Microserviços open source com Helm — ou experimente a demo hospedada.',
    kubernetes: {
      title: 'Nativo de Kubernetes',
      description: 'Deploy via Helm e agents que usam a API do Kubernetes.',
    },
    database: {
      title: 'Armazenamento time-series',
      description: 'Métricas no ClickHouse para análise histórica e consultas rápidas.',
    },
    processing: {
      title: 'Serviços modulares',
      description: 'Auth, Monitoring, Notification, Metrics e FinOps como serviços separados.',
    },
    security: {
      title: 'Sua rede, suas regras',
      description: 'Tráfego e dados no seu ambiente; Azure AD quando precisar.',
    },
    deployment: {
      title: 'Instale com Helm',
      description:
        'Adicione o repositório Helm do AlertHawk, configure secrets e instale no cluster.',
      viewHelmChart: 'Ver Helm chart',
    },
    openSource: {
      title: 'Open source no GitHub',
      description: 'Leia o código, abra issues e contribua. Licença MIT.',
      viewGitHub: 'Ver no GitHub',
    },
  },
  pricing: {
    title: 'Preços',
    subtitle: 'Self-hosted é gratuito. Monitores ilimitados na infraestrutura que você controla.',
    openSource: {
      badge: 'Open source',
      price: '$0',
      period: '/para sempre',
      description: 'Faça o deploy você mesmo. Sem taxa por check. Sem limite de seats nosso.',
      unlimited: {
        title: 'Monitoramento ilimitado',
        description: 'Endpoints, clusters e métricas limitados só pelo seu hardware.',
      },
      sourceCode: {
        title: 'Código-fonte completo',
        description: 'Licença MIT — inspecione, modifique e contribua.',
      },
      selfHosted: {
        title: 'Deploy self-hosted',
        description: 'Imagens Docker e charts Helm para o seu ambiente.',
      },
      allFeatures: {
        title: 'Todos os recursos',
        description: 'Uptime, métricas Kubernetes, alertas, FinOps e mobile.',
      },
      community: {
        title: 'Suporte da comunidade',
        description: 'Issues e discussões no GitHub.',
      },
      viewGitHub: 'Ver no GitHub',
      deployHelm: 'Deploy com Helm',
    },
  },
  contact: {
    title: 'Próximos passos',
    subtitle: 'Experimente a demo, faça deploy com Helm ou abra o repositório.',
    github: {
      title: 'GitHub',
      description: 'Código-fonte, issues e contribuições.',
      visit: 'Abrir repositório',
    },
    demo: {
      title: 'Demo ao vivo',
      description: 'Crie uma conta ou entre com uma conta Microsoft.',
      view: 'Abrir demo',
    },
  },
  footer: {
    description: 'Monitoramento self-hosted para APIs, sites, servidores e Kubernetes.',
    connect: 'Conectar',
    privacy: 'Política de Privacidade',
  },
};
