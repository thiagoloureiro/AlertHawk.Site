import React from 'react';
import { Cpu, Activity, Bell, Globe, Zap, BarChart3, AlertTriangle, Smartphone, Server } from 'lucide-react';

const features = [
  {
    icon: Cpu,
    title: 'Kubernetes CPU & RAM Metrics',
    description: 'Real-time monitoring of CPU and memory usage across clusters, nodes, pods, and namespaces. Track resource consumption with detailed analytics and historical data.'
  },
  {
    icon: Activity,
    title: 'Uptime Monitoring',
    description: 'Continuous uptime monitoring for websites, APIs, and services. Get instant alerts when downtime is detected with response time tracking and availability metrics.'
  },
  {
    icon: Bell,
    title: 'Intelligent Alerting',
    description: 'Multi-channel alerting system with configurable thresholds. Receive notifications via email, SMS, Slack, Discord, and webhooks when issues are detected.'
  },
  {
    icon: Zap,
    title: 'Real-time Notifications',
    description: 'Instant push notifications to mobile apps and web browsers. Never miss a critical alert with real-time updates on your infrastructure status.'
  },
  {
    icon: BarChart3,
    title: 'Advanced Metrics & Analytics',
    description: 'Comprehensive metrics dashboard with customizable charts, historical data analysis, and performance trends. Monitor everything from cluster health to application performance.'
  },
  {
    icon: Server,
    title: 'Kubernetes Cluster Monitoring',
    description: 'Full visibility into your Kubernetes infrastructure. Monitor cluster-wide metrics, node health, pod status, namespace resource usage, and container-level performance.'
  },
  {
    icon: Globe,
    title: 'Multi-endpoint Monitoring',
    description: 'Monitor websites, REST APIs, GraphQL endpoints, and TCP/UDP services. Track response times, status codes, and availability from multiple geographic locations.'
  },
  {
    icon: AlertTriangle,
    title: 'Proactive Issue Detection',
    description: 'Advanced anomaly detection and threshold-based alerting. Identify performance degradation before it becomes a critical issue with predictive monitoring.'
  },
  {
    icon: Smartphone,
    title: 'Mobile & Web Access',
    description: 'Native iOS and Android apps plus responsive web dashboard. Monitor your infrastructure from anywhere with real-time updates and push notifications.'
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-gray-900 relative">
      <div className="background-glow opacity-50" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-up">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-700/20 mb-6">
            <Zap className="w-8 h-8 text-blue-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Enterprise Monitoring Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive monitoring capabilities designed for modern infrastructure and Kubernetes environments
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-6 rounded-xl hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 fade-up"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <feature.icon className="w-10 h-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}