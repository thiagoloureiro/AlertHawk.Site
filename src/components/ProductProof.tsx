'use client';

import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLanguage } from '../contexts/LanguageContext';
import { SectionHeading } from './SectionHeading';

import clusterMetricsImg from '@/assets/kubernetes-cluster-metrics.png';
import applicationMetricsImg from '@/assets/kubernetes-application-metrics.png';
import clustersDiagramImg from '@/assets/kubernetes-cluster-diagram.png';
import finopsOverviewImg from '@/assets/finops-overview.png';
import finopsHistoricalImg from '@/assets/finops-historical.png';
import finopsAiRecommendationsImg from '@/assets/finops-ai-recommendations.png';
import mobile1 from '@/assets/mobile1.png';
import mobile2 from '@/assets/mobile2.png';
import mobile3 from '@/assets/mobile3.png';

export function ProductProof() {
  const ref = useScrollReveal();
  const { t } = useLanguage();

  return (
    <section ref={ref} id="proof" className="relative py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          index="04"
          eyebrow={t('sections.proof')}
          title={t('proof.title')}
          subtitle={t('proof.subtitle')}
        />

        <div className="mx-auto max-w-6xl space-y-16">
          <div className="fade-up">
            <div className="mb-6 border-b border-gray-800 pb-4">
              <h3 className="text-xl font-semibold text-white">{t('proof.kubernetes.title')}</h3>
              <p className="mt-1 text-sm text-gray-400">{t('proof.kubernetes.subtitle')}</p>
            </div>
            <div className="space-y-6">
              <figure className="overflow-hidden border border-gray-800">
                <figcaption className="border-b border-gray-800 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-gray-500">
                  {t('proof.kubernetes.cluster')}
                </figcaption>
                <img
                  src={clusterMetricsImg.src}
                  alt={t('proof.kubernetes.cluster')}
                  className="w-full opacity-90"
                />
              </figure>
              <div className="grid gap-6 lg:grid-cols-2">
                <figure className="overflow-hidden border border-gray-800">
                  <figcaption className="border-b border-gray-800 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-gray-500">
                    {t('proof.kubernetes.application')}
                  </figcaption>
                  <img
                    src={applicationMetricsImg.src}
                    alt={t('proof.kubernetes.application')}
                    className="w-full opacity-90"
                  />
                </figure>
                <figure className="overflow-hidden border border-gray-800">
                  <figcaption className="border-b border-gray-800 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-gray-500">
                    {t('proof.kubernetes.overview')}
                  </figcaption>
                  <img
                    src={clustersDiagramImg.src}
                    alt={t('proof.kubernetes.overview')}
                    className="w-full opacity-90"
                  />
                </figure>
              </div>
            </div>
          </div>

          <div className="fade-up" style={{ transitionDelay: '100ms' }}>
            <div className="mb-6 border-b border-gray-800 pb-4">
              <h3 className="text-xl font-semibold text-white">{t('proof.finops.title')}</h3>
              <p className="mt-1 text-sm text-gray-400">{t('proof.finops.subtitle')}</p>
            </div>
            <div className="space-y-6">
              <figure className="overflow-hidden border border-gray-800">
                <figcaption className="border-b border-gray-800 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-gray-500">
                  {t('proof.finops.overview')}
                </figcaption>
                <img
                  src={finopsOverviewImg.src}
                  alt={t('proof.finops.overview')}
                  className="w-full opacity-90"
                />
              </figure>
              <div className="grid gap-6 lg:grid-cols-2">
                <figure className="overflow-hidden border border-gray-800">
                  <figcaption className="border-b border-gray-800 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-gray-500">
                    {t('proof.finops.historical')}
                  </figcaption>
                  <img
                    src={finopsHistoricalImg.src}
                    alt={t('proof.finops.historical')}
                    className="w-full opacity-90"
                  />
                </figure>
                <figure className="overflow-hidden border border-gray-800">
                  <figcaption className="border-b border-gray-800 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-gray-500">
                    {t('proof.finops.ai')}
                  </figcaption>
                  <img
                    src={finopsAiRecommendationsImg.src}
                    alt={t('proof.finops.ai')}
                    className="w-full opacity-90"
                  />
                </figure>
              </div>
            </div>
          </div>

          <div className="fade-up" style={{ transitionDelay: '200ms' }}>
            <div className="mb-8 border-b border-gray-800 pb-4 text-center md:text-left">
              <h3 className="text-xl font-semibold text-white">{t('proof.mobile.title')}</h3>
              <p className="mt-1 text-sm text-gray-400">{t('proof.mobile.subtitle')}</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-8">
              {[mobile1, mobile2, mobile3].map((img, i) => (
                <div key={i} className="w-52 overflow-hidden border border-gray-800 md:w-56">
                  <img
                    src={img.src}
                    alt={`${t('proof.mobile.title')} ${i + 1}`}
                    className="w-full opacity-90"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
