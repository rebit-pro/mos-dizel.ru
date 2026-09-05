<template>
  <nav class="mfix" :class="{ 'hidden-by-form': formVisible }" aria-label="Быстрая связь">
    <a class="call" :href="PHONE_HREF" @click="onPhone"><IconGlyph name="phone" :size="18" />Позвонить</a>
    <a class="quote" href="#quote">Рассчитать поставку</a>
  </nav>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import IconGlyph from './IconGlyph.vue';
import { PHONE_HREF } from '@/data/home';
import { useAnalytics } from '@/composables/useAnalytics';

const { leadVia } = useAnalytics();
const formVisible = ref(false);
let observer: IntersectionObserver | null = null;

function onPhone(): void {
  leadVia('click_phone');
}

/** Панель скрывается, когда в вьюпорте видна любая форма расчёта (design-concept, блок 13). */
onMounted(() => {
  const targets = document.querySelectorAll('[data-quote-observe]');
  if (!targets.length || typeof IntersectionObserver === 'undefined') return;
  const visible = new Set<Element>();
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) visible.add(entry.target);
        else visible.delete(entry.target);
      }
      formVisible.value = visible.size > 0;
    },
    { threshold: 0.2 }
  );
  targets.forEach((t) => observer?.observe(t));
});

onBeforeUnmount(() => observer?.disconnect());
</script>
