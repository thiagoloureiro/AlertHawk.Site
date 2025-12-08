import React from 'react';
import { Cpu, Activity, Bell, Globe, Zap, BarChart3, AlertTriangle, Smartphone, Server } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Features() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Cpu,
      title: t('features.items.kubernetesMetrics.title'),
      description: t('features.items.kubernetesMetrics.description')
    },
    {
      icon: Activity,
      title: t('features.items.uptime.title'),
      description: t('features.items.uptime.description')
    },
    {
      icon: Bell,
      title: t('features.items.alerting.title'),
      description: t('features.items.alerting.description')
    },
    {
      icon: Zap,
      title: t('features.items.notifications.title'),
      description: t('features.items.notifications.description')
    },
    {
      icon: BarChart3,
      title: t('features.items.analytics.title'),
      description: t('features.items.analytics.description')
    },
    {
      icon: Server,
      title: t('features.items.clusterMonitoring.title'),
      description: t('features.items.clusterMonitoring.description')
    },
    {
      icon: Globe,
      title: t('features.items.multiEndpoint.title'),
      description: t('features.items.multiEndpoint.description')
    },
    {
      icon: AlertTriangle,
      title: t('features.items.issueDetection.title'),
      description: t('features.items.issueDetection.description')
    },
    {
      icon: Smartphone,
      title: t('features.items.mobileAccess.title'),
      description: t('features.items.mobileAccess.description')
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-900 relative">
      <div className="background-glow opacity-50" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-up">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-700/20 mb-6">
            <Zap className="w-8 h-8 text-blue-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {t('features.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('features.subtitle')}
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