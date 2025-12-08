import React from 'react';
import { Server, Activity, Bell, Scale, Smartphone, Zap, Shield, BarChart3 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLanguage } from '../contexts/LanguageContext';

export function Benefits() {
  const ref = useScrollReveal();
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Activity,
      title: t('benefits.items.monitoring.title'),
      description: t('benefits.items.monitoring.description')
    },
    {
      icon: Bell,
      title: t('benefits.items.alerting.title'),
      description: t('benefits.items.alerting.description')
    },
    {
      icon: BarChart3,
      title: t('benefits.items.analytics.title'),
      description: t('benefits.items.analytics.description')
    },
    {
      icon: Server,
      title: t('benefits.items.selfHosted.title'),
      description: t('benefits.items.selfHosted.description')
    },
    {
      icon: Scale,
      title: t('benefits.items.scalability.title'),
      description: t('benefits.items.scalability.description')
    },
    {
      icon: Zap,
      title: t('benefits.items.notifications.title'),
      description: t('benefits.items.notifications.description')
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-800/50 backdrop-blur-xs relative">
      <div className="background-glow opacity-50" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-up">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-700/20 mb-6">
            <Zap className="w-8 h-8 text-green-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {t('benefits.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('benefits.subtitle')}
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