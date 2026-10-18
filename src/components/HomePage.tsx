'use client';

import { LanguageProvider } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { HowItWorks } from '@/components/HowItWorks';
import { Features } from '@/components/Features';
import { Benefits } from '@/components/Benefits';
import { KubernetesMonitoring } from '@/components/KubernetesMonitoring';
import { FinOps } from '@/components/FinOps';
import { DeploymentInfo } from '@/components/DeploymentInfo';
import { Pricing } from '@/components/Pricing';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { SiteLayout } from '@/components/SiteLayout';
import {
  ScrollProgressRail,
  type RailSection,
} from '@/components/ScrollProgressRail';

const RAIL_SECTIONS: RailSection[] = [
  { id: 'home', labelKey: 'rail.home' },
  { id: 'how-it-works', labelKey: 'rail.howItWorks' },
  { id: 'kubernetes-monitoring', labelKey: 'rail.kubernetes' },
  { id: 'finops', labelKey: 'rail.finops' },
  { id: 'features', labelKey: 'rail.features' },
  { id: 'pricing', labelKey: 'rail.pricing' },
  { id: 'contact', labelKey: 'rail.contact' },
];

export function HomePage() {
  return (
    <LanguageProvider>
      <SiteLayout>
        <Header />
        <ScrollProgressRail sections={RAIL_SECTIONS} />
        <main id="main" className="relative z-10 lg:pr-[100px]">
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
