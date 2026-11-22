'use client';

import React from 'react';
import {
  Server,
  Activity,
  Bell,
  Cloud,
  Smartphone,
  Container,
  ArrowRight,
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLanguage } from '../contexts/LanguageContext';
import { SectionHeading } from './SectionHeading';

export function Advantages() {
  const ref = useScrollReveal();
  const { t } = useLanguage();

  const steps = [
    {
      title: t('advantages.steps.monitor.title'),
      description: t('advantages.steps.monitor.description'),
    },
    {
      title: t('advantages.steps.alert.title'),
      description: t('advantages.steps.alert.description'),
    },
    {
      title: t('advantages.steps.act.title'),
      description: t('advantages.steps.act.description'),
    },
  ];

  const items = [
    {
      icon: Server,
      title: t('advantages.items.selfHosted.title'),
      description: t('advantages.items.selfHosted.description'),
    },
    {
      icon: Container,
      title: t('advantages.items.kubernetes.title'),
      description: t('advantages.items.kubernetes.description'),
    },
    {
      icon: Activity,
      title: t('advantages.items.uptime.title'),
      description: t('advantages.items.uptime.description'),
    },
    {
      icon: Bell,
      title: t('advantages.items.alerts.title'),
      description: t('advantages.items.alerts.description'),
    },
    {
      icon: Cloud,
      title: t('advantages.items.finops.title'),
      description: t('advantages.items.finops.description'),
    },
    {
      icon: Smartphone,
      title: t('advantages.items.mobile.title'),
      description: t('advantages.items.mobile.description'),
    },
  ];

  return (
    <section ref={ref} id="advantages" className="relative py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          index="02"
          eyebrow={t('sections.advantages')}
          title={t('advantages.title')}
          subtitle={t('advantages.subtitle')}
        />

        <div className="mx-auto mb-16 max-w-5xl border-y border-gray-800">
          <p className="fade-up border-b border-gray-800 px-4 py-4 font-mono text-[11px] uppercase tracking-[0.18em] text-gray-500">
            {t('advantages.steps.title')}
          </p>
          <div className="grid md:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="fade-up relative border-b border-gray-800 p-6 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 md:p-8"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="font-mono text-xs text-blue-400/90">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {index < steps.length - 1 ? (
                    <ArrowRight className="hidden h-3.5 w-3.5 text-gray-600 md:block" />
                  ) : null}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl border-t border-gray-800 md:grid-cols-2">
          {items.map((item, index) => (
            <div
              key={item.title}
              className="fade-up border-b border-gray-800 p-6 md:odd:border-r md:p-8"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <item.icon className="mb-4 h-6 w-6 text-blue-400" />
              <h3 className="mb-2 text-lg font-semibold text-white">{item.title}</h3>
              <p className="leading-relaxed text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
