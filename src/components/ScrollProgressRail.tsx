'use client';

import { useCallback, useEffect, useMemo, useState, type MouseEvent } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export type RailSection = {
  id: string;
  labelKey: string;
};

/** Full rail including short section labels + tick ruler */
const RAIL_WIDTH = 100;
const TICK_WIDTH = 56;
const MAJOR_STEP = 5;

type MarkerPosition = {
  id: string;
  label: string;
  percent: number;
};

export function ScrollProgressRail({ sections }: { sections: RailSection[] }) {
  const { t } = useLanguage();
  const [scrollPercent, setScrollPercent] = useState(0);
  const [markers, setMarkers] = useState<MarkerPosition[]>([]);
  const [activeId, setActiveId] = useState(sections[0]?.id ?? '');
  const [viewportHeight, setViewportHeight] = useState(900);

  const measure = useCallback(() => {
    const doc = document.documentElement;
    const scrollable = Math.max(doc.scrollHeight - window.innerHeight, 1);
    const percent = Math.min(100, Math.max(0, (window.scrollY / scrollable) * 100));
    setScrollPercent(percent);
    setViewportHeight(window.innerHeight);

    const nextMarkers: MarkerPosition[] = [];
    for (const section of sections) {
      const el = document.getElementById(section.id);
      if (!el) continue;
      const top = el.getBoundingClientRect().top + window.scrollY;
      nextMarkers.push({
        id: section.id,
        label: t(section.labelKey),
        percent: Math.min(100, Math.max(0, (top / doc.scrollHeight) * 100)),
      });
    }
    setMarkers(nextMarkers);

    let current = sections[0]?.id ?? '';
    for (const marker of nextMarkers) {
      const el = document.getElementById(marker.id);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.35) {
        current = marker.id;
      }
    }
    setActiveId(current);
  }, [sections, t]);

  useEffect(() => {
    measure();
    window.addEventListener('scroll', measure, { passive: true });
    window.addEventListener('resize', measure);
    return () => {
      window.removeEventListener('scroll', measure);
      window.removeEventListener('resize', measure);
    };
  }, [measure]);

  const ticks = useMemo(() => {
    const dense: { percent: number; major: boolean }[] = [];
    for (let p = 0; p <= 100; p += 1) {
      dense.push({ percent: p, major: p % MAJOR_STEP === 0 });
    }
    return dense;
  }, []);

  const trackHeight = viewportHeight * 5.5;
  // Keep current scroll % near vertical center of viewport
  const trackOffset = viewportHeight / 2 - (scrollPercent / 100) * trackHeight;

  const jumpToPercent = (percent: number) => {
    const doc = document.documentElement;
    const scrollable = Math.max(doc.scrollHeight - window.innerHeight, 0);
    window.scrollTo({
      top: (percent / 100) * scrollable,
      behavior: 'smooth',
    });
  };

  const jumpToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const onRailClick = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    // Map click Y through the transformed track to a percent
    const yInRail = event.clientY - rect.top;
    const yInTrack = yInRail - trackOffset;
    const percent = Math.min(100, Math.max(0, (yInTrack / trackHeight) * 100));
    jumpToPercent(percent);
  };

  return (
    <div
      role="scrollbar"
      aria-controls="main"
      aria-orientation="vertical"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(scrollPercent)}
      aria-label="Page position"
      className="scroll-progress-rail fixed inset-y-0 right-0 z-40 hidden cursor-crosshair overflow-hidden lg:block"
      style={{ width: RAIL_WIDTH }}
      onClick={onRailClick}
    >
      {/* Soft edge fade across the full rail width */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backdropFilter: 'blur(9px)',
          backgroundColor:
            'color-mix(in srgb, var(--rail-bg) 55%, transparent)',
          maskImage:
            'linear-gradient(to left, black 35%, rgba(0,0,0,0.7) 55%, rgba(0,0,0,0.35) 75%, transparent 100%)',
        }}
      />

      {/* Percentage ticks — right column only */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 overflow-hidden"
        style={{ width: TICK_WIDTH }}
      >
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 will-change-transform"
          style={{
            height: trackHeight,
            transform: `translate3d(0, ${trackOffset}px, 0)`,
          }}
        >
          {ticks.map(({ percent, major }) => {
            const top = (percent / 100) * trackHeight;
            const dist = Math.abs(percent - scrollPercent);
            const opacity = major
              ? Math.max(0.12, 0.55 - dist / 80)
              : Math.max(0.08, 0.35 - dist / 60);
            return (
              <div
                key={percent}
                className="absolute inset-x-0"
                style={{ top, height: 0 }}
              >
                <span
                  className="absolute right-0 top-0 block bg-[var(--rail-ink)]"
                  style={{
                    width: major ? 18 : 9,
                    height: 1,
                    opacity,
                  }}
                />
                {major && (
                  <span
                    className="absolute -translate-y-1/2 font-mono text-[var(--rail-ink)]"
                    style={{
                      right: 22,
                      top: 0,
                      fontSize: 9,
                      letterSpacing: '0.06em',
                      opacity,
                    }}
                  >
                    {percent}
                  </span>
                )}
              </div>
            );
          })}

          <span
            className="absolute -translate-y-1/2 font-mono text-[var(--rail-ink)]"
            style={{
              right: 22,
              top: trackHeight,
              fontSize: 9,
              letterSpacing: '0.06em',
              opacity: 0.4,
            }}
          >
            %
          </span>
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute right-0 h-px w-5 bg-blue-400"
          style={{ top: '50%', opacity: 0.9 }}
        />
      </div>

      {/* Section labels sit in the left portion of the wider rail */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0"
        style={{ right: TICK_WIDTH - 8 }}
      >
        {markers.map((marker) => {
          const top = trackOffset + (marker.percent / 100) * trackHeight;
          const isActive = marker.id === activeId;
          return (
            <a
              key={marker.id}
              href={`#${marker.id}`}
              aria-label={`Jump to ${marker.label}`}
              className="pointer-events-auto absolute inset-x-0 flex -translate-y-1/2 items-center justify-end gap-1 px-1 transition-opacity"
              style={{
                top,
                opacity: isActive ? 1 : 0.55,
              }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                jumpToSection(marker.id);
              }}
            >
              <span
                className={`whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.08em] ${
                  isActive ? 'text-white' : 'text-gray-400'
                }`}
              >
                {marker.label}
              </span>
              <span
                className={`block h-px shrink-0 ${
                  isActive ? 'w-3 bg-blue-400' : 'w-2 bg-gray-500'
                }`}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
}
