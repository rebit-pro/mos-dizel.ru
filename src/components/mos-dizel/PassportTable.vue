<template>
  <div class="passport-table">
    <p class="pt-title">
      <b>{{ PASSPORT_TITLE }}</b>
    </p>
    <p class="pt-sub">{{ PASSPORT_PRODUCER }} · пример паспорта партии, не оферта</p>
    <div class="pt-grid num" role="table" aria-label="Показатели паспорта качества № 808">
      <div class="pt-head" role="row"><span>Показатель</span><span>Норма ГОСТ 32511-2013</span><span>Факт партии</span></div>
      <div v-for="row in passportRows" :key="row.name" class="pt-row" role="row">
        <span>{{ row.name }}</span>
        <span class="m">{{ row.norm }}</span>
        <span class="f">{{ row.fact }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PASSPORT_PRODUCER, PASSPORT_TITLE, passportRows } from '@/data/passport';
</script>
