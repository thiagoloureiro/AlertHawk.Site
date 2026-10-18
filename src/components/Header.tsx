import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoImage from '@/assets/logo.png';
import { LanguageSelector } from './LanguageSelector';
import { useLanguage } from '../contexts/LanguageContext';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: 'home', label: t('nav.home') },
    { id: 'how-it-works', label: t('nav.howItWorks') },
    { id: 'pricing', label: t('nav.pricing') },
    { id: 'contact', label: t('nav.contact') },
    { id: 'docs', label: t('nav.docs'), href: 'https://docs.alerthawk.net/', external: true },
  ];

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-gray-800/80 bg-gray-900/70 backdrop-blur-md lg:right-[100px]">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="z-10 flex cursor-pointer items-center space-x-2 transition-opacity hover:opacity-80"
          >
            <img
              src={logoImage.src}
              alt="AlertHawk Logo"
              className="h-9 w-9 opacity-90 md:h-10 md:w-10"
            />
            <span className="text-lg font-bold tracking-tight text-white md:text-xl">
              AlertHawk
            </span>
          </a>

          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center md:flex">
            <div className="flex items-center gap-1">
              {navLinks.map((link) =>
                'external' in link && link.external && link.href ? (
                  <a
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer px-3 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                ) : (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.id);
                    }}
                    className="cursor-pointer px-3 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                ),
              )}
            </div>
          </div>

          <div className="z-10 flex items-center space-x-4">
            <LanguageSelector />

            <button
              className="text-gray-300 transition-colors hover:text-white md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="border-t border-gray-800 bg-gray-900/95 backdrop-blur-lg md:hidden">
          <div className="container mx-auto flex flex-col space-y-1 px-4 py-4">
            {navLinks.map((link) =>
              'external' in link && link.external && link.href ? (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer py-2 font-mono text-xs uppercase tracking-[0.14em] text-gray-300 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.id);
                  }}
                  className="cursor-pointer py-2 font-mono text-xs uppercase tracking-[0.14em] text-gray-300 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ),
            )}
          </div>
        </div>
      )}
    </header>
  );
}
