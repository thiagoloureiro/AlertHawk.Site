import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoImage from '../assets/logo.png';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-lg z-50 border-b border-gray-800">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Left */}
          <a 
            href="#home" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity z-10"
          >
            <img 
              src={logoImage} 
              alt="AlertHawk Logo" 
              className="w-10 h-10 md:w-12 md:h-12"
            />
            <span className="text-xl md:text-2xl font-bold text-white tracking-tight">AlertHawk</span>
          </a>
          
          {/* Desktop Menu - Center */}
          <div className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center space-x-1 bg-gray-800/50 backdrop-blur-sm px-2 py-2 rounded-lg border border-gray-700/50">
              {navLinks.map((link, index) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.id);
                  }}
                  className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-md transition-all duration-200 cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button - Right */}
          <button
            className="md:hidden text-gray-300 hover:text-white transition-colors z-10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
          
          {/* Spacer for mobile to balance layout */}
          <div className="md:hidden w-10 h-10"></div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-800 bg-gray-900/95 backdrop-blur-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.id);
                }}
                className="text-gray-300 hover:text-white transition-colors cursor-pointer py-2"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}