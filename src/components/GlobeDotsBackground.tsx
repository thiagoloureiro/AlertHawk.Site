import React, { useEffect, useRef } from 'react';

const CYAN = '#22d3ee';
const MAGENTA = '#e879f9';

type Dot = { bx: number; by: number; bz: number; color: string; jitter: number };

function makeDots(count: number): Dot[] {
  const dots: Dot[] = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const t = i / (count - 1 || 1);
    const y = 1 - t * 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = golden * i;
    let bx = Math.cos(theta) * r;
    let by = y;
    let bz = Math.sin(theta) * r;
    const shell = 0.88 + Math.random() * 0.14;
    bx *= shell;
    by *= shell;
    bz *= shell;
    bx += (Math.random() - 0.5) * 0.06;
    by += (Math.random() - 0.5) * 0.06;
    bz += (Math.random() - 0.5) * 0.06;
    const band = Math.abs(by);
    const magentaBias = band > 0.55 || Math.random() < 0.22;
    dots.push({
      bx,
      by,
      bz,
      color: magentaBias ? MAGENTA : CYAN,
      jitter: Math.random(),
    });
  }
  return dots;
}

function rotateY(x: number, y: number, z: number, a: number) {
  const c = Math.cos(a);
  const s = Math.sin(a);
  return { x: x * c + z * s, y, z: -x * s + z * c };
}

function rotateX(x: number, y: number, z: number, a: number) {
  const c = Math.cos(a);
  const s = Math.sin(a);
  return { x, y: y * c - z * s, z: y * s + z * c };
}

export function GlobeDotsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[] | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (!dotsRef.current) {
      dotsRef.current = makeDots(4200);
    }
    const dots = dotsRef.current;

    let raf = 0;
    const start = performance.now();

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = (now: number) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const t = (now - start) * 0.001;

      ctx.clearRect(0, 0, w, h);

      const autoRotY = t * 0.35;
      const autoRotX = Math.sin(t * 0.25) * 0.12;

      const cx = w * 0.5;
      const cy = h * 0.5;
      const perspective = 2.4;
      const baseScale = Math.min(w, h) * 1.16;

      const depthAlpha = (z: number) => {
        const n = (z + 1.2) / 2.4;
        return Math.max(0.12, Math.min(1, n));
      };

      const projected: { sx: number; sy: number; z: number; color: string; a: number; r: number }[] = [];

      for (const d of dots) {
        let { x, y, z } = { x: d.bx, y: d.by, z: d.bz };
        ({ x, y, z } = rotateY(x, y, z, autoRotY));
        ({ x, y, z } = rotateX(x, y, z, autoRotX));
        const zp = z + perspective;
        if (zp < 0.15) continue;
        const inv = 1 / zp;
        const sx = cx + x * inv * baseScale;
        const sy = cy + y * inv * baseScale;
        const a = depthAlpha(z);
        const r = 0.55 + d.jitter * 0.85 + (z + 1) * 0.25;
        projected.push({ sx, sy, z, color: d.color, a, r });
      }

      projected.sort((a, b) => a.z - b.z);

      for (const p of projected) {
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.a * 0.92;
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      const vignette = ctx.createRadialGradient(cx, cy, baseScale * 0.2, cx, cy, Math.max(w, h) * 0.65);
      vignette.addColorStop(0, 'rgba(3, 7, 18, 0)');
      vignette.addColorStop(0.55, 'rgba(3, 7, 18, 0.25)');
      vignette.addColorStop(1, 'rgba(3, 7, 18, 0.85)');
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, w, h);

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full min-h-screen"
      aria-hidden
    />
  );
}
