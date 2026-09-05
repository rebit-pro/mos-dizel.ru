<template>
  <footer class="site-foot">
    <div class="wrap">
      <nav class="foot-nav" aria-label="Карта сайта">
        <RouterLink v-for="link in footerLinks" :key="link.href" :to="link.href">{{ link.label }}</RouterLink>
      </nav>
    </div>
    <div class="wrap">
      <span>© ООО «ДТСНАБ», 2017–2026</span>
      <RouterLink to="/politika-konfidencialnosti/">Политика обработки персональных данных</RouterLink>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { footerLinks } from '@/data/home';
</script>
