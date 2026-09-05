import { useHead } from '@unhead/vue';
import { SITE_ORIGIN, type PageDef } from './pages';
import type { FaqItem } from '@/data/home';

interface SeoExtras {
  /** Видимый FAQ страницы — уходит в разметку FAQPage. */
  faq?: FaqItem[];
  /** Хлебные крошки внутренних страниц — BreadcrumbList. */
  breadcrumbs?: boolean;
  /** LocalBusiness — только главная и /contacts/ (seo-plan §3.6). */
  localBusiness?: boolean;
  /** noindex для служебных страниц (404). */
  noindex?: boolean;
}

const LOCAL_BUSINESS = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'МОС-ДИЗЕЛЬ',
  legalName: 'ООО "ДТСНАБ"',
  taxID: '5027259539',
  url: `${SITE_ORIGIN}/`,
  logo: `${SITE_ORIGIN}/assets/logo-mos-dizel.svg`,
  telephone: '+74951205083',
  areaServed: ['Москва', 'Московская область']
};

/** Title, description, canonical, OG и JSON-LD страницы — всё из реестра pages.ts. */
export function usePageSeo(page: PageDef, extras: SeoExtras = {}): void {
  const canonical = `${SITE_ORIGIN}${page.path}`;
  const scripts: { type: 'application/ld+json'; innerHTML: string }[] = [];

  if (extras.localBusiness) {
    scripts.push({ type: 'application/ld+json' as const, innerHTML: JSON.stringify(LOCAL_BUSINESS) });
  }
  if (extras.faq?.length) {
    scripts.push({
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: extras.faq.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a }
        }))
      })
    });
  }
  if (extras.breadcrumbs && page.path !== '/') {
    scripts.push({
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Главная', item: `${SITE_ORIGIN}/` },
          { '@type': 'ListItem', position: 2, name: page.shortName, item: canonical }
        ]
      })
    });
  }

  useHead({
    title: page.title,
    link: [{ rel: 'canonical', href: canonical }],
    meta: [
      { name: 'description', content: page.description },
      ...(extras.noindex ? [{ name: 'robots', content: 'noindex, nofollow' }] : []),
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'ru_RU' },
      { property: 'og:site_name', content: 'МОС-ДИЗЕЛЬ' },
      { property: 'og:url', content: canonical },
      { property: 'og:title', content: page.title },
      { property: 'og:description', content: page.description },
      { name: 'twitter:card', content: 'summary' }
    ],
    script: scripts
  });
}
