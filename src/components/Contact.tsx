import React from 'react';
import { Mail, Github, MessageCircle, Globe } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function Contact() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} id="contact" className="py-20 bg-gray-800/50 relative">
      <div className="background-glow opacity-50" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-up">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-700/20 mb-6">
            <MessageCircle className="w-8 h-8 text-blue-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions, need support, or want to contribute? We'd love to hear from you.
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
                    GitHub
                  </h3>
                  <p className="text-gray-300 mb-3">
                    View the source code, report issues, or contribute to the project.
                  </p>
                  <span className="text-blue-400 text-sm font-medium inline-flex items-center">
                    Visit GitHub
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
                    Live Demo
                  </h3>
                  <p className="text-gray-300 mb-3">
                    Try AlertHawk in action. Explore the dashboard and see all features.
                  </p>
                  <span className="text-purple-400 text-sm font-medium inline-flex items-center">
                    View Demo
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </div>
            </a>
          </div>

          <div className="mt-8 fade-up" style={{ transitionDelay: '300ms' }}>
            <a
              href="mailto:alerthawk@alerthawk.net?subject=SaaS Pricing Inquiry"
              className="glass-card p-6 rounded-xl hover:border-purple-500/50 transition-all duration-300 block group"
            >
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-purple-700/20 flex items-center justify-center group-hover:bg-purple-700/30 transition-colors">
                  <Mail className="w-6 h-6 text-purple-500" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-1 text-white group-hover:text-purple-400 transition-colors">
                    Contact Us for Pricing
                  </h3>
                  <p className="text-purple-400 text-lg font-medium">
                    alerthawk@alerthawk.net
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    For SaaS pricing, support, and inquiries
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
