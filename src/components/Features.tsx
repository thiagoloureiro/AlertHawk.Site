import React from 'react';
import { Cpu, Activity, Bell, Globe, Zap, BarChart3, AlertTriangle, Smartphone, Server } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { SectionHeading } from './SectionHeading';

export function Features() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Cpu,
      title: t('features.items.kubernetesMetrics.title'),
      description: t('features.items.kubernetesMetrics.description'),
    },
    {
      icon: Activity,
      title: t('features.items.uptime.title'),
      description: t('features.items.uptime.description'),
    },
    {
      icon: Bell,
      title: t('features.items.alerting.title'),
      description: t('features.items.alerting.description'),
    },
    {
      icon: Zap,
      title: t('features.items.notifications.title'),
      description: t('features.items.notifications.description'),
    },
    {
      icon: BarChart3,
      title: t('features.items.analytics.title'),
      description: t('features.items.analytics.description'),
    },
    {
      icon: Server,
      title: t('features.items.clusterMonitoring.title'),
      description: t('features.items.clusterMonitoring.description'),
    },
    {
      icon: Globe,
      title: t('features.items.multiEndpoint.title'),
      description: t('features.items.multiEndpoint.description'),
    },
    {
      icon: AlertTriangle,
      title: t('features.items.issueDetection.title'),
      description: t('features.items.issueDetection.description'),
    },
    {
      icon: Smartphone,
      title: t('features.items.mobileAccess.title'),
      description: t('features.items.mobileAccess.description'),
    },
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-4">
        <SectionHeading
          index="05"
          eyebrow={t('sections.features')}
          title={t('features.title')}
          subtitle={t('features.subtitle')}
        />

        <div className="mx-auto max-w-5xl divide-y divide-gray-800 border-y border-gray-800">
          {features.map((feature, index) => (
            <div
              key={index}
              className="fade-up grid gap-4 py-6 md:grid-cols-[2.5rem_1fr_1.4fr] md:items-start md:gap-8"
              style={{ transitionDelay: `${index * 40}ms` }}
            >
              <feature.icon className="h-7 w-7 text-blue-400" />
              <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
