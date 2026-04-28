import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Features } from './components/Features';
import { Benefits } from './components/Benefits';
import { KubernetesMonitoring } from './components/KubernetesMonitoring';
import { FinOps } from './components/FinOps';
import { DeploymentInfo } from './components/DeploymentInfo';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { SiteLayout } from './components/SiteLayout';

export default function App() {
  return (
    <LanguageProvider>
      <SiteLayout>
        <Header />
        <main className="relative z-10">
          <div id="home">
            <Hero />
          </div>
          <HowItWorks />
          <KubernetesMonitoring />
          <FinOps />
          <Features />
          <Benefits />
          <DeploymentInfo />
          <Pricing />
          <Contact />
        </main>
        <Footer />
      </SiteLayout>
    </LanguageProvider>
  );
}