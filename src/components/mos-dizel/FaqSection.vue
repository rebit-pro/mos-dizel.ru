<template>
  <section id="faq" aria-label="Частые вопросы">
    <div class="wrap">
      <SectionHead title="Частые вопросы" />
      <div class="faq">
        <details v-for="item in faqItems" :key="item.q">
          <summary>{{ item.q }}</summary>
          <div>{{ item.a }}</div>
        </details>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { faqItems } from '@/data/home';
import SectionHead from './SectionHead.vue';
</script>
