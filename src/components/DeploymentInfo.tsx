import React from 'react';
import { Github, Container, ArrowRight, Code, Database, Network, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function DeploymentInfo() {
  const { t } = useLanguage();

  const technologies = [
    {
      icon: Container,
      title: t('technology.kubernetes.title'),
      description: t('technology.kubernetes.description'),
      iconClass: 'text-blue-500'
    },
    {
      icon: Database,
      title: t('technology.database.title'),
      description: t('technology.database.description'),
      iconClass: 'text-purple-500'
    },
    {
      icon: Network,
      title: t('technology.processing.title'),
      description: t('technology.processing.description'),
      iconClass: 'text-green-500'
    },
    {
      icon: Shield,
      title: t('technology.security.title'),
      description: t('technology.security.description'),
      iconClass: 'text-yellow-500'
    }
  ];
  return (
    <section className="py-20 bg-gray-800/50 relative">
      <div className="background-glow opacity-50" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-up">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-700/20 mb-6">
            <Code className="w-8 h-8 text-purple-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {t('technology.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('technology.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="glass-card p-6 rounded-xl hover:border-purple-500/50 transition-all duration-300 fade-up"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <tech.icon className={`w-10 h-10 ${tech.iconClass} mb-4`} />
              <h3 className="text-lg font-semibold mb-2 text-white">{tech.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{tech.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card p-6 rounded-xl fade-up" style={{ transitionDelay: '400ms' }}>
            <div className="flex items-start space-x-4">
              <Container className="w-8 h-8 text-blue-500 shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">{t('technology.deployment.title')}</h3>
                <p className="text-gray-300 mb-4">
                  {t('technology.deployment.description')}
                </p>
                <a 
                  href="https://artifacthub.io/packages/helm/alerthawk/alerthawk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center"
                >
                  {t('technology.deployment.viewHelmChart')}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 rounded-xl fade-up" style={{ transitionDelay: '500ms' }}>
            <div className="flex items-start space-x-4">
              <Github className="w-8 h-8 text-purple-500 shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">{t('technology.openSource.title')}</h3>
                <p className="text-gray-300 mb-4">
                  {t('technology.openSource.description')}
                </p>
                <a 
                  href="https://github.com/thiagoloureiro/AlertHawk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition-colors inline-flex items-center"
                >
                  {t('technology.openSource.viewGitHub')}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}