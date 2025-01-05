import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import logoImage from '../assets/logo.png';
import googlePlayBadge from '../assets/store-badges/google-play-badge.png';
import appStoreBadge from '../assets/store-badges/app-store-badge.png';

export function Footer() {
  return (
    <footer className="relative bg-gray-950 text-gray-300 py-12 z-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="relative z-20">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src={logoImage}
                alt="AlertHawk Logo" 
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-white">AlertHawk</span>
            </div>
            <p className="text-gray-400">
              Modern monitoring solutions for modern applications.
            </p>
          </div>

          <div className="relative z-20 md:col-span-2">
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex flex-wrap items-center gap-6">
              <a 
                href="https://github.com/thiagoloureiro/AlertHawk"
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-block p-2 rounded-full hover:bg-gray-800 hover:text-purple-400 transition-colors cursor-pointer"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/thiago-loureiro-de-azevedo-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block p-2 rounded-full hover:bg-gray-800 hover:text-purple-400 transition-colors cursor-pointer"
                onClick={(e) => e.stopPropagation()}
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://testflight.apple.com/join/wzf2nzP7"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
              >
                <img 
                  src={appStoreBadge} 
                  alt="Download on the App Store" 
                  className="h-12"
                />
              </a>
              <a 
                href="https://play.google.com/store/apps/details?id=net.alerthawk.alerthawk_mobile"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
              >
                <img 
                  src={googlePlayBadge} 
                  alt="Get it on Google Play" 
                  className="h-12"
                />
              </a>
            </div>
          </div>
        </div>
        
        <div className="relative z-20 border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AlertHawk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}