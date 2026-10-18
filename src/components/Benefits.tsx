import React from 'react';
import { Server, Activity, Bell, Scale, Zap, BarChart3 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLanguage } from '../contexts/LanguageContext';
import { SectionHeading } from './SectionHeading';

export function Benefits() {
  const ref = useScrollReveal();
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Activity,
      title: t('benefits.items.monitoring.title'),
      description: t('benefits.items.monitoring.description'),
    },
    {
      icon: Bell,
      title: t('benefits.items.alerting.title'),
      description: t('benefits.items.alerting.description'),
    },
    {
      icon: BarChart3,
      title: t('benefits.items.analytics.title'),
      description: t('benefits.items.analytics.description'),
    },
    {
      icon: Server,
      title: t('benefits.items.selfHosted.title'),
      description: t('benefits.items.selfHosted.description'),
    },
    {
      icon: Scale,
      title: t('benefits.items.scalability.title'),
      description: t('benefits.items.scalability.description'),
    },
    {
      icon: Zap,
      title: t('benefits.items.notifications.title'),
      description: t('benefits.items.notifications.description'),
    },
  ];

  return (
    <section ref={ref} id="benefits" className="py-20 relative">
      <div className="container mx-auto px-4">
        <SectionHeading
          index="06"
          eyebrow={t('sections.benefits')}
          title={t('benefits.title')}
          subtitle={t('benefits.subtitle')}
        />

        <div className="mx-auto max-w-5xl grid gap-0 md:grid-cols-2 border-t border-gray-800">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="fade-up border-b border-gray-800 p-6 md:odd:border-r md:p-8"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <benefit.icon className="mb-4 h-7 w-7 text-blue-400" />
              <h3 className="mb-2 text-lg font-semibold text-white">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
