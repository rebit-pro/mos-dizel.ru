<template>
  <section id="fleet" aria-label="Автопарк">
    <div class="wrap">
      <SectionHead title="Автопарк под любой подъезд" />
      <div class="facts num">
        <div v-for="fact in fleetFacts" :key="fact.value" class="fact">
          <b>{{ fact.value }}</b>
          <span>{{ fact.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHead from './SectionHead.vue';
import { fleetFacts } from '@/data/home';
</script>
