import { readdirSync } from 'node:fs';
import { join } from 'node:path';

/** Map dev SSR paths (/src/assets/…) to built /assets/[name]-[hash].ext URLs. */
export function buildAssetUrlMap(assetsDir: string): Map<string, string> {
  const map = new Map<string, string>();

  for (const file of readdirSync(assetsDir)) {
    const dot = file.lastIndexOf('.');
    if (dot === -1) continue;

    const ext = file.slice(dot + 1);
    if (!/^(png|jpe?g|gif|webp|svg)$/i.test(ext)) continue;

    const base = file.slice(0, dot);
    const dash = base.lastIndexOf('-');
    if (dash === -1) continue;

    const hash = base.slice(dash + 1);
    if (!/^[A-Za-z0-9_-]{6,12}$/.test(hash)) continue;

    const original = `${base.slice(0, dash)}.${ext}`;
    const built = `/assets/${file}`;

    map.set(`/src/assets/${original}`, built);

    // Vite flattens nested imports (e.g. store-badges/google-play-badge.png).
    const nested = original.includes('/') ? original.split('/').pop()! : original;
    map.set(`/src/assets/store-badges/${nested}`, built);
  }

  return map;
}

export function rewritePrerenderAssetUrls(html: string, assetsDir: string): string {
  const map = buildAssetUrlMap(assetsDir);
  let out = html;
  for (const [from, to] of map) {
    out = out.split(from).join(to);
  }
  return out;
}
