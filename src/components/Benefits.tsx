import React from 'react';
import { Server, Activity, Bell, Scale, Smartphone, Zap, Shield, BarChart3 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const benefits = [
  {
    icon: Activity,
    title: 'Real-time Infrastructure Monitoring',
    description: 'Monitor Kubernetes clusters, applications, and endpoints with sub-second latency. Get instant visibility into CPU, RAM, and system health metrics.'
  },
  {
    icon: Bell,
    title: 'Multi-Channel Alerting',
    description: 'Configure alerts via email, SMS, Slack, Discord, webhooks, and push notifications. Never miss a critical issue with intelligent alert routing.'
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics & Metrics',
    description: 'Historical data analysis, trend detection, and performance insights. Track resource utilization patterns and optimize your infrastructure.'
  },
  {
    icon: Server,
    title: 'Self-Hosted & Private',
    description: 'Deploy on your own infrastructure with full data control. No vendor lock-in, complete privacy, and compliance with your security requirements.'
  },
  {
    icon: Scale,
    title: 'Enterprise Scalability',
    description: 'Built to handle thousands of metrics and endpoints. Horizontally scalable architecture that grows with your infrastructure needs.'
  },
  {
    icon: Zap,
    title: 'Low-Latency Notifications',
    description: 'Instant push notifications to mobile and web. Get alerted within seconds of an issue detection with real-time status updates.'
  }
];

export function Benefits() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="py-20 bg-gray-800/50 backdrop-blur-xs relative">
      <div className="background-glow opacity-50" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-up">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-700/20 mb-6">
            <Zap className="w-8 h-8 text-green-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Why Choose AlertHawk?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Enterprise-grade monitoring solution designed for DevOps teams and infrastructure engineers
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="glass-card rounded-xl p-6 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300 fade-up"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start space-x-4">
                <div className="shrink-0">
                  <benefit.icon className="w-8 h-8 text-green-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}