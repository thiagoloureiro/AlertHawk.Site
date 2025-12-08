export const pt = {
  nav: {
    home: 'Início',
    howItWorks: 'Como Funciona',
    pricing: 'Preços',
    contact: 'Contato',
  },
  hero: {
    title: 'Monitoramento de Classe Empresarial para Kubernetes e Infraestrutura',
    subtitle: 'Métricas de Kubernetes em tempo real, monitoramento de uptime, alertas inteligentes e notificações instantâneas. Construído para equipes DevOps que precisam de visibilidade completa em sua infraestrutura.',
    viewHelmChart: 'Ver Helm Chart',
    goToAlertHawk: 'Ir para AlertHawk',
  },
  kubernetes: {
    title: 'Monitoramento de Infraestrutura Kubernetes',
    subtitle: 'Visibilidade profunda em sua infraestrutura Kubernetes com métricas de CPU e RAM em tempo real, monitoramento de saúde do cluster e rastreamento de utilização de recursos em nós, pods e namespaces.',
    clusterMetrics: {
      title: 'Métricas de Nível de Cluster',
      description: 'Monitoramento de CPU e memória em tempo real em todos os nós do seu cluster. Acompanhe alocação de recursos, tendências de utilização e métricas de planejamento de capacidade.',
    },
    podMetrics: {
      title: 'Métricas de Pod e Container',
      description: 'Rastreamento granular de CPU e RAM no nível de pod e container. Monitore o consumo de recursos por namespace com detalhamentos e dados históricos.',
    },
    multiCluster: {
      title: 'Gerenciamento Multi-Cluster',
      description: 'Visão centralizada de todos os seus clusters Kubernetes. Monitore a saúde do cluster, status de recursos e métricas de desempenho em toda a sua infraestrutura.',
    },
    clusterDashboard: {
      title: 'Dashboard de Métricas do Cluster',
      subtitle: 'Monitore o uso de CPU e memória dos nós em todo o cluster',
    },
    applicationDashboard: {
      title: 'Dashboard de Métricas da Aplicação',
      subtitle: 'Monitore o uso de CPU e memória de pods e containers em namespaces',
    },
    clustersDiagram: {
      title: 'Diagrama de Clusters',
      subtitle: 'Visão supervisória de todos os clusters e seus status',
    },
  },
  features: {
    title: 'Recursos de Monitoramento Empresarial',
    subtitle: 'Capacidades abrangentes de monitoramento projetadas para infraestrutura moderna e ambientes Kubernetes',
    items: {
      kubernetesMetrics: {
        title: 'Métricas de CPU e RAM do Kubernetes',
        description: 'Monitoramento em tempo real do uso de CPU e memória em clusters, nós, pods e namespaces. Acompanhe o consumo de recursos com análises detalhadas e dados históricos.',
      },
      uptime: {
        title: 'Monitoramento de Uptime',
        description: 'Monitoramento contínuo de uptime para sites, APIs e serviços. Receba alertas instantâneos quando a indisponibilidade for detectada com rastreamento de tempo de resposta e métricas de disponibilidade.',
      },
      alerting: {
        title: 'Alertas Inteligentes',
        description: 'Sistema de alertas multicanal com limites configuráveis. Receba notificações por email, SMS, Slack, Discord e webhooks quando problemas forem detectados.',
      },
      notifications: {
        title: 'Notificações em Tempo Real',
        description: 'Notificações push instantâneas para aplicativos móveis e navegadores web. Nunca perca um alerta crítico com atualizações em tempo real sobre o status da sua infraestrutura.',
      },
      analytics: {
        title: 'Métricas e Análises Avançadas',
        description: 'Dashboard abrangente de métricas com gráficos personalizáveis, análise de dados históricos e tendências de desempenho. Monitore tudo, desde a saúde do cluster até o desempenho da aplicação.',
      },
      clusterMonitoring: {
        title: 'Monitoramento de Cluster Kubernetes',
        description: 'Visibilidade completa em sua infraestrutura Kubernetes. Monitore métricas em todo o cluster, saúde dos nós, status dos pods, uso de recursos do namespace e desempenho no nível do container.',
      },
      multiEndpoint: {
        title: 'Monitoramento Multi-endpoint',
        description: 'Monitore sites, APIs REST, endpoints GraphQL e serviços TCP/UDP. Acompanhe tempos de resposta, códigos de status e disponibilidade de vários locais geográficos.',
      },
      issueDetection: {
        title: 'Detecção Proativa de Problemas',
        description: 'Detecção avançada de anomalias e alertas baseados em limites. Identifique degradação de desempenho antes que se torne um problema crítico com monitoramento preditivo.',
      },
      mobileAccess: {
        title: 'Acesso Mobile e Web',
        description: 'Aplicativos nativos iOS e Android além de dashboard web responsivo. Monitore sua infraestrutura de qualquer lugar com atualizações em tempo real e notificações push.',
      },
    },
  },
  benefits: {
    title: 'Por que Escolher AlertHawk?',
    subtitle: 'Solução de monitoramento de classe empresarial projetada para equipes DevOps e engenheiros de infraestrutura',
    items: {
      monitoring: {
        title: 'Monitoramento de Infraestrutura em Tempo Real',
        description: 'Monitore clusters Kubernetes, aplicações e endpoints com latência de sub-segundo. Obtenha visibilidade instantânea em métricas de CPU, RAM e saúde do sistema.',
      },
      alerting: {
        title: 'Alertas Multicanal',
        description: 'Configure alertas via email, SMS, Slack, Discord, webhooks e notificações push. Nunca perca um problema crítico com roteamento inteligente de alertas.',
      },
      analytics: {
        title: 'Análises e Métricas Avançadas',
        description: 'Análise de dados históricos, detecção de tendências e insights de desempenho. Acompanhe padrões de utilização de recursos e otimize sua infraestrutura.',
      },
      selfHosted: {
        title: 'Self-Hosted e Privado',
        description: 'Implante em sua própria infraestrutura com controle total de dados. Sem dependência de fornecedor, privacidade completa e conformidade com seus requisitos de segurança.',
      },
      scalability: {
        title: 'Escalabilidade Empresarial',
        description: 'Construído para lidar com milhares de métricas e endpoints. Arquitetura escalável horizontalmente que cresce com as necessidades da sua infraestrutura.',
      },
      notifications: {
        title: 'Notificações de Baixa Latência',
        description: 'Notificações push instantâneas para mobile e web. Seja alertado em segundos após a detecção de um problema com atualizações de status em tempo real.',
      },
    },
  },
  technology: {
    title: 'Construído com Tecnologia Moderna',
    subtitle: 'Aproveitando tecnologias de ponta para monitoramento de infraestrutura confiável, escalável e performático',
    kubernetes: {
      title: 'Nativo Kubernetes',
      description: 'Construído para Kubernetes com implantação via Helm chart. Integração nativa com a API do Kubernetes para monitoramento perfeito do cluster.',
    },
    database: {
      title: 'Banco de Dados Time-Series',
      description: 'Armazenamento e consulta eficientes de dados de métricas com arquitetura de banco de dados time-series otimizada para análise histórica.',
    },
    processing: {
      title: 'Processamento em Tempo Real',
      description: 'Motor de coleta e processamento de métricas de baixa latência para monitoramento em tempo real e acionamento instantâneo de alertas.',
    },
    security: {
      title: 'Seguro e Escalável',
      description: 'Segurança de classe empresarial com RBAC, comunicações criptografadas e capacidades de escalonamento horizontal.',
    },
    deployment: {
      title: 'Implantação Kubernetes',
      description: 'Implante o AlertHawk em seu cluster Kubernetes com nosso Helm chart oficial. Suporta todas as principais distribuições Kubernetes e provedores de nuvem.',
      viewHelmChart: 'Ver Helm Chart',
    },
    openSource: {
      title: 'Código Aberto',
      description: 'Construído com transparência em mente. Veja o código-fonte, contribua e personalize o AlertHawk para atender às suas necessidades específicas de monitoramento.',
      viewGitHub: 'Ver no GitHub',
    },
  },
  pricing: {
    title: 'Escolha Seu Plano',
    subtitle: 'Self-hosted e gratuito, ou deixe-nos cuidar de tudo com nossa oferta SaaS gerenciada.',
    openSource: {
      badge: 'Código Aberto',
      price: '$0',
      period: '/para sempre',
      description: 'Self-hosted e completamente gratuito. Implante em sua infraestrutura com controle total.',
      unlimited: {
        title: 'Monitoramento Ilimitado',
        description: 'Monitore endpoints, clusters e métricas ilimitados',
      },
      sourceCode: {
        title: 'Acesso Completo ao Código-Fonte',
        description: 'Visualize, modifique e contribua para o código',
      },
      selfHosted: {
        title: 'Implantação Self-Hosted',
        description: 'Controle total de dados em sua infraestrutura',
      },
      allFeatures: {
        title: 'Todos os Recursos Incluídos',
        description: 'Monitoramento Kubernetes, alertas, notificações e muito mais',
      },
      community: {
        title: 'Suporte da Comunidade',
        description: 'Comunidade ativa e discussões no GitHub',
      },
      viewGitHub: 'Ver no GitHub',
      deployHelm: 'Implantar com Helm',
    },
    saas: {
      badge: 'SaaS Gerenciado',
      popular: 'POPULAR',
      price: 'Personalizado',
      description: 'Hospedado em nossa infraestrutura com suporte personalizado. Entre em contato para preços.',
      hosted: {
        title: 'Hospedado em Nossa Infraestrutura',
        description: 'Nós gerenciamos a infraestrutura, você foca no monitoramento',
      },
      support: {
        title: 'Suporte Personalizado',
        description: 'Equipe de suporte dedicada com assistência prioritária',
      },
      allFeatures: {
        title: 'Todos os Recursos Incluídos',
        description: 'Acesso completo a todos os recursos de monitoramento e alertas',
      },
      maintenance: {
        title: 'Atualizações e Manutenção Gerenciadas',
        description: 'Nós cuidamos de todas as atualizações, backups e manutenção',
      },
      sla: {
        title: 'Garantia SLA',
        description: 'Acordos de nível de serviço para uptime e suporte',
      },
      customConfig: {
        title: 'Configuração Personalizada',
        description: 'Configuração sob medida para atender aos seus requisitos específicos',
      },
      contactUs: 'Entre em Contato para Preços',
    },
  },
  contact: {
    title: 'Entre em Contato',
    subtitle: 'Tem perguntas, precisa de suporte ou quer contribuir? Adoraríamos ouvir de você.',
    github: {
      title: 'GitHub',
      description: 'Veja o código-fonte, relate problemas ou contribua para o projeto.',
      visit: 'Visitar GitHub',
    },
    demo: {
      title: 'Demonstração ao Vivo',
      description: 'Experimente o AlertHawk em ação. Explore o dashboard e veja todos os recursos.',
      view: 'Ver Demonstração',
    },
    form: {
      title: 'Entre em Contato para Preços',
      subtitle: 'Para preços SaaS, suporte e consultas',
      email: 'Seu Email',
      emailPlaceholder: 'seu.email@exemplo.com',
      message: 'Sua Mensagem',
      messagePlaceholder: 'Conte-nos sobre suas necessidades, perguntas ou como podemos ajudar...',
      send: 'Enviar Mensagem',
      sending: 'Enviando...',
      success: {
        title: 'Mensagem Enviada!',
        description: 'Entraremos em contato o mais breve possível.',
      },
      error: 'Algo deu errado. Por favor, tente novamente ou envie um email diretamente para alerthawk@alerthawk.net',
    },
  },
  footer: {
    description: 'Soluções de monitoramento modernas para aplicações modernas.',
    connect: 'Conectar',
  },
  howItWorks: {
    title: 'Como Funciona',
    subtitle: 'Veja como o AlertHawk monitora sua infraestrutura e mantém você informado',
    monitoring: {
      title: 'Monitoramento de Websites',
      description: 'Monitore seus websites e APIs com intervalos configuráveis e alertas instantâneos',
      example: {
        title: 'Exemplo de Monitoramento',
        website: 'www.google.com',
        interval: 'A cada 1 minuto (configurável)',
        description: 'A aplicação monitora o website configurado a cada minuto. De acordo com o código de resposta recebido, o sistema pode enviar alertas para múltiplos canais.',
      },
      channels: {
        title: 'Canais de Alerta',
        teams: 'Teams',
        telegram: 'Telegram',
        slack: 'Slack',
        email: 'Email',
        webhook: 'Webhook',
        push: 'Notificação Push',
      },
      flow: {
        monitoring: 'Monitoramento',
        checking: 'Verificando Status',
        success: 'Status: OK',
        failed: 'Status: Falhou',
        alert: 'Enviando Alerta',
      },
    },
    metrics: {
      title: 'Monitoramento de Métricas Kubernetes',
      description: 'Monitore seus clusters Kubernetes com métricas de CPU e RAM em tempo real',
      agent: {
        title: 'Agente do Cluster',
        description: 'Um agente instalado no seu cluster Kubernetes coleta métricas de nós e pods nos namespaces selecionados.',
      },
      connection: {
        title: 'Conexão Fácil de Clusters',
        description: 'Conecte qualquer novo cluster para enviar dados ao servidor AlertHawk com apenas alguns cliques.',
      },
      storage: {
        title: 'Banco de Dados ClickHouse Rápido',
        description: 'As métricas são armazenadas em um banco de dados ClickHouse rápido otimizado para dados de séries temporais e consultas rápidas.',
      },
      visualization: {
        title: 'Gráficos e Dashboards',
        description: 'Gráficos e dashboards bonitos fornecem insights em tempo real sobre o desempenho do seu cluster.',
      },
    },
  },
};
