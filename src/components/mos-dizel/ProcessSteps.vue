<template>
  <section id="process" aria-label="Как проходит поставка">
    <div class="wrap">
      <SectionHead title="Как проходит поставка" />
      <div class="steps">
        <div v-for="step in processSteps" :key="step.title" class="st">
          <b>{{ step.title }}</b>
          <p>{{ step.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHead from './SectionHead.vue';
import { processSteps } from '@/data/home';
</script>
