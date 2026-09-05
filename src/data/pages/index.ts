import type { PageContent } from './types';
import dizelnoeToplivo from './dizelnoe-toplivo';
import dostavka from './dostavka-dizelnogo-topliva';
import zimnee from './zimnee-dizelnoe-toplivo';
import sNds from './dizelnoe-toplivo-s-nds';
import transport from './toplivo-dlya-transportnoy-kompanii';
import kotelnaya from './toplivo-dlya-kotelnoy';
import mezhsezonnoe from './mezhsezonnoe-dizelnoe-toplivo';
import quality from './quality';
import solyarka from './solyarka';
import generator from './toplivo-dlya-generatora';
import stroika from './toplivo-dlya-stroitelnoy-tehniki';
import dom from './toplivo-dlya-chastnogo-doma';

/** Контент внутренних страниц по каноническому пути (пути — из src/seo/pages.ts). */
export const pageContent: Record<string, PageContent> = Object.fromEntries(
  [dizelnoeToplivo, dostavka, zimnee, sNds, transport, kotelnaya, mezhsezonnoe, quality, solyarka, generator, stroika, dom].map((c) => [
    c.path,
    c
  ])
);
