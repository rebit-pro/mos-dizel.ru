<template>
  <div class="fuel" role="table" aria-label="Марки топлива">
    <div class="rowh" role="row">
      <span>Сезон</span><span>Марка</span><span>Температура фильтруемости</span><span>Когда заказывать</span>
    </div>
    <div v-for="row in rows" :key="row.season" class="row" role="row">
      <span class="season"><span class="dot" :class="`dot-${row.dot}`"></span>{{ row.season }}</span>
      <span class="m">{{ row.grade }}</span>
      <span class="t num">{{ row.temp }}</span>
      <span class="m">{{ row.when }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FuelRow } from '@/data/home';

defineProps<{ rows: FuelRow[] }>();
</script>
