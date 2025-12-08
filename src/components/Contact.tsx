import React, { useState } from 'react';
import { Mail, Github, MessageCircle, Globe, Send, CheckCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLanguage } from '../contexts/LanguageContext';

export function Contact() {
  const ref = useScrollReveal();
  const { t } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xzznaepb', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section ref={ref} id="contact" className="py-20 bg-gray-800/50 relative">
      <div className="background-glow opacity-50" />
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

          <div className="mt-8 fade-up" style={{ transitionDelay: '300ms' }}>
            <div className="glass-card p-8 rounded-xl">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-purple-700/20 mb-4">
                  <Mail className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-white">
                  {t('contact.form.title')}
                </h3>
                <p className="text-gray-400">
                  {t('contact.form.subtitle')}
                </p>
              </div>

              {status === 'success' ? (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-700/20 mb-4">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">{t('contact.form.success.title')}</h4>
                  <p className="text-gray-300">
                    {t('contact.form.success.description')}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      {t('contact.form.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder={t('contact.form.emailPlaceholder')}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                      placeholder={t('contact.form.messagePlaceholder')}
                    />
                  </div>

                  {status === 'error' && (
                    <div className="p-3 bg-red-900/20 border border-red-700/50 rounded-lg">
                      <p className="text-red-400 text-sm">
                        {t('contact.form.error')}
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full inline-flex items-center justify-center bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        {t('contact.form.sending')}
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        {t('contact.form.send')}
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
