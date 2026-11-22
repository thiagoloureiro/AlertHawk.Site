import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import appImage from '@/assets/app.png';
import mobile1 from '@/assets/mobile1.png';
import mobile2 from '@/assets/mobile2.png';
import mobile3 from '@/assets/mobile3.png';

export function Hero() {
  const { t } = useLanguage();
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center fade-up">
          <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.22em] text-gray-500">
            <span className="text-blue-400/90">01</span>
            <span className="mx-2 text-gray-600">/</span>
            <span>{t('hero.eyebrow')}</span>
          </p>
          <p className="mb-4 text-2xl font-bold tracking-tight text-white md:text-3xl">
            {t('hero.brand')}
          </p>
          <h1 className="mb-6 text-3xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            {t('hero.title')}
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="https://artifacthub.io/packages/helm/alerthawk/alerthawk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {t('hero.viewHelmChart')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="https://app.alerthawk.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              {t('hero.goToAlertHawk')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 fade-up md:mt-20" style={{ transitionDelay: '200ms' }}>
        <div className="relative w-full overflow-hidden border-y border-gray-800 bg-gray-950/40">
          <img
            src={appImage.src}
            alt="AlertHawk dashboard preview"
            className="mx-auto w-full max-w-6xl object-cover opacity-90"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div
          className="mt-12 flex flex-col items-center justify-center gap-6 fade-up md:mt-16 md:flex-row md:gap-8"
          style={{ transitionDelay: '300ms' }}
        >
          {[mobile1, mobile2, mobile3].map((img, i) => (
            <div key={i} className="w-56 overflow-hidden border border-gray-800 md:w-64">
              <img
                src={img.src}
                alt={`AlertHawk mobile screenshot ${i + 1}`}
                className="w-full opacity-90"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
