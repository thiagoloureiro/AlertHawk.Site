import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import appImage from '@/assets/app.png';

export function Hero() {
  const { t } = useLanguage();
  return (
    <section className="relative pt-28 pb-0 md:pt-36">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center fade-up">
          <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.22em] text-gray-500">
            <span className="text-blue-400/90">01</span>
            <span className="mx-2 text-gray-600">/</span>
            <span>{t('hero.eyebrow')}</span>
          </p>
          <p className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            {t('hero.brand')}
          </p>
          <h1 className="mb-6 text-2xl font-semibold tracking-tight text-gray-100 md:text-3xl lg:text-4xl">
            {t('hero.title')}
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="https://app.alerthawk.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {t('hero.tryDemo')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="https://artifacthub.io/packages/helm/alerthawk/alerthawk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              {t('hero.deployHelm')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 fade-up md:mt-20" style={{ transitionDelay: '200ms' }}>
        <div className="relative w-full overflow-hidden border-y border-gray-800 bg-gray-950/40">
          <img
            src={appImage.src}
            alt="AlertHawk dashboard"
            className="mx-auto w-full max-w-6xl object-cover object-top opacity-95"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
