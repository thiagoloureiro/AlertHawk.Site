'use client';

import React from 'react';
import { Container, ArrowRight, Database, Network, Shield } from 'lucide-react';
import { Github } from './icons/BrandIcons';
import { useLanguage } from '../contexts/LanguageContext';
import { SectionHeading } from './SectionHeading';

export function DeploymentInfo() {
  const { t } = useLanguage();

  const technologies = [
    {
      icon: Container,
      title: t('technology.kubernetes.title'),
      description: t('technology.kubernetes.description'),
    },
    {
      icon: Database,
      title: t('technology.database.title'),
      description: t('technology.database.description'),
    },
    {
      icon: Network,
      title: t('technology.processing.title'),
      description: t('technology.processing.description'),
    },
    {
      icon: Shield,
      title: t('technology.security.title'),
      description: t('technology.security.description'),
    },
  ];

  return (
    <section id="deploy" className="relative py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          index="05"
          eyebrow={t('sections.deploy')}
          title={t('technology.title')}
          subtitle={t('technology.subtitle')}
        />

        <div className="mb-12 grid border-t border-gray-800 md:grid-cols-2 lg:grid-cols-4">
          {technologies.map((tech, index) => (
            <div
              key={tech.title}
              className="fade-up border-b border-gray-800 p-6 lg:border-r lg:last:border-r-0"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <tech.icon className="mb-4 h-7 w-7 text-blue-400" />
              <h3 className="mb-2 text-lg font-semibold text-white">{tech.title}</h3>
              <p className="text-sm leading-relaxed text-gray-400">{tech.description}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-0 border border-gray-800 md:grid-cols-2">
          <div
            className="fade-up border-b border-gray-800 p-6 md:border-r md:border-b-0 md:p-8"
            style={{ transitionDelay: '320ms' }}
          >
            <div className="flex items-start space-x-4">
              <Container className="h-7 w-7 shrink-0 text-blue-400" />
              <div>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  {t('technology.deployment.title')}
                </h3>
                <p className="mb-4 text-gray-400">{t('technology.deployment.description')}</p>
                <a
                  href="https://artifacthub.io/packages/helm/alerthawk/alerthawk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 transition-colors hover:text-blue-300"
                >
                  {t('technology.deployment.viewHelmChart')}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="fade-up p-6 md:p-8" style={{ transitionDelay: '400ms' }}>
            <div className="flex items-start space-x-4">
              <Github className="h-7 w-7 shrink-0 text-blue-400" />
              <div>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  {t('technology.openSource.title')}
                </h3>
                <p className="mb-4 text-gray-400">{t('technology.openSource.description')}</p>
                <a
                  href="https://github.com/thiagoloureiro/AlertHawk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 transition-colors hover:text-blue-300"
                >
                  {t('technology.openSource.viewGitHub')}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
