'use client';

import React from 'react';
import {
  Globe,
  Network,
  Container,
  FolderTree,
  Bell,
  ShieldCheck,
  Database,
  KeyRound,
  Package,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { SectionHeading } from './SectionHeading';

export function Features() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Globe,
      title: t('capabilities.items.http.title'),
      description: t('capabilities.items.http.description'),
    },
    {
      icon: Network,
      title: t('capabilities.items.tcp.title'),
      description: t('capabilities.items.tcp.description'),
    },
    {
      icon: Container,
      title: t('capabilities.items.k8sHealth.title'),
      description: t('capabilities.items.k8sHealth.description'),
    },
    {
      icon: FolderTree,
      title: t('capabilities.items.groups.title'),
      description: t('capabilities.items.groups.description'),
    },
    {
      icon: Bell,
      title: t('capabilities.items.channels.title'),
      description: t('capabilities.items.channels.description'),
    },
    {
      icon: ShieldCheck,
      title: t('capabilities.items.ssl.title'),
      description: t('capabilities.items.ssl.description'),
    },
    {
      icon: Database,
      title: t('capabilities.items.metrics.title'),
      description: t('capabilities.items.metrics.description'),
    },
    {
      icon: KeyRound,
      title: t('capabilities.items.auth.title'),
      description: t('capabilities.items.auth.description'),
    },
    {
      icon: Package,
      title: t('capabilities.items.helm.title'),
      description: t('capabilities.items.helm.description'),
    },
  ];

  return (
    <section id="capabilities" className="relative py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          index="03"
          eyebrow={t('sections.capabilities')}
          title={t('capabilities.title')}
          subtitle={t('capabilities.subtitle')}
        />

        <div className="mx-auto max-w-5xl divide-y divide-gray-800 border-y border-gray-800">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="fade-up grid gap-4 py-6 md:grid-cols-[2.5rem_1fr_1.4fr] md:items-start md:gap-8"
              style={{ transitionDelay: `${index * 40}ms` }}
            >
              <feature.icon className="h-6 w-6 text-blue-400" />
              <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
              <p className="leading-relaxed text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
