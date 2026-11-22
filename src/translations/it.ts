export const it = {
  nav: {
    home: 'Home',
    advantages: 'Vantaggi',
    capabilities: 'Capacità',
    deploy: 'Deploy',
    pricing: 'Prezzi',
    contact: 'Contatti',
    docs: 'Docs',
  },
  sections: {
    home: 'Home',
    advantages: 'Vantaggi',
    capabilities: 'Capacità',
    proof: 'Prodotto',
    deploy: 'Deploy',
    pricing: 'Prezzi',
    contact: 'Contatti',
  },
  rail: {
    home: 'Home',
    advantages: 'Perché',
    capabilities: 'Caps',
    proof: 'Proof',
    deploy: 'Deploy',
    pricing: 'Prezzo',
    contact: 'Contatti',
  },
  hero: {
    brand: 'AlertHawk',
    eyebrow: 'Monitoring self-hosted',
    title: 'Monitora API, siti, server e Kubernetes — sulla tua infrastruttura',
    subtitle:
      'Uptime, metriche CPU/RAM Kubernetes, alert multi-canale e FinOps Azure in una piattaforma open source.',
    tryDemo: 'Prova la demo',
    deployHelm: 'Deploy con Helm',
  },
  advantages: {
    title: 'Perché AlertHawk',
    subtitle:
      'Vantaggi chiari per team che vogliono monitoring di proprietà — senza lock-in SaaS.',
    steps: {
      title: 'Come funziona',
      monitor: {
        title: 'Monitora',
        description: 'HTTP, TCP e salute Kubernetes agli intervalli che configuri.',
      },
      alert: {
        title: 'Avvisa',
        description: 'Notifica Slack, Teams, Telegram, email, webhook o push mobile.',
      },
      act: {
        title: 'Agisci',
        description: 'Controlla uptime, tempi di risposta e metriche su web o mobile.',
      },
    },
    items: {
      selfHosted: {
        title: 'Self-hosted, i tuoi dati',
        description:
          'Esegui su cluster o VM. Controllo totale di dati, retention e accessi — licenza MIT.',
      },
      kubernetes: {
        title: 'Metriche native Kubernetes',
        description:
          "L'agent raccoglie CPU/RAM di nodi e pod; ClickHouse e grafici per cluster, namespace o pod.",
      },
      uptime: {
        title: 'Uptime HTTP, TCP e API',
        description:
          'Disponibilità e tempo di risposta per siti ed endpoint su più ambienti.',
      },
      alerts: {
        title: 'Alert dove è già il team',
        description:
          'Email, Slack, Microsoft Teams, Telegram, webhook e push — senza prodotto di paging extra.',
      },
      finops: {
        title: 'FinOps Azure integrato',
        description:
          'Costi e utilizzo Azure, breakdown e idee di right-sizing con supporto IA.',
      },
      mobile: {
        title: 'Dashboard web + app mobile',
        description:
          'App native iOS e Android più UI web per stato, storico e alert.',
      },
    },
  },
  capabilities: {
    title: 'Cosa puoi monitorare',
    subtitle: 'Capacità concrete — senza buzzword.',
    items: {
      http: {
        title: 'Monitor HTTP / HTTPS',
        description: 'Codici di stato, tempo di risposta e finestre di uptime (1h, 24h, 7d).',
      },
      tcp: {
        title: 'Check TCP',
        description: 'Verifica servizi non HTTP — porte e connettività.',
      },
      k8sHealth: {
        title: 'Nodi e pod Kubernetes',
        description: 'Salute del cluster e CPU/memoria a livello di nodo, pod e namespace.',
      },
      groups: {
        title: 'Gruppi e ambienti',
        description: 'Organizza i monitor per team, prodotto o Production / Staging / QA.',
      },
      channels: {
        title: 'Canali di notifica',
        description: 'Email, Slack, Teams, Telegram, webhook e push mobile.',
      },
      ssl: {
        title: 'SSL e storico',
        description: 'Scadenza certificati e grafici di performance storica.',
      },
      metrics: {
        title: 'Pipeline metriche',
        description: 'Agent → API → ClickHouse per query time-series veloci.',
      },
      auth: {
        title: 'Auth per ops',
        description: 'Username/password o Microsoft Account / Azure AD.',
      },
      helm: {
        title: 'Deploy con Helm',
        description: 'Chart ufficiali su Artifact Hub per installazioni Kubernetes.',
      },
    },
  },
  proof: {
    title: 'Guardalo nel prodotto',
    subtitle: 'Dashboard reali di AlertHawk — metriche Kubernetes, FinOps e mobile.',
    kubernetes: {
      title: 'Metriche Kubernetes',
      subtitle: 'CPU/RAM di cluster e applicazioni su nodi, pod e namespace.',
      cluster: 'Metriche cluster',
      application: 'Metriche applicazione',
      overview: 'Panoramica cluster',
    },
    finops: {
      title: 'FinOps Azure',
      subtitle: 'Panoramica costi, trend, breakdown e raccomandazioni IA.',
      overview: 'Panoramica portfolio',
      historical: 'Spesa storica',
      details: 'Dettaglio costi',
      ai: 'Raccomandazioni IA',
    },
    mobile: {
      title: 'Mobile',
      subtitle: 'Stato, dettagli e alert su iOS e Android.',
    },
  },
  technology: {
    title: 'Deploy alle tue condizioni',
    subtitle: 'Microservizi open source con Helm — o prova prima la demo ospitata.',
    kubernetes: {
      title: 'Nativo Kubernetes',
      description: 'Deploy con Helm e agent che usano la API Kubernetes.',
    },
    database: {
      title: 'Storage time-series',
      description: 'Metriche su ClickHouse per analisi storica e query veloci.',
    },
    processing: {
      title: 'Servizi modulari',
      description: 'Auth, Monitoring, Notification, Metrics e FinOps come servizi separati.',
    },
    security: {
      title: 'La tua rete, le tue regole',
      description: 'Traffico e dati nel tuo ambiente; Azure AD quando serve.',
    },
    deployment: {
      title: 'Installa con Helm',
      description:
        'Aggiungi il repo Helm AlertHawk, imposta i secret e installa sul cluster.',
      viewHelmChart: 'Vedi Helm chart',
    },
    openSource: {
      title: 'Open source su GitHub',
      description: 'Leggi il codice, apri issue e contribuisci. Licenza MIT.',
      viewGitHub: 'Vedi su GitHub',
    },
  },
  pricing: {
    title: 'Prezzi',
    subtitle: 'Self-hosted è gratis. Monitor illimitati sull’infrastruttura che controlli.',
    openSource: {
      badge: 'Open source',
      price: '$0',
      period: '/per sempre',
      description: 'Deploy fai da te. Nessun costo per check. Nessun limite di seat da noi.',
      unlimited: {
        title: 'Monitoring illimitato',
        description: 'Endpoint, cluster e metriche limitati solo dal tuo hardware.',
      },
      sourceCode: {
        title: 'Accesso completo al codice',
        description: 'Licenza MIT — ispeziona, modifica e contribuisci.',
      },
      selfHosted: {
        title: 'Deploy self-hosted',
        description: 'Immagini Docker e chart Helm per il tuo ambiente.',
      },
      allFeatures: {
        title: 'Tutte le funzioni',
        description: 'Uptime, metriche Kubernetes, alert, FinOps e mobile.',
      },
      community: {
        title: 'Supporto community',
        description: 'Issue e discussion su GitHub.',
      },
      viewGitHub: 'Vedi su GitHub',
      deployHelm: 'Deploy con Helm',
    },
  },
  contact: {
    title: 'Prossimi passi',
    subtitle: 'Prova la demo, fai deploy con Helm o apri il repository.',
    github: {
      title: 'GitHub',
      description: 'Codice sorgente, issue e contributi.',
      visit: 'Apri repository',
    },
    demo: {
      title: 'Demo live',
      description: 'Crea un account o accedi con un account Microsoft.',
      view: 'Apri demo',
    },
  },
  footer: {
    description: 'Monitoring self-hosted per API, siti, server e Kubernetes.',
    connect: 'Connetti',
    privacy: 'Privacy Policy',
  },
};
