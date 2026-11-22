import React from 'react';
import { Cpu, HardDrive, Network } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLanguage } from '../contexts/LanguageContext';
import { SectionHeading } from './SectionHeading';

import clusterMetricsImg from '@/assets/kubernetes-cluster-metrics.png';
import applicationMetricsImg from '@/assets/kubernetes-application-metrics.png';
import clustersDiagramImg from '@/assets/kubernetes-cluster-diagram.png';

export function KubernetesMonitoring() {
  const ref = useScrollReveal();
  const { t } = useLanguage();

  return (
    <section ref={ref} id="kubernetes-monitoring" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            index="03"
            eyebrow={t('sections.kubernetes')}
            title={t('kubernetes.title')}
            subtitle={t('kubernetes.subtitle')}
          />

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="glass-card p-6 rounded-xl hover:border-purple-500/50 transition-all duration-300 fade-up">
              <Cpu className="w-8 h-8 text-purple-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-white">{t('kubernetes.clusterMetrics.title')}</h3>
              <p className="text-gray-300 text-sm">
                {t('kubernetes.clusterMetrics.description')}
              </p>
            </div>
            <div className="glass-card p-6 rounded-xl hover:border-purple-500/50 transition-all duration-300 fade-up" style={{ transitionDelay: '100ms' }}>
              <HardDrive className="w-8 h-8 text-purple-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-white">{t('kubernetes.podMetrics.title')}</h3>
              <p className="text-gray-300 text-sm">
                {t('kubernetes.podMetrics.description')}
              </p>
            </div>
            <div className="glass-card p-6 rounded-xl hover:border-purple-500/50 transition-all duration-300 fade-up" style={{ transitionDelay: '200ms' }}>
              <Network className="w-8 h-8 text-purple-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-white">{t('kubernetes.multiCluster.title')}</h3>
              <p className="text-gray-300 text-sm">
                {t('kubernetes.multiCluster.description')}
              </p>
            </div>
          </div>

          {/* Screenshots Section */}
          <div className="space-y-8">
            {/* Cluster Metrics Dashboard */}
            <div className="fade-up" style={{ transitionDelay: '300ms' }}>
              <div className="glass-card p-1 rounded-xl overflow-hidden">
                <div className="bg-gray-800/50 p-4 border-b border-gray-700/50">
                  <h3 className="text-xl font-semibold text-white mb-1">{t('kubernetes.clusterDashboard.title')}</h3>
                  <p className="text-sm text-gray-400">{t('kubernetes.clusterDashboard.subtitle')}</p>
                </div>
                <img
                  src={clusterMetricsImg.src}
                  alt="Cluster Metrics Dashboard showing CPU and memory usage across nodes"
                  className="w-full h-auto opacity-80"
                />
              </div>
            </div>

            {/* Application Metrics Dashboard */}
            <div className="fade-up" style={{ transitionDelay: '400ms' }}>
              <div className="glass-card p-1 rounded-xl overflow-hidden">
                <div className="bg-gray-800/50 p-4 border-b border-gray-700/50">
                  <h3 className="text-xl font-semibold text-white mb-1">{t('kubernetes.applicationDashboard.title')}</h3>
                  <p className="text-sm text-gray-400">{t('kubernetes.applicationDashboard.subtitle')}</p>
                </div>
                <img
                  src={applicationMetricsImg.src}
                  alt="Application Metrics Dashboard showing pod and container metrics"
                  className="w-full h-auto opacity-80"
                />
              </div>
            </div>

            {/* Clusters Diagram */}
            <div className="fade-up" style={{ transitionDelay: '500ms' }}>
              <div className="glass-card p-1 rounded-xl overflow-hidden">
                <div className="bg-gray-800/50 p-4 border-b border-gray-700/50">
                  <h3 className="text-xl font-semibold text-white mb-1">{t('kubernetes.clustersDiagram.title')}</h3>
                  <p className="text-sm text-gray-400">{t('kubernetes.clustersDiagram.subtitle')}</p>
                </div>
                <img
                  src={clustersDiagramImg.src}
                  alt="Clusters Diagram showing cluster overview and status"
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
