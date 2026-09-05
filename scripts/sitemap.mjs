/**
 * Генерация dist/sitemap.xml из реестра src/seo/pages.ts (seo-plan v3 §3.3):
 * только индексируемые URL, только <loc> — без выдуманных lastmod/priority.
 */
import { writeFileSync } from 'node:fs';
import { pages, SITE_ORIGIN } from '../src/seo/pages.ts';

const urls = pages.filter((p) => p.sitemap !== false).map((p) => `  <url>\n    <loc>${SITE_ORIGIN}${p.path}</loc>\n  </url>`);

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`;

const out = new URL('../dist/sitemap.xml', import.meta.url).pathname;
writeFileSync(out, xml);
console.log(`sitemap.xml: ${urls.length} URLs`);
