import React from 'react';
import { ArrowRight, Github } from 'lucide-react';
import appImage from '../assets/app.png';
import mobile1 from '../assets/mobile1.png';
import mobile2 from '../assets/mobile2.png';
import mobile3 from '../assets/mobile3.png';

export function Hero() {
  return (
    <section className="pt-32 pb-20 relative">
      <div className="background-glow opacity-75" />
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center fade-up">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <a 
              href="https://github.com/thiagoloureiro/AlertHawk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-1 rounded-full bg-gray-800/50 border border-gray-700/50 text-gray-300 hover:text-white transition-colors"
            >
            
            </a>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Monitor Your Applications/APIs and Hosts with Confidence
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Get real-time insights into your entire stack with powerful monitoring tools designed for modern applications.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="https://artifacthub.io/packages/helm/alerthawk/alerthawk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-800 transition-colors"
            >
              View Helm Chart
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="https://app.alerthawk.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-800 transition-colors"
            >
              Go to AlertHawk
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-16 fade-up" style={{ transitionDelay: '200ms' }}>
          <div className="glass-card p-1 rounded-xl">
            <img
              src={appImage}
              alt="Dashboard Preview"
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="mt-16 fade-up" style={{ transitionDelay: '300ms' }}>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="glass-card p-1 rounded-xl w-64">
              <img
                src={mobile1}
                alt="Mobile App Screenshot 1"
                className="rounded-lg w-full"
              />
            </div>
            <div className="glass-card p-1 rounded-xl w-64">
              <img
                src={mobile2}
                alt="Mobile App Screenshot 2"
                className="rounded-lg w-full"
              />
            </div>
            <div className="glass-card p-1 rounded-xl w-64">
              <img
                src={mobile3}
                alt="Mobile App Screenshot 3"
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}