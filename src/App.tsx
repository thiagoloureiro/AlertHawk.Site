import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Benefits } from './components/Benefits';
import { KubernetesMonitoring } from './components/KubernetesMonitoring';
import { DeploymentInfo } from './components/DeploymentInfo';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-900 relative overflow-hidden">
        <div className="background-grid" />
        <div className="background-glow" />
        <Header />
        <main>
          <div id="home">
            <Hero />
          </div>
          <KubernetesMonitoring />
          <Features />
          <Benefits />
          <DeploymentInfo />
          <Pricing />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}