<template>
  <header class="site-head">
    <div class="wrap hd">
      <a class="logo" href="/" aria-label="МОС-ДИЗЕЛЬ — на главную"><span class="drop"></span>МОС-<b>ДИЗЕЛЬ</b></a>
      <nav class="site-nav" aria-label="Основная навигация">
        <template v-for="link in navLinks" :key="link.href">
          <RouterLink v-if="!link.href.includes('#')" :to="link.href">{{ link.label }}</RouterLink>
          <a v-else :href="link.href">{{ link.label }}</a>
        </template>
      </nav>
      <a class="tel num" :href="PHONE_HREF" @click="onPhone">{{ PHONE_DISPLAY }}</a>
      <a class="tel-ic" :href="PHONE_HREF" :aria-label="`Позвонить ${PHONE_DISPLAY}`" @click="onPhone">
        <IconGlyph name="phone" :size="20" />
      </a>
      <a class="btn btn-primary" href="#quote">Рассчитать поставку</a>
      <button
        class="burger"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="mobile-menu"
        aria-label="Меню"
        @click="menuOpen = !menuOpen"
      >
        <IconGlyph name="burger" :size="20" />
      </button>
    </div>
    <nav v-show="menuOpen" id="mobile-menu" class="mobile-menu" :class="{ open: menuOpen }" aria-label="Мобильное меню">
      <template v-for="link in navLinks" :key="link.href">
        <RouterLink v-if="!link.href.includes('#')" :to="link.href" @click="menuOpen = false">{{ link.label }}</RouterLink>
        <a v-else :href="link.href" @click="menuOpen = false">{{ link.label }}</a>
      </template>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import IconGlyph from './IconGlyph.vue';
import { navLinks, PHONE_DISPLAY, PHONE_HREF } from '@/data/home';
import { useAnalytics } from '@/composables/useAnalytics';

const menuOpen = ref(false);
const { leadVia } = useAnalytics();

function onPhone(): void {
  leadVia('click_phone');
}
</script>
