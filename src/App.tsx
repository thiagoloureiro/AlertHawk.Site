import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Benefits } from './components/Benefits';
import { KubernetesMonitoring } from './components/KubernetesMonitoring';
import { DeploymentInfo } from './components/DeploymentInfo';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      <div className="background-grid" />
      <div className="background-glow" />
      <Header />
      <main>
        <Hero />
        <KubernetesMonitoring />
        <Features />
        <Benefits />
        <DeploymentInfo />
      </main>
      <Footer />
    </div>
  );
}