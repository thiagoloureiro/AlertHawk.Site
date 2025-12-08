import React from 'react';
import { Check, Github, Zap, Shield, Cloud, Mail } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLanguage } from '../contexts/LanguageContext';

export function Pricing() {
  const ref = useScrollReveal();
  const { t } = useLanguage();

  return (
    <section ref={ref} id="pricing" className="py-20 bg-gray-900 relative">
      <div className="background-glow opacity-50" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-up">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-700/20 mb-6">
            <Zap className="w-8 h-8 text-green-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {t('pricing.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Open Source Plan */}
            <div className="glass-card p-8 md:p-10 rounded-2xl fade-up" style={{ transitionDelay: '100ms' }}>
              <div className="flex items-center justify-center mb-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-700/20 border border-green-700/50">
                  <Github className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-green-400 font-semibold">{t('pricing.openSource.badge')}</span>
                </div>
              </div>

              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-5xl md:text-6xl font-bold text-white">{t('pricing.openSource.price')}</span>
                  <span className="text-xl text-gray-400 ml-2">{t('pricing.openSource.period')}</span>
                </div>
                <p className="text-lg text-gray-300 mb-8">
                  {t('pricing.openSource.description')}
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">{t('pricing.openSource.unlimited.title')}</h3>
                    <p className="text-gray-300 text-sm">{t('pricing.openSource.unlimited.description')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">{t('pricing.openSource.sourceCode.title')}</h3>
                    <p className="text-gray-300 text-sm">{t('pricing.openSource.sourceCode.description')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">{t('pricing.openSource.selfHosted.title')}</h3>
                    <p className="text-gray-300 text-sm">{t('pricing.openSource.selfHosted.description')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">{t('pricing.openSource.allFeatures.title')}</h3>
                    <p className="text-gray-300 text-sm">{t('pricing.openSource.allFeatures.description')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">{t('pricing.openSource.community.title')}</h3>
                    <p className="text-gray-300 text-sm">{t('pricing.openSource.community.description')}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <a 
                  href="https://github.com/thiagoloureiro/AlertHawk" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors border border-gray-700"
                >
                  <Github className="w-5 h-5 mr-2" />
                  {t('pricing.openSource.viewGitHub')}
                </a>
                <a 
                  href="https://artifacthub.io/packages/helm/alerthawk/alerthawk" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-800 transition-colors"
                >
                  <Shield className="w-5 h-5 mr-2" />
                  {t('pricing.openSource.deployHelm')}
                </a>
              </div>
            </div>

            {/* SaaS Plan */}
            <div className="glass-card p-8 md:p-10 rounded-2xl border-2 border-purple-700/30 fade-up relative" style={{ transitionDelay: '200ms' }}>
              <div className="absolute top-4 right-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-700/20 border border-purple-700/50">
                  <span className="text-purple-400 text-xs font-semibold">{t('pricing.saas.popular')}</span>
                </div>
              </div>

              <div className="flex items-center justify-center mb-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-700/20 border border-purple-700/50">
                  <Cloud className="w-5 h-5 text-purple-500 mr-2" />
                  <span className="text-purple-400 font-semibold">{t('pricing.saas.badge')}</span>
                </div>
              </div>

              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-5xl md:text-6xl font-bold text-white">{t('pricing.saas.price')}</span>
                </div>
                <p className="text-lg text-gray-300 mb-8">
                  {t('pricing.saas.description')}
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-purple-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">{t('pricing.saas.hosted.title')}</h3>
                    <p className="text-gray-300 text-sm">{t('pricing.saas.hosted.description')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-purple-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">{t('pricing.saas.support.title')}</h3>
                    <p className="text-gray-300 text-sm">{t('pricing.saas.support.description')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-purple-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">{t('pricing.saas.allFeatures.title')}</h3>
                    <p className="text-gray-300 text-sm">{t('pricing.saas.allFeatures.description')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-purple-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">{t('pricing.saas.maintenance.title')}</h3>
                    <p className="text-gray-300 text-sm">{t('pricing.saas.maintenance.description')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-purple-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">{t('pricing.saas.sla.title')}</h3>
                    <p className="text-gray-300 text-sm">{t('pricing.saas.sla.description')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-purple-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">{t('pricing.saas.customConfig.title')}</h3>
                    <p className="text-gray-300 text-sm">{t('pricing.saas.customConfig.description')}</p>
                  </div>
                </div>
              </div>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="inline-flex items-center justify-center bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-800 transition-colors w-full"
              >
                <Mail className="w-5 h-5 mr-2" />
                {t('pricing.saas.contactUs')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
