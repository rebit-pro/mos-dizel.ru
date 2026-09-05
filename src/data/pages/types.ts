import type { FaqItem, HeroChip } from '@/data/home';

/** Встраиваемые таблицы: сезонные марки, зимние марки, показатели паспорта № 808. */
export type EmbedTable = 'fuel-seasons' | 'fuel-winter' | 'passport';

export interface PageBlock {
  h2: string;
  /** Якорь секции (например, tenders). */
  anchor?: string;
  paragraphs?: string[];
  list?: string[];
  cards?: { title: string; text: string }[];
  table?: EmbedTable;
  cta?: { label: string; href: string };
}

export interface SeeAlsoLink {
  href: string;
  label: string;
  note?: string;
}

export interface PageContent {
  /** Путь из src/seo/pages.ts — связывает контент с мета. */
  path: string;
  lead: string;
  chips: HeroChip[];
  /** Предзаполнение поля «Марка или сезон» формы (опция из seasonOptions). */
  season?: string;
  blocks: PageBlock[];
  faq: FaqItem[];
  seeAlso: SeeAlsoLink[];
}
