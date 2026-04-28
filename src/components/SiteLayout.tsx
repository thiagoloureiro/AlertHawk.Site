import React from 'react';
import { GlobeDotsBackground } from './GlobeDotsBackground';

type SiteLayoutProps = {
  children: React.ReactNode;
};

/**
 * Global shell: base color, ambient glow, and globe background for every view.
 * Wrap routed pages here so the same backdrop applies across the site.
 */
export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-900 relative overflow-x-hidden">
      <div className="background-glow opacity-70" />
      <GlobeDotsBackground />
      {children}
    </div>
  );
}
