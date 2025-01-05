import React from 'react';
import { Github, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-gray-950 text-gray-300 py-12 z-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="relative z-20">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/logo.png" 
                alt="AlertHawk Logo" 
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-white">AlertHawk</span>
            </div>
            <p className="text-gray-400">
              Modern monitoring solutions for modern applications.
            </p>
          </div>

          <div className="relative z-20">
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex items-center gap-4">
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