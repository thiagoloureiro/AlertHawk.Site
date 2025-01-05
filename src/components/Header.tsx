import React from 'react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-lg z-50 border-b border-gray-800">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="/logo.png" 
            alt="AlertHawk Logo" 
            className="w-10 h-10 md:w-12 md:h-12"
          />
          <span className="text-2xl md:text-3xl font-bold text-white tracking-tight">AlertHawk</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-gray-300 hover:text-purple-500 transition-colors">Home</a>
          <a href="#features" className="text-gray-300 hover:text-purple-500 transition-colors">Features</a>

        </div>
      </nav>
    </header>
  );
}