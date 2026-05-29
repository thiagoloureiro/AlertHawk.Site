import { readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { createServer, defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { structuredDataGraph } from './src/seo/structuredData';

function injectStructuredData(): Plugin {
  const jsonLd = JSON.stringify(structuredDataGraph);
  return {
    name: 'inject-structured-data',
    transformIndexHtml(html) {
      return html.replace('<!-- STRUCTURED_DATA -->', jsonLd);
    },
  };
}

/**
 * SSR the app into dist/index.html after the client build.
 * Uses a minimal Vite server (not vite.config) to avoid plugin recursion and temp dirs.
 */
function prerenderHtmlPlugin(): Plugin {
  let outDir = 'dist';

  return {
    name: 'prerender-html',
    apply: 'build',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir);
    },
    async closeBundle() {
      const server = await createServer({
        root: process.cwd(),
        plugins: [react()],
        logLevel: 'error',
      });

      try {
        const { prerender } = await server.ssrLoadModule('/src/prerender.tsx');
        const { html: appHtml } = await prerender();
        const indexPath = join(outDir, 'index.html');
        const doc = readFileSync(indexPath, 'utf-8');
        writeFileSync(
          indexPath,
          doc.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`),
        );
      } finally {
        await server.close();
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), injectStructuredData(), prerenderHtmlPlugin()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
