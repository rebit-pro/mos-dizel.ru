<template>
  <div class="md-page">
    <SiteHeader />
    <main>
      <section class="page-hero nf" aria-labelledby="page-title">
        <div class="wrap">
          <p class="eyebrow cap">Ошибка 404</p>
          <h1 id="page-title">Страница не найдена</h1>
          <p class="sub">Такой страницы нет или адрес изменился. Начните с главной — или сразу рассчитайте поставку.</p>
          <div class="hero-cta">
            <RouterLink class="btn btn-primary" to="/">На главную</RouterLink>
            <RouterLink class="btn btn-secondary" to="/dizelnoe-toplivo/">Дизельное топливо</RouterLink>
          </div>
        </div>
      </section>
    </main>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue';
import '@/scss/mos-dizel.scss';
import SiteHeader from '@/components/mos-dizel/SiteHeader.vue';
import SiteFooter from '@/components/mos-dizel/SiteFooter.vue';

useHead({
  title: 'Страница не найдена — МОС-ДИЗЕЛЬ',
  meta: [{ name: 'robots', content: 'noindex, nofollow' }]
});
</script>
