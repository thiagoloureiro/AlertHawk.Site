export const de = {
  nav: {
    home: 'Start',
    advantages: 'Vorteile',
    capabilities: 'Funktionen',
    deploy: 'Deploy',
    pricing: 'Preise',
    contact: 'Kontakt',
    docs: 'Docs',
  },
  sections: {
    home: 'Start',
    advantages: 'Vorteile',
    capabilities: 'Funktionen',
    proof: 'Produkt',
    deploy: 'Deploy',
    pricing: 'Preise',
    contact: 'Kontakt',
  },
  rail: {
    home: 'Home',
    advantages: 'Warum',
    capabilities: 'Caps',
    proof: 'Proof',
    deploy: 'Deploy',
    pricing: 'Preis',
    contact: 'Kontakt',
  },
  hero: {
    brand: 'AlertHawk',
    eyebrow: 'Self-hosted Monitoring',
    title: 'APIs, Websites, Server und Kubernetes überwachen — auf Ihrer Infrastruktur',
    subtitle:
      'Uptime-Checks, Kubernetes-CPU/RAM-Metriken, Multi-Channel-Alerts und Azure FinOps in einer Open-Source-Plattform.',
    tryDemo: 'Demo testen',
    deployHelm: 'Mit Helm deployen',
  },
  advantages: {
    title: 'Warum AlertHawk',
    subtitle:
      'Klare Vorteile für Teams, die Monitoring selbst betreiben wollen — ohne SaaS-Lock-in.',
    steps: {
      title: 'So funktioniert es',
      monitor: {
        title: 'Überwachen',
        description: 'HTTP, TCP und Kubernetes-Gesundheit in Ihren Intervallen.',
      },
      alert: {
        title: 'Alarmieren',
        description: 'Slack, Teams, Telegram, E-Mail, Webhooks oder Mobile-Push.',
      },
      act: {
        title: 'Handeln',
        description: 'Uptime, Antwortzeiten und Cluster-Metriken in Web oder Mobile prüfen.',
      },
    },
    items: {
      selfHosted: {
        title: 'Self-hosted, Ihre Daten',
        description:
          'Auf Cluster oder VMs. Volle Kontrolle über Daten, Retention und Zugriff — MIT-Lizenz.',
      },
      kubernetes: {
        title: 'Kubernetes-native Metriken',
        description:
          'Agent sammelt Node-/Pod-CPU/RAM; Speicherung in ClickHouse, Charts nach Cluster, Namespace oder Pod.',
      },
      uptime: {
        title: 'HTTP-, TCP- und API-Uptime',
        description:
          'Verfügbarkeit und Antwortzeit für Websites und Endpunkte über Umgebungen hinweg.',
      },
      alerts: {
        title: 'Alerts dort, wo Ihr Team ist',
        description:
          'E-Mail, Slack, Microsoft Teams, Telegram, Webhooks und Push — ohne extra Paging-Produkt.',
      },
      finops: {
        title: 'Azure FinOps integriert',
        description:
          'Azure-Kosten und -Nutzung, Aufschlüsselungen und KI-gestützte Right-Sizing-Ideen.',
      },
      mobile: {
        title: 'Web-Dashboard + Mobile Apps',
        description:
          'Native iOS- und Android-Apps plus Web-UI für Status, Historie und Alerts.',
      },
    },
  },
  capabilities: {
    title: 'Was Sie überwachen können',
    subtitle: 'Konkrete Fähigkeiten — keine Buzzwords.',
    items: {
      http: {
        title: 'HTTP-/HTTPS-Monitore',
        description: 'Statuscodes, Antwortzeit und Uptime-Fenster (1h, 24h, 7d).',
      },
      tcp: {
        title: 'TCP-Endpunkt-Checks',
        description: 'Dienste prüfen, die nicht HTTP sind — Ports und Konnektivität.',
      },
      k8sHealth: {
        title: 'Kubernetes Nodes & Pods',
        description: 'Cluster-Gesundheit sowie CPU/RAM auf Node-, Pod- und Namespace-Ebene.',
      },
      groups: {
        title: 'Gruppen & Umgebungen',
        description: 'Monitore nach Team, Produkt oder Production / Staging / QA organisieren.',
      },
      channels: {
        title: 'Benachrichtigungskanäle',
        description: 'E-Mail, Slack, Teams, Telegram, Webhooks und Mobile-Push.',
      },
      ssl: {
        title: 'SSL & Historie',
        description: 'Zertifikatsablauf und historische Performance-Charts.',
      },
      metrics: {
        title: 'Metriken-Pipeline',
        description: 'Metrics-Agent → API → ClickHouse für schnelle Time-Series-Abfragen.',
      },
      auth: {
        title: 'Auth für Ops',
        description: 'Benutzer/Passwort oder Microsoft Account / Azure AD.',
      },
      helm: {
        title: 'Helm-ready Deploy',
        description: 'Offizielle Charts auf Artifact Hub für Kubernetes-Installationen.',
      },
    },
  },
  proof: {
    title: 'Im Produkt sehen',
    subtitle: 'Echte Dashboards aus AlertHawk — Kubernetes-Metriken, FinOps und Mobile.',
    kubernetes: {
      title: 'Kubernetes-Metriken',
      subtitle: 'Cluster- und Anwendungs-CPU/RAM über Nodes, Pods und Namespaces.',
      cluster: 'Cluster-Metriken',
      application: 'Anwendungs-Metriken',
      overview: 'Cluster-Übersicht',
    },
    finops: {
      title: 'Azure FinOps',
      subtitle: 'Kostenübersicht, Trends, Aufschlüsselungen und KI-Empfehlungen.',
      overview: 'Portfolio-Übersicht',
      historical: 'Historische Kosten',
      details: 'Kostendetails',
      ai: 'KI-Empfehlungen',
    },
    mobile: {
      title: 'Mobile',
      subtitle: 'Status, Details und Alerts auf iOS und Android.',
    },
  },
  technology: {
    title: 'Deploy nach Ihren Regeln',
    subtitle: 'Open-Source-Microservices mit Helm — oder zuerst die gehostete Demo testen.',
    kubernetes: {
      title: 'Kubernetes-nativ',
      description: 'Helm-Chart-Deploy und Agents, die die Kubernetes-API sprechen.',
    },
    database: {
      title: 'Time-Series-Speicher',
      description: 'ClickHouse-Metriken für historische Analyse und schnelle Abfragen.',
    },
    processing: {
      title: 'Modulare Services',
      description: 'Auth, Monitoring, Notification, Metrics und FinOps als getrennte Services.',
    },
    security: {
      title: 'Ihr Netz, Ihre Regeln',
      description: 'Traffic und Daten in Ihrer Umgebung; Azure AD bei Bedarf.',
    },
    deployment: {
      title: 'Mit Helm installieren',
      description:
        'AlertHawk-Helm-Repo hinzufügen, Secrets setzen und auf dem Cluster installieren.',
      viewHelmChart: 'Helm-Chart ansehen',
    },
    openSource: {
      title: 'Open Source auf GitHub',
      description: 'Code lesen, Issues öffnen und beitragen. MIT-Lizenz.',
      viewGitHub: 'Auf GitHub ansehen',
    },
  },
  pricing: {
    title: 'Preise',
    subtitle: 'Self-hosted ist kostenlos. Unbegrenzte Monitore auf Ihrer Infrastruktur.',
    openSource: {
      badge: 'Open Source',
      price: '$0',
      period: '/für immer',
      description: 'Selbst deployen. Keine Gebühr pro Check. Keine Seat-Limits von uns.',
      unlimited: {
        title: 'Unbegrenztes Monitoring',
        description: 'Endpunkte, Cluster und Metriken nur durch Ihre Hardware begrenzt.',
      },
      sourceCode: {
        title: 'Voller Quellcode',
        description: 'MIT-Lizenz — prüfen, ändern und beitragen.',
      },
      selfHosted: {
        title: 'Self-hosted Deployment',
        description: 'Docker-Images und Helm-Charts für Ihre Umgebung.',
      },
      allFeatures: {
        title: 'Alle Produktfunktionen',
        description: 'Uptime, Kubernetes-Metriken, Alerts, FinOps und Mobile.',
      },
      community: {
        title: 'Community-Support',
        description: 'GitHub Issues und Diskussionen.',
      },
      viewGitHub: 'Auf GitHub ansehen',
      deployHelm: 'Mit Helm deployen',
    },
  },
  contact: {
    title: 'Nächste Schritte',
    subtitle: 'Demo testen, mit Helm deployen oder das Repo öffnen.',
    github: {
      title: 'GitHub',
      description: 'Quellcode, Issues und Beiträge.',
      visit: 'Repository öffnen',
    },
    demo: {
      title: 'Live-Demo',
      description: 'Konto erstellen oder mit Microsoft-Konto anmelden.',
      view: 'Demo öffnen',
    },
  },
  footer: {
    description: 'Self-hosted Monitoring für APIs, Websites, Server und Kubernetes.',
    connect: 'Verbinden',
    privacy: 'Datenschutz',
  },
};
