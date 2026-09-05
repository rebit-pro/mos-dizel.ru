<template>
  <section id="fuel" aria-label="Марки топлива">
    <div class="wrap">
      <SectionHead
        title="Марки топлива по ГОСТ 32511-2013"
        sub="Подскажем марку под технику и температуру. Фактические показатели партии — в паспорте качества."
      />
      <div class="fuel" role="table" aria-label="Марки топлива по сезонам">
        <div class="rowh" role="row">
          <span>Сезон</span><span>Марка</span><span>Температура фильтруемости</span><span>Когда заказывать</span>
        </div>
        <div v-for="row in fuelRows" :key="row.season" class="row" role="row">
          <span class="season">
            <span class="dot" :class="`dot-${row.dot}`"></span>
            <RouterLink v-if="row.href" :to="row.href" class="season-link">{{ row.season }}</RouterLink>
            <template v-else>{{ row.season }}</template>
          </span>
          <span class="m">{{ row.grade }}</span>
          <span class="t num">{{ row.temp }}</span>
          <span class="m">{{ row.when }}</span>
        </div>
      </div>
      <p class="fuel-note">{{ fuelNote }}</p>
      <p style="margin-top: 18px"><a class="btn-ghost btn" href="#quote">Не знаете, какую марку выбрать? Спросите менеджера →</a></p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import SectionHead from './SectionHead.vue';
import { fuelNote, fuelRows } from '@/data/home';
</script>
