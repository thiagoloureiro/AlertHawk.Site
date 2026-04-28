import React from 'react';
import { Github, MessageCircle, Globe } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLanguage } from '../contexts/LanguageContext';

export function Contact() {
  const ref = useScrollReveal();
  const { t } = useLanguage();

  return (
    <section ref={ref} id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-up">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-700/20 mb-6">
            <MessageCircle className="w-8 h-8 text-blue-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="https://github.com/thiagoloureiro/AlertHawk"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 rounded-xl hover:border-blue-500/50 transition-all duration-300 fade-up group"
              style={{ transitionDelay: '100ms' }}
            >
              <div className="flex items-start space-x-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-blue-700/20 flex items-center justify-center group-hover:bg-blue-700/30 transition-colors">
                    <Github className="w-6 h-6 text-blue-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
                    {t('contact.github.title')}
                  </h3>
                  <p className="text-gray-300 mb-3">
                    {t('contact.github.description')}
                  </p>
                  <span className="text-blue-400 text-sm font-medium inline-flex items-center">
                    {t('contact.github.visit')}
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </div>
            </a>

            <a
              href="https://app.alerthawk.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 rounded-xl hover:border-blue-500/50 transition-all duration-300 fade-up group"
              style={{ transitionDelay: '200ms' }}
            >
              <div className="flex items-start space-x-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-purple-700/20 flex items-center justify-center group-hover:bg-purple-700/30 transition-colors">
                    <Globe className="w-6 h-6 text-purple-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-400 transition-colors">
                    {t('contact.demo.title')}
                  </h3>
                  <p className="text-gray-300 mb-3">
                    {t('contact.demo.description')}
                  </p>
                  <span className="text-purple-400 text-sm font-medium inline-flex items-center">
                    {t('contact.demo.view')}
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
