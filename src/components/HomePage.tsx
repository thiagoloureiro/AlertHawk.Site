'use client';

import { LanguageProvider } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Advantages } from '@/components/Advantages';
import { Features } from '@/components/Features';
import { ProductProof } from '@/components/ProductProof';
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
  { id: 'advantages', labelKey: 'rail.advantages' },
  { id: 'capabilities', labelKey: 'rail.capabilities' },
  { id: 'proof', labelKey: 'rail.proof' },
  { id: 'deploy', labelKey: 'rail.deploy' },
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
          <Advantages />
          <Features />
          <ProductProof />
          <DeploymentInfo />
          <Pricing />
          <Contact />
        </main>
        <Footer />
      </SiteLayout>
    </LanguageProvider>
  );
}
