export const es = {
  nav: {
    home: 'Inicio',
    advantages: 'Ventajas',
    capabilities: 'Capacidades',
    deploy: 'Despliegue',
    pricing: 'Precios',
    contact: 'Contacto',
    docs: 'Docs',
  },
  sections: {
    home: 'Inicio',
    advantages: 'Ventajas',
    capabilities: 'Capacidades',
    proof: 'Producto',
    deploy: 'Despliegue',
    pricing: 'Precios',
    contact: 'Contacto',
  },
  rail: {
    home: 'Home',
    advantages: 'Por qué',
    capabilities: 'Caps',
    proof: 'Proof',
    deploy: 'Deploy',
    pricing: 'Precio',
    contact: 'Hablar',
  },
  hero: {
    brand: 'AlertHawk',
    eyebrow: 'Monitorización self-hosted',
    title: 'Monitoriza APIs, sitios, servidores y Kubernetes — en tu infraestructura',
    subtitle:
      'Uptime, métricas CPU/RAM de Kubernetes, alertas multicanal y FinOps Azure en una plataforma open source.',
    tryDemo: 'Probar demo',
    deployHelm: 'Desplegar con Helm',
  },
  advantages: {
    title: 'Por qué AlertHawk',
    subtitle:
      'Ventajas claras para equipos que necesitan monitorización propia — sin lock-in de SaaS.',
    steps: {
      title: 'Cómo funciona',
      monitor: {
        title: 'Monitorizar',
        description: 'HTTP, TCP y salud de Kubernetes en los intervalos que configures.',
      },
      alert: {
        title: 'Alertar',
        description: 'Notifica Slack, Teams, Telegram, email, webhooks o push móvil.',
      },
      act: {
        title: 'Actuar',
        description: 'Revisa uptime, tiempos de respuesta y métricas en web o móvil.',
      },
    },
    items: {
      selfHosted: {
        title: 'Self-hosted, tus datos',
        description:
          'Ejecuta en tu cluster o VMs. Control total de datos, retención y acceso — licencia MIT.',
      },
      kubernetes: {
        title: 'Métricas nativas de Kubernetes',
        description:
          'El agent recoge CPU/RAM de nodos y pods; ClickHouse y gráficos por cluster, namespace o pod.',
      },
      uptime: {
        title: 'Uptime HTTP, TCP y APIs',
        description:
          'Disponibilidad y tiempo de respuesta para sitios y endpoints en varios entornos.',
      },
      alerts: {
        title: 'Alertas donde ya está tu equipo',
        description:
          'Email, Slack, Microsoft Teams, Telegram, webhooks y push — sin producto de paging extra.',
      },
      finops: {
        title: 'FinOps Azure integrado',
        description:
          'Costes y uso de Azure, desgloses y sugerencias de right-sizing con IA.',
      },
      mobile: {
        title: 'Dashboard web + apps móviles',
        description:
          'Apps nativas iOS y Android más UI web para estado, historial y alertas.',
      },
    },
  },
  capabilities: {
    title: 'Qué puedes monitorizar',
    subtitle: 'Capacidades concretas — sin buzzwords.',
    items: {
      http: {
        title: 'Monitores HTTP / HTTPS',
        description: 'Códigos de estado, tiempo de respuesta y ventanas de uptime (1h, 24h, 7d).',
      },
      tcp: {
        title: 'Comprobaciones TCP',
        description: 'Verifica servicios que no son HTTP — puertos y conectividad.',
      },
      k8sHealth: {
        title: 'Nodos y pods Kubernetes',
        description: 'Salud del cluster y CPU/memoria a nivel de nodo, pod y namespace.',
      },
      groups: {
        title: 'Grupos y entornos',
        description: 'Organiza monitores por equipo, producto o Production / Staging / QA.',
      },
      channels: {
        title: 'Canales de notificación',
        description: 'Email, Slack, Teams, Telegram, webhooks y push móvil.',
      },
      ssl: {
        title: 'SSL e historial',
        description: 'Caducidad de certificados y gráficos de rendimiento histórico.',
      },
      metrics: {
        title: 'Pipeline de métricas',
        description: 'Agent → API → ClickHouse para consultas time-series rápidas.',
      },
      auth: {
        title: 'Auth para ops',
        description: 'Usuario/contraseña o Microsoft Account / Azure AD.',
      },
      helm: {
        title: 'Despliegue con Helm',
        description: 'Charts oficiales en Artifact Hub para instalaciones Kubernetes.',
      },
    },
  },
  proof: {
    title: 'Míralo en el producto',
    subtitle: 'Dashboards reales de AlertHawk — métricas Kubernetes, FinOps y móvil.',
    kubernetes: {
      title: 'Métricas Kubernetes',
      subtitle: 'CPU/RAM de cluster y aplicaciones en nodos, pods y namespaces.',
      cluster: 'Métricas de cluster',
      application: 'Métricas de aplicación',
      overview: 'Vista de clusters',
    },
    finops: {
      title: 'FinOps Azure',
      subtitle: 'Visión de costes, tendencias, desgloses y recomendaciones de IA.',
      overview: 'Visión del portafolio',
      historical: 'Gasto histórico',
      details: 'Detalle de costes',
      ai: 'Recomendaciones IA',
    },
    mobile: {
      title: 'Móvil',
      subtitle: 'Estado, detalles y alertas en iOS y Android.',
    },
  },
  technology: {
    title: 'Despliega a tu manera',
    subtitle: 'Microservicios open source con Helm — o prueba la demo alojada.',
    kubernetes: {
      title: 'Nativo de Kubernetes',
      description: 'Despliegue con Helm y agents que usan la API de Kubernetes.',
    },
    database: {
      title: 'Almacenamiento time-series',
      description: 'Métricas en ClickHouse para análisis histórico y consultas rápidas.',
    },
    processing: {
      title: 'Servicios modulares',
      description: 'Auth, Monitoring, Notification, Metrics y FinOps como servicios separados.',
    },
    security: {
      title: 'Tu red, tus reglas',
      description: 'Tráfico y datos en tu entorno; Azure AD cuando lo necesites.',
    },
    deployment: {
      title: 'Instala con Helm',
      description:
        'Añade el repo Helm de AlertHawk, configura secrets e instala en tu cluster.',
      viewHelmChart: 'Ver Helm chart',
    },
    openSource: {
      title: 'Open source en GitHub',
      description: 'Lee el código, abre issues y contribuye. Licencia MIT.',
      viewGitHub: 'Ver en GitHub',
    },
  },
  pricing: {
    title: 'Precios',
    subtitle: 'Self-hosted es gratis. Monitores ilimitados en infraestructura que controlas.',
    openSource: {
      badge: 'Open source',
      price: '$0',
      period: '/para siempre',
      description: 'Despliégalo tú. Sin tarifa por check. Sin límites de seats nuestros.',
      unlimited: {
        title: 'Monitorización ilimitada',
        description: 'Endpoints, clusters y métricas limitados solo por tu hardware.',
      },
      sourceCode: {
        title: 'Código fuente completo',
        description: 'Licencia MIT — inspecciona, modifica y contribuye.',
      },
      selfHosted: {
        title: 'Despliegue self-hosted',
        description: 'Imágenes Docker y charts Helm para tu entorno.',
      },
      allFeatures: {
        title: 'Todas las funciones',
        description: 'Uptime, métricas Kubernetes, alertas, FinOps y móvil.',
      },
      community: {
        title: 'Soporte de la comunidad',
        description: 'Issues y discusiones en GitHub.',
      },
      viewGitHub: 'Ver en GitHub',
      deployHelm: 'Desplegar con Helm',
    },
  },
  contact: {
    title: 'Próximos pasos',
    subtitle: 'Prueba la demo, despliega con Helm o abre el repositorio.',
    github: {
      title: 'GitHub',
      description: 'Código fuente, issues y contribuciones.',
      visit: 'Abrir repositorio',
    },
    demo: {
      title: 'Demo en vivo',
      description: 'Crea una cuenta o inicia sesión con una cuenta Microsoft.',
      view: 'Abrir demo',
    },
  },
  footer: {
    description: 'Monitorización self-hosted para APIs, sitios, servidores y Kubernetes.',
    connect: 'Conectar',
    privacy: 'Política de privacidad',
  },
};
