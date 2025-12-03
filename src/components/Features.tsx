import React from 'react';
import { LayoutDashboard, Database, Cloud, Smartphone, Layers, Server } from 'lucide-react';

const features = [
  {
    icon: LayoutDashboard,
    title: 'Real-time Monitoring Dashboard',
    description: 'Get instant visibility into your system\'s performance with our intuitive dashboard.'
  },
  {
    icon: Database,
    title: 'Multi-component Support',
    description: 'Monitor WebAPIs, websites, databases, and more from a single platform.'
  },
  {
    icon: Cloud,
    title: 'Cloud Integration',
    description: 'Seamlessly integrate with major cloud providers for comprehensive monitoring.'
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Stay connected with native iOS and Android apps for on-the-go monitoring.'
  },
  {
    icon: Layers,
    title: 'Microservices Architecture',
    description: 'Built to handle modern, distributed systems with complex architectures.'
  },
  {
    icon: Server,
    title: 'Kubernetes Metrics',
    description: 'Monitor cluster, pod, and namespace metrics including CPU and RAM usage across your Kubernetes infrastructure.'
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Powerful Features for Modern Teams
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass-card p-6 rounded-xl hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
              <feature.icon className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}