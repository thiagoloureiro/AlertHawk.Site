'use client';

import React from 'react';
import { Check, Shield } from 'lucide-react';
import { Github } from './icons/BrandIcons';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLanguage } from '../contexts/LanguageContext';
import { SectionHeading } from './SectionHeading';

export function Pricing() {
  const ref = useScrollReveal();
  const { t } = useLanguage();

  const points = [
    {
      title: t('pricing.openSource.unlimited.title'),
      description: t('pricing.openSource.unlimited.description'),
    },
    {
      title: t('pricing.openSource.sourceCode.title'),
      description: t('pricing.openSource.sourceCode.description'),
    },
    {
      title: t('pricing.openSource.selfHosted.title'),
      description: t('pricing.openSource.selfHosted.description'),
    },
    {
      title: t('pricing.openSource.allFeatures.title'),
      description: t('pricing.openSource.allFeatures.description'),
    },
    {
      title: t('pricing.openSource.community.title'),
      description: t('pricing.openSource.community.description'),
    },
  ];

  return (
    <section ref={ref} id="pricing" className="relative py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          index="06"
          eyebrow={t('sections.pricing')}
          title={t('pricing.title')}
          subtitle={t('pricing.subtitle')}
        />

        <div className="mx-auto max-w-2xl fade-up border border-gray-800 p-8 md:p-10">
          <div className="mb-8 text-center">
            <p className="mb-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-blue-400">
              <Github className="h-4 w-4" />
              {t('pricing.openSource.badge')}
            </p>
            <div className="mb-4 flex items-baseline justify-center">
              <span className="text-5xl font-bold text-white md:text-6xl">
                {t('pricing.openSource.price')}
              </span>
              <span className="ml-2 text-lg text-gray-400">{t('pricing.openSource.period')}</span>
            </div>
            <p className="text-gray-400">{t('pricing.openSource.description')}</p>
          </div>

          <div className="mb-8 space-y-4 border-t border-gray-800 pt-6">
            {points.map((point) => (
              <div key={point.title} className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
                <div>
                  <h3 className="text-base font-semibold text-white">{point.title}</h3>
                  <p className="text-sm text-gray-400">{point.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="https://app.alerthawk.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary justify-center"
            >
              {t('hero.tryDemo')}
            </a>
            <a
              href="https://artifacthub.io/packages/helm/alerthawk/alerthawk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary justify-center"
            >
              <Shield className="mr-2 h-4 w-4" />
              {t('pricing.openSource.deployHelm')}
            </a>
            <a
              href="https://github.com/thiagoloureiro/AlertHawk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center py-2 text-sm text-gray-400 transition-colors hover:text-white"
            >
              <Github className="mr-2 h-4 w-4" />
              {t('pricing.openSource.viewGitHub')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
