/**
 * Снапшот-пререндер (seo-plan v3 §3.1): после `vite build` обходит маршруты из
 * src/seo/pages.ts, ждёт отрисовки и сохраняет полный HTML в dist/<route>/index.html.
 * 404 снимается первым — пока dist/index.html ещё пустая SPA-оболочка.
 * Chromium: $CHROMIUM_PATH → системный chromium → кэш Playwright.
 */
import process from 'node:process';
import { createServer } from 'node:http';
import { existsSync, globSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { extname, join } from 'node:path';
import { chromium } from 'playwright-core';
import { pages } from '../src/seo/pages.ts';

const DIST = new URL('../dist/', import.meta.url).pathname;
const PORT = 4179;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.mjs': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.woff2': 'font/woff2',
  '.xml': 'application/xml',
  '.txt': 'text/plain'
};

function findChromium() {
  const candidates = [
    process.env.CHROMIUM_PATH,
    '/usr/bin/chromium-browser',
    '/usr/bin/chromium',
    ...globSync(join(process.env.HOME || '/root', '.cache/ms-playwright/chromium-*/chrome-linux*/chrome'))
      .sort()
      .reverse()
  ].filter(Boolean);
  const found = candidates.find((p) => existsSync(p));
  if (!found) throw new Error('Chromium not found: set CHROMIUM_PATH or install chromium');
  return found;
}

function serveDist() {
  return createServer((req, res) => {
    const url = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    let file = join(DIST, url);
    if (url.endsWith('/')) file = join(file, 'index.html');
    if (!existsSync(file) && !extname(file)) file = `${file}/index.html`;
    if (!existsSync(file)) file = join(DIST, 'index.html'); // SPA fallback (актуален до записи прероендеренной главной)
    try {
      const body = readFileSync(file);
      res.writeHead(200, { 'Content-Type': MIME[extname(file)] || 'application/octet-stream' });
      res.end(body);
    } catch {
      res.writeHead(404).end('not found');
    }
  }).listen(PORT);
}

function outFile(route) {
  if (route === '/404') return join(DIST, '404.html');
  const dir = join(DIST, route);
  mkdirSync(dir, { recursive: true });
  return join(dir, 'index.html');
}

const server = serveDist();
const browser = await chromium.launch({ executablePath: findChromium() });
const page = await browser.newPage({ viewport: { width: 1366, height: 900 } });

async function snapshot(route, urlPath = route) {
  await page.goto(`http://127.0.0.1:${PORT}${urlPath}`, { waitUntil: 'networkidle' });
  await page.waitForSelector('.md-page h1', { timeout: 20000 });
  await page.waitForTimeout(250);
  const html = await page.content();
  writeFileSync(outFile(route), `<!doctype html>\n${html.replace(/^<!doctype html>\s*/i, '')}`);
  const title = await page.title();
  console.log(`✓ ${route} → ${title}`);
}

// 1) 404 — первой, пока оболочка на месте; 2) внутренние; 3) главная — последней.
await snapshot('/404', '/there-is-no-such-page');
const inner = pages.filter((p) => p.path !== '/');
for (const def of inner) await snapshot(def.path);
await snapshot('/');

await browser.close();
server.close();
console.log(`Prerendered ${pages.length + 1} routes into dist/`);
