'use client';

import React from 'react';
import { Globe } from 'lucide-react';
import { Github } from './icons/BrandIcons';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLanguage } from '../contexts/LanguageContext';
import { SectionHeading } from './SectionHeading';

export function Contact() {
  const ref = useScrollReveal();
  const { t } = useLanguage();

  return (
    <section ref={ref} id="contact" className="relative py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          index="07"
          eyebrow={t('sections.contact')}
          title={t('contact.title')}
          subtitle={t('contact.subtitle')}
        />

        <div className="mx-auto grid max-w-4xl border border-gray-800 md:grid-cols-2">
          <a
            href="https://app.alerthawk.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="fade-up group border-b border-gray-800 p-6 transition-colors hover:bg-gray-800/30 md:border-r md:border-b-0 md:p-8"
            style={{ transitionDelay: '100ms' }}
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center border border-gray-700">
              <Globe className="h-5 w-5 text-blue-400" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white transition-colors group-hover:text-blue-400">
              {t('contact.demo.title')}
            </h3>
            <p className="mb-3 text-gray-400">{t('contact.demo.description')}</p>
            <span className="inline-flex items-center text-sm font-medium text-blue-400">
              {t('contact.demo.view')}
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </span>
          </a>

          <a
            href="https://github.com/thiagoloureiro/AlertHawk"
            target="_blank"
            rel="noopener noreferrer"
            className="fade-up group p-6 transition-colors hover:bg-gray-800/30 md:p-8"
            style={{ transitionDelay: '180ms' }}
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center border border-gray-700">
              <Github className="h-5 w-5 text-blue-400" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white transition-colors group-hover:text-blue-400">
              {t('contact.github.title')}
            </h3>
            <p className="mb-3 text-gray-400">{t('contact.github.description')}</p>
            <span className="inline-flex items-center text-sm font-medium text-blue-400">
              {t('contact.github.visit')}
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
