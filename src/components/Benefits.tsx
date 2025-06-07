import React from 'react';
import { Server, Activity, Bell, Scale, Smartphone } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const benefits = [
  {
    icon: Server,
    title: 'Easy Self-hosted Deployment',
    description: 'Deploy on your own infrastructure with our simple setup process.'
  },
  {
    icon: Activity,
    title: 'Comprehensive Monitoring',
    description: 'Monitor every aspect of your infrastructure in real-time.'
  },
  {
    icon: Bell,
    title: 'Real-time Alerts',
    description: 'Get instant notifications when issues arise.'
  },
  {
    icon: Scale,
    title: 'Scalable Architecture',
    description: 'Grows with your needs, from startups to enterprise.'
  },
  {
    icon: Smartphone,
    title: 'Cross-platform Access',
    description: 'Access your monitoring dashboard from any device.'
  }
];

export function Benefits() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="py-20 bg-gray-800/50 backdrop-blur-xs relative">
      <div className="background-glow opacity-50" />
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white fade-up">
          Why Choose AlertHawk?
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="glass-card rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 fade-up"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start space-x-4">
                <div className="shrink-0">
                  <benefit.icon className="w-6 h-6 text-purple-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}