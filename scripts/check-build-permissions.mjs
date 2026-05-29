import { accessSync, constants, rmSync } from 'node:fs';
import { join } from 'node:path';

const paths = ['dist', join('node_modules', 'vite-prerender-plugin', 'headless-prerender')];

for (const dir of paths) {
  try {
    accessSync(dir, constants.W_OK);
    rmSync(dir, { recursive: true, force: true });
  } catch (err) {
    if (err.code === 'ENOENT') continue;
    console.error(`
Build directories are not writable (often caused by a previous Docker build as root).

Fix locally:
  sudo chown -R "$(whoami)" dist node_modules/vite-prerender-plugin

Then run: npm run build
`);
    process.exit(1);
  }
}
