<template>
  <section id="services" class="alt" aria-label="Кому возим топливо">
    <div class="wrap">
      <SectionHead
        title="Возим топливо там, где оно нужно"
        sub="Восемь типовых задач — под каждую есть машина, марка топлива и график. Первые три — основные направления."
      />
      <div class="grid4">
        <component
          :is="seg.href ? RouterLink : 'div'"
          v-for="seg in segments"
          :key="seg.title"
          class="seg"
          :class="{ 'seg-link': seg.href }"
          :to="seg.href"
        >
          <div class="top">
            <span class="ic"><IconGlyph :name="seg.icon" /></span>
            <span v-if="seg.priority" class="pri">приоритет</span>
          </div>
          <b>{{ seg.title }}</b>
          <p>{{ seg.text }}</p>
        </component>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import IconGlyph from './IconGlyph.vue';
import SectionHead from './SectionHead.vue';
import { segments } from '@/data/home';
</script>
