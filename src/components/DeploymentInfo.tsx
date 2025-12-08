import React from 'react';
import { Github, Container, ArrowRight, Code, Database, Network, Shield } from 'lucide-react';

const technologies = [
  {
    icon: Container,
    title: 'Kubernetes Native',
    description: 'Built for Kubernetes with Helm chart deployment. Native integration with Kubernetes API for seamless cluster monitoring.',
    iconClass: 'text-blue-500'
  },
  {
    icon: Database,
    title: 'Time-Series Database',
    description: 'Efficient storage and querying of metrics data with optimized time-series database architecture for historical analysis.',
    iconClass: 'text-purple-500'
  },
  {
    icon: Network,
    title: 'Real-time Processing',
    description: 'Low-latency metric collection and processing engine for real-time monitoring and instant alert triggering.',
    iconClass: 'text-green-500'
  },
  {
    icon: Shield,
    title: 'Secure & Scalable',
    description: 'Enterprise-grade security with RBAC, encrypted communications, and horizontal scaling capabilities.',
    iconClass: 'text-yellow-500'
  }
];

export function DeploymentInfo() {
  return (
    <section className="py-20 bg-gray-800/50 relative">
      <div className="background-glow opacity-50" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-up">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-700/20 mb-6">
            <Code className="w-8 h-8 text-purple-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Built with Modern Technology
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leveraging cutting-edge technologies for reliable, scalable, and performant infrastructure monitoring
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="glass-card p-6 rounded-xl hover:border-purple-500/50 transition-all duration-300 fade-up"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <tech.icon className={`w-10 h-10 ${tech.iconClass} mb-4`} />
              <h3 className="text-lg font-semibold mb-2 text-white">{tech.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{tech.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card p-6 rounded-xl fade-up" style={{ transitionDelay: '400ms' }}>
            <div className="flex items-start space-x-4">
              <Container className="w-8 h-8 text-blue-500 shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Kubernetes Deployment</h3>
                <p className="text-gray-300 mb-4">
                  Deploy AlertHawk on your Kubernetes cluster with our official Helm chart. 
                  Supports all major Kubernetes distributions and cloud providers.
                </p>
                <a 
                  href="https://artifacthub.io/packages/helm/alerthawk/alerthawk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center"
                >
                  View Helm Chart
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 rounded-xl fade-up" style={{ transitionDelay: '500ms' }}>
            <div className="flex items-start space-x-4">
              <Github className="w-8 h-8 text-purple-500 shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Open Source</h3>
                <p className="text-gray-300 mb-4">
                  Built with transparency in mind. View the source code, contribute, 
                  and customize AlertHawk to fit your specific monitoring needs.
                </p>
                <a 
                  href="https://github.com/thiagoloureiro/AlertHawk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition-colors inline-flex items-center"
                >
                  View on GitHub
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}