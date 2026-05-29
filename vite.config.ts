import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { vitePrerenderPlugin } from 'vite-prerender-plugin';
import { structuredDataGraph } from './src/seo/structuredData';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function injectStructuredData(): Plugin {
  const jsonLd = JSON.stringify(structuredDataGraph);
  return {
    name: 'inject-structured-data',
    transformIndexHtml(html) {
      return html.replace('<!-- STRUCTURED_DATA -->', jsonLd);
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    injectStructuredData(),
    vitePrerenderPlugin({
      renderTarget: '#root',
      prerenderScript: path.resolve(__dirname, 'src/prerender.tsx'),
    }),
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
