<template>
  <div class="md-page">
    <SiteHeader />
    <main v-if="def && content">
      <section class="page-hero" aria-labelledby="page-title">
        <div class="wrap">
          <nav class="crumbs" aria-label="Хлебные крошки">
            <RouterLink to="/">Главная</RouterLink><span aria-hidden="true"> / </span><span>{{ def.shortName }}</span>
          </nav>
          <h1 id="page-title">{{ def.h1 }}</h1>
          <p class="sub">{{ content.lead }}</p>
          <div class="chips num">
            <span v-for="(chip, i) in content.chips" :key="i" class="chip">
              <template v-if="chip.text">{{ chip.text }}</template>
              <b v-if="chip.strong">{{ chip.strong }}</b>
              <template v-if="chip.tail">{{ chip.tail }}</template>
            </span>
          </div>
          <div class="hero-cta">
            <a class="btn btn-primary" href="#quote">Рассчитать поставку</a>
            <a class="btn btn-secondary" :href="PHONE_HREF" @click="onPhone">Позвонить</a>
          </div>
        </div>
      </section>

      <section id="quote" class="quote-band alt" aria-label="Форма расчёта">
        <div class="wrap">
          <div class="panel quote-solo">
            <h3>Рассчитать поставку</h3>
            <p class="note">{{ SLA_TEXT }}</p>
            <QuoteForm :key="def.path" mode="full" :default-season="content.season" />
          </div>
        </div>
      </section>

      <section class="page-blocks" aria-label="Подробности">
        <div class="wrap">
          <div v-for="block in content.blocks" :id="block.anchor" :key="block.h2" class="pb">
            <SectionHead :title="block.h2" />
            <p v-for="(par, i) in block.paragraphs" :key="i" class="pb-p">{{ par }}</p>
            <ul v-if="block.list" class="pb-list">
              <li v-for="item in block.list" :key="item">{{ item }}</li>
            </ul>
            <div v-if="block.cards" class="cards3">
              <div v-for="card in block.cards" :key="card.title" class="q">
                <b>{{ card.title }}</b>
                <p>{{ card.text }}</p>
              </div>
            </div>
            <EmbedFuelTable v-if="block.table === 'fuel-seasons'" :rows="fuelRows" />
            <EmbedFuelTable v-if="block.table === 'fuel-winter'" :rows="winterRows" />
            <PassportTable v-if="block.table === 'passport'" />
            <p v-if="block.cta" class="pb-cta">
              <RouterLink v-if="block.cta.href.startsWith('/')" class="btn-ghost btn" :to="block.cta.href">{{
                block.cta.label
              }}</RouterLink>
              <a v-else class="btn-ghost btn" :href="block.cta.href">{{ block.cta.label }}</a>
            </p>
          </div>
        </div>
      </section>

      <section class="alt" aria-label="Частые вопросы">
        <div class="wrap">
          <SectionHead title="Частые вопросы" />
          <div class="faq">
            <details v-for="item in content.faq" :key="item.q">
              <summary>{{ item.q }}</summary>
              <div>{{ item.a }}</div>
            </details>
          </div>
        </div>
      </section>

      <section class="final-sec" aria-label="Смотрите также">
        <div class="wrap">
          <SectionHead title="Смотрите также" />
          <div class="see-grid">
            <RouterLink v-for="link in content.seeAlso" :key="link.href" class="see" :to="link.href">
              <b>{{ link.label }}</b>
              <span v-if="link.note">{{ link.note }}</span>
            </RouterLink>
          </div>
          <p class="pb-cta"><a class="btn btn-primary" href="#quote">Рассчитать поставку</a></p>
        </div>
      </section>
    </main>
    <SiteFooter />
    <MobilePanel />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useHead } from '@unhead/vue';
import { useRoute } from 'vue-router';
import '@/scss/mos-dizel.scss';
import SiteHeader from '@/components/mos-dizel/SiteHeader.vue';
import SiteFooter from '@/components/mos-dizel/SiteFooter.vue';
import MobilePanel from '@/components/mos-dizel/MobilePanel.vue';
import QuoteForm from '@/components/mos-dizel/QuoteForm.vue';
import SectionHead from '@/components/mos-dizel/SectionHead.vue';
import EmbedFuelTable from '@/components/mos-dizel/EmbedFuelTable.vue';
import PassportTable from '@/components/mos-dizel/PassportTable.vue';
import { fuelRows, PHONE_HREF, SLA_TEXT } from '@/data/home';
import { pageContent } from '@/data/pages';
import { pageByPath, SITE_ORIGIN } from '@/seo/pages';
import { useAnalytics } from '@/composables/useAnalytics';

const route = useRoute();
const { leadVia } = useAnalytics();

const def = computed(() => pageByPath(route.path));
const content = computed(() => (def.value ? pageContent[def.value.path] : undefined));
const winterRows = fuelRows.filter((row) => row.dot === 'blue');

function onPhone(): void {
  leadVia('click_phone');
}

useHead(() => {
  const d = def.value;
  const c = content.value;
  if (!d || !c) return {};
  const canonical = `${SITE_ORIGIN}${d.path}`;
  return {
    title: d.title,
    link: [{ rel: 'canonical', href: canonical }],
    meta: [
      { name: 'description', content: d.description },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'ru_RU' },
      { property: 'og:site_name', content: 'МОС-ДИЗЕЛЬ' },
      { property: 'og:url', content: canonical },
      { property: 'og:title', content: d.title },
      { property: 'og:description', content: d.description },
      { name: 'twitter:card', content: 'summary' }
    ],
    script: [
      {
        type: 'application/ld+json' as const,
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: c.faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } }))
        })
      },
      {
        type: 'application/ld+json' as const,
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Главная', item: `${SITE_ORIGIN}/` },
            { '@type': 'ListItem', position: 2, name: d.shortName, item: canonical }
          ]
        })
      }
    ]
  };
});
</script>
