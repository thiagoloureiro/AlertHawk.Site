import React from 'react';
import { BarChart3, Brain, Cloud } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLanguage } from '../contexts/LanguageContext';

import finopsOverviewImg from '../assets/finops-overview.png';
import finopsHistoricalImg from '../assets/finops-historical.png';
import finopsCostDetailsImg from '../assets/finops-cost-details.png';
import finopsAiRecommendationsImg from '../assets/finops-ai-recommendations.png';

export function FinOps() {
  const ref = useScrollReveal();
  const { t } = useLanguage();

  return (
    <section ref={ref} id="finops" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-up">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-700/20 mb-6">
              <BarChart3 className="w-8 h-8 text-emerald-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{t('finops.title')}</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t('finops.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="glass-card p-6 rounded-xl hover:border-emerald-500/40 transition-all duration-300 fade-up">
              <Cloud className="w-8 h-8 text-emerald-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-white">{t('finops.azureMetrics.title')}</h3>
              <p className="text-gray-300 text-sm">{t('finops.azureMetrics.description')}</p>
            </div>
            <div
              className="glass-card p-6 rounded-xl hover:border-emerald-500/40 transition-all duration-300 fade-up"
              style={{ transitionDelay: '100ms' }}
            >
              <BarChart3 className="w-8 h-8 text-emerald-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-white">{t('finops.detailedGraphs.title')}</h3>
              <p className="text-gray-300 text-sm">{t('finops.detailedGraphs.description')}</p>
            </div>
            <div
              className="glass-card p-6 rounded-xl hover:border-emerald-500/40 transition-all duration-300 fade-up"
              style={{ transitionDelay: '200ms' }}
            >
              <Brain className="w-8 h-8 text-emerald-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-white">{t('finops.aiAnalysis.title')}</h3>
              <p className="text-gray-300 text-sm">{t('finops.aiAnalysis.description')}</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="fade-up" style={{ transitionDelay: '300ms' }}>
              <div className="glass-card p-1 rounded-xl overflow-hidden">
                <div className="bg-gray-800/50 p-4 border-b border-gray-700/50">
                  <h3 className="text-xl font-semibold text-white mb-1">{t('finops.screens.overview.title')}</h3>
                  <p className="text-sm text-gray-400">{t('finops.screens.overview.subtitle')}</p>
                </div>
                <img src={finopsOverviewImg} alt="FinOps overview dashboard" className="w-full h-auto opacity-80" />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="fade-up" style={{ transitionDelay: '350ms' }}>
                <div className="glass-card p-1 rounded-xl overflow-hidden">
                  <div className="bg-gray-800/50 p-4 border-b border-gray-700/50">
                    <h3 className="text-xl font-semibold text-white mb-1">{t('finops.screens.historical.title')}</h3>
                    <p className="text-sm text-gray-400">{t('finops.screens.historical.subtitle')}</p>
                  </div>
                  <img src={finopsHistoricalImg} alt="FinOps historical results charts" className="w-full h-auto opacity-80" />
                </div>
              </div>

              <div className="fade-up" style={{ transitionDelay: '400ms' }}>
                <div className="glass-card p-1 rounded-xl overflow-hidden">
                  <div className="bg-gray-800/50 p-4 border-b border-gray-700/50">
                    <h3 className="text-xl font-semibold text-white mb-1">{t('finops.screens.costDetails.title')}</h3>
                    <p className="text-sm text-gray-400">{t('finops.screens.costDetails.subtitle')}</p>
                  </div>
                  <img src={finopsCostDetailsImg} alt="FinOps cost details breakdown" className="w-full h-auto opacity-80" />
                </div>
              </div>
            </div>

            <div className="fade-up" style={{ transitionDelay: '450ms' }}>
              <div className="glass-card p-1 rounded-xl overflow-hidden">
                <div className="bg-gray-800/50 p-4 border-b border-gray-700/50">
                  <h3 className="text-xl font-semibold text-white mb-1">{t('finops.screens.aiRecommendations.title')}</h3>
                  <p className="text-sm text-gray-400">{t('finops.screens.aiRecommendations.subtitle')}</p>
                </div>
                <img
                  src={finopsAiRecommendationsImg}
                  alt="AI recommendations for cloud cost optimization"
                  className="w-full h-auto opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

