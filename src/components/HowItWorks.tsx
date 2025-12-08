import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  Server, 
  Activity, 
  CheckCircle, 
  XCircle, 
  Bell, 
  ArrowRight,
  ArrowDown,
  ChevronRight, 
  Database,
  BarChart3,
  Zap,
  Clock
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLanguage } from '../contexts/LanguageContext';

export function HowItWorks() {
  const ref = useScrollReveal();
  const { t } = useLanguage();
  const [animationStep, setAnimationStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [metricsVisible, setMetricsVisible] = useState(false);
  const [currentTypingLine, setCurrentTypingLine] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (!isAnimating) return;

    const interval = setInterval(() => {
      setAnimationStep((prev) => {
        if (prev >= 4) {
          setIsAnimating(false);
          return prev; // Keep at step 4, don't reset
        }
        return prev + 1;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [isAnimating]);

  useEffect(() => {
    // Start animation when component is visible
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsAnimating(true);
          setMetricsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  // Terminal typing animation
  useEffect(() => {
    if (!metricsVisible) return;

    const totalLines = 13; // Total number of lines (0-12)
    const lineDelay = 300; // ms between lines
    const restartDelay = 3000; // 3 seconds before restart

    let timeoutId: NodeJS.Timeout;

    if (isTypingComplete) {
      // Wait 3 seconds then restart
      timeoutId = setTimeout(() => {
        setCurrentTypingLine(0);
        setIsTypingComplete(false);
      }, restartDelay);
    } else {
      // Type next line
      if (currentTypingLine < totalLines - 1) {
        timeoutId = setTimeout(() => {
          setCurrentTypingLine(prev => prev + 1);
        }, lineDelay);
      } else {
        // All lines shown, mark as complete
        setIsTypingComplete(true);
      }
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [metricsVisible, currentTypingLine, isTypingComplete]);

  const channels = [
    { icon: '💬', name: t('howItWorks.monitoring.channels.teams') },
    { icon: '📱', name: t('howItWorks.monitoring.channels.telegram') },
    { icon: '💼', name: t('howItWorks.monitoring.channels.slack') },
    { icon: '📧', name: t('howItWorks.monitoring.channels.email') },
    { icon: '🔗', name: t('howItWorks.monitoring.channels.webhook') },
    { icon: '🔔', name: t('howItWorks.monitoring.channels.push') },
  ];

  return (
    <section ref={ref} id="how-it-works" className="py-20 bg-gray-900 relative">
      <div className="background-glow opacity-50" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-up">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-700/20 mb-6">
            <Zap className="w-8 h-8 text-blue-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {t('howItWorks.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('howItWorks.subtitle')}
          </p>
        </div>

        {/* Website Monitoring Section */}
        <div className="mb-20 fade-up" style={{ transitionDelay: '100ms' }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-700/20 mb-4">
                <Globe className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                {t('howItWorks.monitoring.title')}
              </h3>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                {t('howItWorks.monitoring.description')}
              </p>
            </div>

            {/* Example Card */}
            <div className="glass-card p-6 rounded-xl mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {t('howItWorks.monitoring.example.title')}
                  </h4>
                  <div className="flex items-center space-x-4 text-gray-300">
                    <div className="flex items-center space-x-2">
                      <Globe className="w-4 h-4" />
                      <span className="text-sm">{t('howItWorks.monitoring.example.website')}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{t('howItWorks.monitoring.example.interval')}</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                {t('howItWorks.monitoring.example.description')}
              </p>
            </div>

            {/* Animated Flow Diagram */}
            <div className="glass-card p-8 rounded-xl">
              <h4 className="text-xl font-semibold text-white mb-6 text-center">
                {t('howItWorks.monitoring.flow.monitoring')}
              </h4>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Application 1 - Success */}
                <div className="space-y-4">
                  <div className="text-center mb-4">
                    <h5 className="text-sm font-medium text-gray-400 mb-2">Application 1</h5>
                    <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-800 rounded-lg">
                      <Globe className="w-5 h-5 text-blue-500" />
                      <span className="text-white font-medium">www.example1.com</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className={`flex items-center space-x-3 p-3 rounded-lg transition-all ${
                      animationStep >= 1 ? 'bg-blue-700/20 border border-blue-700/50' : 'bg-gray-800/50'
                    }`}>
                      <Activity className={`w-5 h-5 ${animationStep >= 1 ? 'text-blue-500 animate-pulse' : 'text-gray-500'}`} />
                      <span className="text-sm text-gray-300">
                        {t('howItWorks.monitoring.flow.checking')}
                        {animationStep === 1 && <span className="inline-block ml-1 animate-pulse">...</span>}
                      </span>
                    </div>
                    
                    {animationStep >= 1 && (
                      <div className="flex justify-center py-1">
                        <ArrowDown className="w-5 h-5 text-blue-500" />
                      </div>
                    )}
                    
                    <div className={`flex items-center justify-between p-3 rounded-lg transition-all ${
                      animationStep >= 2 ? 'bg-green-700/20 border border-green-700/50' : 'bg-gray-800/50'
                    }`}>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className={`w-5 h-5 ${animationStep >= 2 ? 'text-green-500' : 'text-gray-500'}`} />
                        <span className="text-sm text-gray-300">{t('howItWorks.monitoring.flow.success')}</span>
                      </div>
                      {animationStep >= 2 && (
                        <span className="text-xs font-mono text-green-400 bg-green-700/20 px-2 py-1 rounded">
                          200
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Application 2 - Failed */}
                <div className="space-y-4">
                  <div className="text-center mb-4">
                    <h5 className="text-sm font-medium text-gray-400 mb-2">Application 2</h5>
                    <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-800 rounded-lg">
                      <Globe className="w-5 h-5 text-blue-500" />
                      <span className="text-white font-medium">www.example2.com</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className={`flex items-center space-x-3 p-3 rounded-lg transition-all ${
                      animationStep >= 1 ? 'bg-blue-700/20 border border-blue-700/50' : 'bg-gray-800/50'
                    }`}>
                      <Activity className={`w-5 h-5 ${animationStep >= 1 ? 'text-blue-500 animate-pulse' : 'text-gray-500'}`} />
                      <span className="text-sm text-gray-300">
                        {t('howItWorks.monitoring.flow.checking')}
                        {animationStep === 1 && <span className="inline-block ml-1 animate-pulse">...</span>}
                      </span>
                    </div>
                    
                    {animationStep >= 1 && (
                      <div className="flex justify-center py-1">
                        <ArrowDown className="w-5 h-5 text-blue-500" />
                      </div>
                    )}
                    
                    <div className={`flex items-center justify-between p-3 rounded-lg transition-all ${
                      animationStep >= 2 ? 'bg-red-700/20 border border-red-700/50' : 'bg-gray-800/50'
                    }`}>
                      <div className="flex items-center space-x-3">
                        <XCircle className={`w-5 h-5 ${animationStep >= 2 ? 'text-red-500' : 'text-gray-500'}`} />
                        <div className="flex flex-col">
                          <span className="text-sm text-gray-300">{t('howItWorks.monitoring.flow.failed')}</span>
                          {animationStep >= 2 && (
                            <span className="text-xs text-red-400 mt-1">Website unavailable 500</span>
                          )}
                        </div>
                      </div>
                      {animationStep >= 2 && (
                        <span className="text-xs font-mono text-red-400 bg-red-700/20 px-2 py-1 rounded">
                          500
                        </span>
                      )}
                    </div>
                    
                    {animationStep >= 2 && (
                      <div className="flex justify-center py-1">
                        <ArrowDown className="w-5 h-5 text-red-500" />
                      </div>
                    )}
                    
                    <div className={`flex items-center space-x-3 p-3 rounded-lg transition-all ${
                      animationStep >= 3 ? 'bg-orange-700/20 border border-orange-700/50' : 'bg-gray-800/50'
                    }`}>
                      <Bell className={`w-5 h-5 ${animationStep >= 3 ? 'text-orange-500 animate-bounce' : 'text-gray-500'}`} />
                      <span className="text-sm text-gray-300">
                        {t('howItWorks.monitoring.flow.alert')}
                        {animationStep === 3 && <span className="inline-block ml-1 animate-pulse">...</span>}
                      </span>
                    </div>
                    
                    {animationStep >= 3 && (
                      <div className="flex justify-center py-1">
                        <ArrowDown className="w-5 h-5 text-orange-500" />
                      </div>
                    )}
                    
                    {animationStep >= 4 && (
                      <div className="mt-4 p-4 bg-purple-700/20 border border-purple-700/50 rounded-lg">
                        <p className="text-xs font-medium text-purple-400 mb-3 text-center">
                          {t('howItWorks.monitoring.channels.title')}
                        </p>
                        <div className="grid grid-cols-3 gap-2">
                          {channels.map((channel, idx) => (
                            <div
                              key={idx}
                              className="flex flex-col items-center p-2 bg-gray-800/50 rounded text-center opacity-0 animate-fade-in"
                              style={{ 
                                animationDelay: `${idx * 200}ms`,
                                animationFillMode: 'forwards'
                              }}
                            >
                              <span className="text-lg mb-1">{channel.icon}</span>
                              <span className="text-xs text-gray-300">{channel.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setAnimationStep(0);
                  setIsAnimating(true);
                }}
                className={`w-full mt-4 px-4 py-2 rounded-lg transition-colors text-sm font-medium ${
                  animationStep >= 4 && !isAnimating
                    ? 'bg-purple-700 hover:bg-purple-800 text-white'
                    : 'bg-gray-800 hover:bg-gray-700 text-white'
                }`}
              >
                {animationStep >= 4 && !isAnimating ? 'Replay Animation' : 'Start Animation'}
              </button>
            </div>
          </div>
        </div>

        {/* Metrics Monitoring Section */}
        <div className="fade-up" style={{ transitionDelay: '200ms' }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-700/20 mb-4">
                <Server className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                {t('howItWorks.metrics.title')}
              </h3>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                {t('howItWorks.metrics.description')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {/* Agent */}
              <div className="glass-card p-6 rounded-xl">
                <div className="w-12 h-12 rounded-lg bg-blue-700/20 flex items-center justify-center mb-4">
                  <Server className="w-6 h-6 text-blue-500" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {t('howItWorks.metrics.agent.title')}
                </h4>
                <p className="text-gray-300 text-sm">
                  {t('howItWorks.metrics.agent.description')}
                </p>
              </div>

              {/* Connection */}
              <div className="glass-card p-6 rounded-xl">
                <div className="w-12 h-12 rounded-lg bg-green-700/20 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-green-500" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {t('howItWorks.metrics.connection.title')}
                </h4>
                <p className="text-gray-300 text-sm">
                  {t('howItWorks.metrics.connection.description')}
                </p>
              </div>

              {/* Storage */}
              <div className="glass-card p-6 rounded-xl">
                <div className="w-12 h-12 rounded-lg bg-purple-700/20 flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-purple-500" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {t('howItWorks.metrics.storage.title')}
                </h4>
                <p className="text-gray-300 text-sm">
                  {t('howItWorks.metrics.storage.description')}
                </p>
              </div>

              {/* Visualization */}
              <div className="glass-card p-6 rounded-xl">
                <div className="w-12 h-12 rounded-lg bg-yellow-700/20 flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-yellow-500" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {t('howItWorks.metrics.visualization.title')}
                </h4>
                <p className="text-gray-300 text-sm">
                  {t('howItWorks.metrics.visualization.description')}
                </p>
              </div>
            </div>

            {/* Flow Diagram */}
            <div className="glass-card p-8 rounded-xl mb-8">
              <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8">
                <div className="flex-1 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-700/20 mb-4">
                    <Server className="w-8 h-8 text-blue-500" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Kubernetes Cluster</h4>
                  <p className="text-gray-300 text-sm">Nodes & Pods</p>
                  <p className="text-gray-400 text-xs mt-2">CPU & RAM Metrics</p>
                </div>

                <div className="relative hidden md:block w-20 h-16 flex items-center justify-center">
                  <div className="absolute flex items-center space-x-3 w-full justify-center">
                    <ChevronRight className="w-4 h-4 text-blue-400 animate-flow-data" title="CPU Metrics" />
                    <ChevronRight className="w-4 h-4 text-green-400 animate-flow-data-delayed" title="RAM Metrics" />
                  </div>
                </div>

                <div className="flex-1 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-700/20 mb-4">
                    <Zap className="w-8 h-8 text-green-500" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">AlertHawk Agent</h4>
                  <p className="text-gray-300 text-sm">Collects Metrics</p>
                  <p className="text-gray-400 text-xs mt-2">Selected Namespaces</p>
                </div>

                <div className="relative hidden md:block w-20 h-16 flex items-center justify-center">
                  <div className="absolute flex items-center space-x-3 w-full justify-center">
                    <ChevronRight className="w-4 h-4 text-green-400 animate-flow-data" title="CPU Metrics" />
                    <ChevronRight className="w-4 h-4 text-purple-400 animate-flow-data-delayed" title="RAM Metrics" />
                  </div>
                </div>

                <div className="flex-1 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-700/20 mb-4">
                    <Database className="w-8 h-8 text-purple-500" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">AlertHawk Server</h4>
                  <p className="text-gray-300 text-sm">ClickHouse Database</p>
                  <p className="text-gray-400 text-xs mt-2">Fast Queries</p>
                </div>

                <div className="relative hidden md:block w-20 h-16 flex items-center justify-center">
                  <div className="absolute flex items-center space-x-3 w-full justify-center">
                    <ChevronRight className="w-4 h-4 text-purple-400 animate-flow-data" title="CPU Metrics" />
                    <ChevronRight className="w-4 h-4 text-yellow-400 animate-flow-data-delayed" title="RAM Metrics" />
                  </div>
                </div>

                <div className="flex-1 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-700/20 mb-4">
                    <BarChart3 className="w-8 h-8 text-yellow-500" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Dashboards</h4>
                  <p className="text-gray-300 text-sm">Charts & Analytics</p>
                  <p className="text-gray-400 text-xs mt-2">Real-time Insights</p>
                </div>
              </div>
            </div>

            {/* Terminal Window with Metrics */}
            <div className="glass-card rounded-xl overflow-hidden">
              <div className="bg-gray-800/80 px-4 py-3 border-b border-gray-700/50 flex items-center space-x-2">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <span className="text-xs text-gray-400 ml-2 font-mono">alerthawk-agent --collect-metrics</span>
              </div>
              <div className="bg-gray-950 p-6 font-mono text-sm">
                <div className="space-y-1 text-green-400">
                  <div className={`flex items-center space-x-2 ${currentTypingLine >= 0 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}>
                    <span className="text-gray-500">$</span>
                    <span>Collecting metrics from cluster: production-k8s</span>
                  </div>
                  <div className={`flex items-center space-x-2 ${currentTypingLine >= 1 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}>
                    <span className="text-gray-500">$</span>
                    <span>Namespace: default</span>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className={`text-blue-400 ${currentTypingLine >= 2 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}>
                      <span className="text-gray-500">[NODE]</span> worker-node-1
                    </div>
                    <div className={`ml-4 text-gray-300 ${currentTypingLine >= 3 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}>
                      <span className="text-cyan-400">CPU:</span> <span className="text-yellow-400">45.2%</span> <span className="text-gray-500">|</span> <span className="text-cyan-400">RAM:</span> <span className="text-yellow-400">8.1GB</span> / 16GB (50.6%)
                    </div>
                    <div className={`ml-4 text-gray-300 ${currentTypingLine >= 4 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}>
                      <span className="text-cyan-400">CPU:</span> <span className="text-yellow-400">52.8%</span> <span className="text-gray-500">|</span> <span className="text-cyan-400">RAM:</span> <span className="text-yellow-400">9.3GB</span> / 16GB (58.1%)
                    </div>
                    <div className={`text-blue-400 mt-3 ${currentTypingLine >= 5 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}>
                      <span className="text-gray-500">[POD]</span> app-frontend-7d8f9
                    </div>
                    <div className={`ml-4 text-gray-300 ${currentTypingLine >= 6 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}>
                      <span className="text-cyan-400">CPU:</span> <span className="text-yellow-400">125m</span> <span className="text-gray-500">|</span> <span className="text-cyan-400">RAM:</span> <span className="text-yellow-400">256MB</span> / 512MB (50%)
                    </div>
                    <div className={`text-blue-400 mt-3 ${currentTypingLine >= 7 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}>
                      <span className="text-gray-500">[POD]</span> app-backend-4k2j1
                    </div>
                    <div className={`ml-4 text-gray-300 ${currentTypingLine >= 8 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}>
                      <span className="text-cyan-400">CPU:</span> <span className="text-yellow-400">340m</span> <span className="text-gray-500">|</span> <span className="text-cyan-400">RAM:</span> <span className="text-yellow-400">512MB</span> / 1GB (50%)
                    </div>
                    <div className={`text-blue-400 mt-3 ${currentTypingLine >= 9 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}>
                      <span className="text-gray-500">[NODE]</span> worker-node-2
                    </div>
                    <div className={`ml-4 text-gray-300 ${currentTypingLine >= 10 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}>
                      <span className="text-cyan-400">CPU:</span> <span className="text-yellow-400">38.7%</span> <span className="text-gray-500">|</span> <span className="text-cyan-400">RAM:</span> <span className="text-yellow-400">7.2GB</span> / 16GB (45%)
                    </div>
                    <div className={`ml-4 text-gray-300 ${currentTypingLine >= 11 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}>
                      <span className="text-cyan-400">CPU:</span> <span className="text-yellow-400">41.3%</span> <span className="text-gray-500">|</span> <span className="text-cyan-400">RAM:</span> <span className="text-yellow-400">7.8GB</span> / 16GB (48.8%)
                    </div>
                    <div className={`mt-4 text-green-400 flex items-center space-x-2 ${currentTypingLine >= 12 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}>
                      <span className="text-gray-500">$</span>
                      <span className={currentTypingLine >= 12 ? 'animate-pulse' : ''}>Metrics sent to AlertHawk Server ✓</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
