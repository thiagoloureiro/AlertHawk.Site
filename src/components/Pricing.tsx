import React from 'react';
import { Check, Github, Zap, Shield, Cloud, Mail } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function Pricing() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} id="pricing" className="py-20 bg-gray-900 relative">
      <div className="background-glow opacity-50" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-up">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-700/20 mb-6">
            <Zap className="w-8 h-8 text-green-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Self-hosted and free, or let us handle everything with our managed SaaS offering.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Open Source Plan */}
            <div className="glass-card p-8 md:p-10 rounded-2xl fade-up" style={{ transitionDelay: '100ms' }}>
              <div className="flex items-center justify-center mb-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-700/20 border border-green-700/50">
                  <Github className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-green-400 font-semibold">Open Source</span>
                </div>
              </div>

              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-5xl md:text-6xl font-bold text-white">$0</span>
                  <span className="text-xl text-gray-400 ml-2">/forever</span>
                </div>
                <p className="text-lg text-gray-300 mb-8">
                  Self-hosted and completely free. Deploy on your infrastructure with full control.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">Unlimited Monitoring</h3>
                    <p className="text-gray-300 text-sm">Monitor unlimited endpoints, clusters, and metrics</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">Full Source Code Access</h3>
                    <p className="text-gray-300 text-sm">View, modify, and contribute to the codebase</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">Self-Hosted Deployment</h3>
                    <p className="text-gray-300 text-sm">Complete data control on your infrastructure</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">All Features Included</h3>
                    <p className="text-gray-300 text-sm">Kubernetes monitoring, alerts, notifications, and more</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">Community Support</h3>
                    <p className="text-gray-300 text-sm">Active community and GitHub discussions</p>
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
                  View on GitHub
                </a>
                <a 
                  href="https://artifacthub.io/packages/helm/alerthawk/alerthawk" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-800 transition-colors"
                >
                  <Shield className="w-5 h-5 mr-2" />
                  Deploy with Helm
                </a>
              </div>
            </div>

            {/* SaaS Plan */}
            <div className="glass-card p-8 md:p-10 rounded-2xl border-2 border-purple-700/30 fade-up relative" style={{ transitionDelay: '200ms' }}>
              <div className="absolute top-4 right-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-700/20 border border-purple-700/50">
                  <span className="text-purple-400 text-xs font-semibold">POPULAR</span>
                </div>
              </div>

              <div className="flex items-center justify-center mb-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-700/20 border border-purple-700/50">
                  <Cloud className="w-5 h-5 text-purple-500 mr-2" />
                  <span className="text-purple-400 font-semibold">Managed SaaS</span>
                </div>
              </div>

              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-5xl md:text-6xl font-bold text-white">Custom</span>
                </div>
                <p className="text-lg text-gray-300 mb-8">
                  Hosted on our infrastructure with personalized support. Contact us for pricing.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-purple-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">Hosted on Our Infrastructure</h3>
                    <p className="text-gray-300 text-sm">We manage the infrastructure, you focus on monitoring</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-purple-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">Personalized Support</h3>
                    <p className="text-gray-300 text-sm">Dedicated support team with priority assistance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-purple-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">All Features Included</h3>
                    <p className="text-gray-300 text-sm">Full access to all monitoring and alerting features</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-purple-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">Managed Updates & Maintenance</h3>
                    <p className="text-gray-300 text-sm">We handle all updates, backups, and maintenance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-purple-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">SLA Guarantee</h3>
                    <p className="text-gray-300 text-sm">Service level agreements for uptime and support</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-purple-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">Custom Configuration</h3>
                    <p className="text-gray-300 text-sm">Tailored setup to match your specific requirements</p>
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
                Contact Us for Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
