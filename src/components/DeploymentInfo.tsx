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
      iconClass: 'text-blue-400',
    },
    {
      icon: Database,
      title: t('technology.database.title'),
      description: t('technology.database.description'),
      iconClass: 'text-blue-400',
    },
    {
      icon: Network,
      title: t('technology.processing.title'),
      description: t('technology.processing.description'),
      iconClass: 'text-blue-400',
    },
    {
      icon: Shield,
      title: t('technology.security.title'),
      description: t('technology.security.description'),
      iconClass: 'text-blue-400',
    },
  ];
  return (
    <section id="technology" className="py-20 relative">
      <div className="container mx-auto px-4">
        <SectionHeading
          index="07"
          eyebrow={t('sections.technology')}
          title={t('technology.title')}
          subtitle={t('technology.subtitle')}
        />

        <div className="mb-12 grid border-t border-gray-800 md:grid-cols-2 lg:grid-cols-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="fade-up border-b border-gray-800 p-6 lg:border-r lg:last:border-r-0 lg:[&:nth-child(4n)]:border-r-0 md:[&:nth-child(2n)]:border-r-0 md:odd:border-r"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <tech.icon className={`mb-4 h-8 w-8 ${tech.iconClass}`} />
              <h3 className="mb-2 text-lg font-semibold text-white">{tech.title}</h3>
              <p className="text-sm leading-relaxed text-gray-400">{tech.description}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-0 border border-gray-800 md:grid-cols-2">
          <div className="fade-up border-b border-gray-800 p-6 md:border-r md:border-b-0 md:p-8" style={{ transitionDelay: '400ms' }}>
            <div className="flex items-start space-x-4">
              <Container className="h-8 w-8 shrink-0 text-blue-400" />
              <div>
                <h3 className="mb-2 text-xl font-semibold text-white">{t('technology.deployment.title')}</h3>
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

          <div className="fade-up p-6 md:p-8" style={{ transitionDelay: '500ms' }}>
            <div className="flex items-start space-x-4">
              <Github className="h-8 w-8 shrink-0 text-blue-400" />
              <div>
                <h3 className="mb-2 text-xl font-semibold text-white">{t('technology.openSource.title')}</h3>
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