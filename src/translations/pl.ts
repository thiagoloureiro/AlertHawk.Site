export const pl = {
  nav: {
    home: 'Start',
    advantages: 'Zalety',
    capabilities: 'Możliwości',
    deploy: 'Wdrożenie',
    pricing: 'Cennik',
    contact: 'Kontakt',
    docs: 'Docs',
  },
  sections: {
    home: 'Start',
    advantages: 'Zalety',
    capabilities: 'Możliwości',
    proof: 'Produkt',
    deploy: 'Wdrożenie',
    pricing: 'Cennik',
    contact: 'Kontakt',
  },
  rail: {
    home: 'Home',
    advantages: 'Dlaczego',
    capabilities: 'Caps',
    proof: 'Proof',
    deploy: 'Deploy',
    pricing: 'Cena',
    contact: 'Kontakt',
  },
  hero: {
    brand: 'AlertHawk',
    eyebrow: 'Self-hosted monitoring',
    title: 'Monitoruj API, strony, serwery i Kubernetes — na swojej infrastrukturze',
    subtitle:
      'Uptime, metryki CPU/RAM Kubernetes, alerty wielokanałowe i Azure FinOps w jednej platformie open source.',
    tryDemo: 'Wypróbuj demo',
    deployHelm: 'Wdróż przez Helm',
  },
  advantages: {
    title: 'Dlaczego AlertHawk',
    subtitle:
      'Konkretne zalety dla zespołów, które chcą własny monitoring — bez lock-inu SaaS.',
    steps: {
      title: 'Jak to działa',
      monitor: {
        title: 'Monitoruj',
        description: 'HTTP, TCP i zdrowie Kubernetes w interwałach, które ustawisz.',
      },
      alert: {
        title: 'Alertuj',
        description: 'Powiadom Slack, Teams, Telegram, e-mail, webhooki lub push mobile.',
      },
      act: {
        title: 'Działaj',
        description: 'Sprawdź uptime, czasy odpowiedzi i metryki w webie lub mobile.',
      },
    },
    items: {
      selfHosted: {
        title: 'Self-hosted, Twoje dane',
        description:
          'Uruchom na klastrze lub VM. Pełna kontrola danych, retencji i dostępu — licencja MIT.',
      },
      kubernetes: {
        title: 'Natywne metryki Kubernetes',
        description:
          'Agent zbiera CPU/RAM węzłów i podów; ClickHouse i wykresy wg klastra, namespace lub poda.',
      },
      uptime: {
        title: 'Uptime HTTP, TCP i API',
        description:
          'Dostępność i czas odpowiedzi stron oraz endpointów w wielu środowiskach.',
      },
      alerts: {
        title: 'Alerty tam, gdzie jest zespół',
        description:
          'E-mail, Slack, Microsoft Teams, Telegram, webhooki i push — bez osobnego pagingu.',
      },
      finops: {
        title: 'Wbudowany Azure FinOps',
        description:
          'Koszty i użycie Azure, podziały wydatków oraz sugestie right-sizing z AI.',
      },
      mobile: {
        title: 'Dashboard web + aplikacje mobilne',
        description:
          'Natywne aplikacje iOS i Android oraz UI web: status, historia i alerty.',
      },
    },
  },
  capabilities: {
    title: 'Co możesz monitorować',
    subtitle: 'Konkretne możliwości — bez buzzwordów.',
    items: {
      http: {
        title: 'Monitory HTTP / HTTPS',
        description: 'Kody statusu, czas odpowiedzi i okna uptime (1h, 24h, 7d).',
      },
      tcp: {
        title: 'Sprawdzanie TCP',
        description: 'Weryfikuj usługi inne niż HTTP — porty i łączność.',
      },
      k8sHealth: {
        title: 'Węzły i pody Kubernetes',
        description: 'Zdrowie klastra oraz CPU/pamięć na poziomie węzła, poda i namespace.',
      },
      groups: {
        title: 'Grupowanie i środowiska',
        description: 'Organizuj monitory wg zespołu, produktu lub Production / Staging / QA.',
      },
      channels: {
        title: 'Kanały powiadomień',
        description: 'E-mail, Slack, Teams, Telegram, webhooki i push mobile.',
      },
      ssl: {
        title: 'SSL i historia',
        description: 'Wygaśnięcie certyfikatów i historyczne wykresy wydajności.',
      },
      metrics: {
        title: 'Pipeline metryk',
        description: 'Agent → API → ClickHouse dla szybkich zapytań time-series.',
      },
      auth: {
        title: 'Auth pod ops',
        description: 'Login/hasło lub Microsoft Account / Azure AD.',
      },
      helm: {
        title: 'Wdrożenie Helm',
        description: 'Oficjalne charty na Artifact Hub do instalacji na Kubernetes.',
      },
    },
  },
  proof: {
    title: 'Zobacz w produkcie',
    subtitle: 'Prawdziwe dashboardy AlertHawk — metryki Kubernetes, FinOps i mobile.',
    kubernetes: {
      title: 'Metryki Kubernetes',
      subtitle: 'CPU/RAM klastra i aplikacji na węzłach, podach i namespace’ach.',
      cluster: 'Metryki klastra',
      application: 'Metryki aplikacji',
      overview: 'Przegląd klastrów',
    },
    finops: {
      title: 'Azure FinOps',
      subtitle: 'Przegląd kosztów, trendy, podziały i rekomendacje AI.',
      overview: 'Przegląd portfolio',
      historical: 'Historia wydatków',
      details: 'Szczegóły kosztów',
      ai: 'Rekomendacje AI',
    },
    mobile: {
      title: 'Mobile',
      subtitle: 'Status, szczegóły i alerty na iOS i Android.',
    },
  },
  technology: {
    title: 'Wdróż na swoich zasadach',
    subtitle: 'Mikrousługi open source przez Helm — albo najpierw wypróbuj hostowane demo.',
    kubernetes: {
      title: 'Natywny Kubernetes',
      description: 'Wdrożenie Helm i agenty korzystające z API Kubernetes.',
    },
    database: {
      title: 'Magazyn time-series',
      description: 'Metryki w ClickHouse do analizy historycznej i szybkich zapytań.',
    },
    processing: {
      title: 'Modułowe usługi',
      description: 'Auth, Monitoring, Notification, Metrics i FinOps jako osobne serwisy.',
    },
    security: {
      title: 'Twoja sieć, Twoje reguły',
      description: 'Ruch i dane w Twoim środowisku; Azure AD gdy potrzeba.',
    },
    deployment: {
      title: 'Instalacja Helm',
      description:
        'Dodaj repo Helm AlertHawk, ustaw sekrety i zainstaluj na klastrze.',
      viewHelmChart: 'Zobacz Helm chart',
    },
    openSource: {
      title: 'Open source na GitHub',
      description: 'Czytaj kod, otwieraj issue i współtwórz. Licencja MIT.',
      viewGitHub: 'Zobacz na GitHub',
    },
  },
  pricing: {
    title: 'Cennik',
    subtitle: 'Self-hosted jest darmowy. Nieograniczone monitory na Twojej infrastrukturze.',
    openSource: {
      badge: 'Open source',
      price: '$0',
      period: '/na zawsze',
      description: 'Wdróż samodzielnie. Bez opłat za check. Bez limitów seatów z naszej strony.',
      unlimited: {
        title: 'Nieograniczony monitoring',
        description: 'Endpointy, klastry i metryki ograniczone tylko sprzętem.',
      },
      sourceCode: {
        title: 'Pełny dostęp do kodu',
        description: 'Licencja MIT — przeglądaj, zmieniaj i współtwórz.',
      },
      selfHosted: {
        title: 'Wdrożenie self-hosted',
        description: 'Obrazy Docker i charty Helm dla Twojego środowiska.',
      },
      allFeatures: {
        title: 'Wszystkie funkcje produktu',
        description: 'Uptime, metryki Kubernetes, alerty, FinOps i mobile.',
      },
      community: {
        title: 'Wsparcie społeczności',
        description: 'Issue i dyskusje na GitHub.',
      },
      viewGitHub: 'Zobacz na GitHub',
      deployHelm: 'Wdróż przez Helm',
    },
  },
  contact: {
    title: 'Kolejne kroki',
    subtitle: 'Wypróbuj demo, wdróż przez Helm lub otwórz repozytorium.',
    github: {
      title: 'GitHub',
      description: 'Kod źródłowy, issue i kontrybucje.',
      visit: 'Otwórz repozytorium',
    },
    demo: {
      title: 'Live demo',
      description: 'Utwórz konto lub zaloguj się kontem Microsoft.',
      view: 'Otwórz demo',
    },
  },
  footer: {
    description: 'Self-hosted monitoring API, stron, serwerów i Kubernetes.',
    connect: 'Połącz',
    privacy: 'Polityka prywatności',
  },
};
