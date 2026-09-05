<template>
  <section id="reviews" class="alt" aria-label="Отзывы клиентов">
    <div class="wrap">
      <SectionHead title="Что говорят клиенты" />
      <div class="rev">
        <div v-for="review in reviews" :key="review.name" class="rv">
          <p>{{ review.text }}</p>
          <b>{{ review.name }}</b>
          <span>{{ review.place }}</span>
        </div>
      </div>
      <p class="fuel-note" style="margin-top: 16px">
        <span class="todo">[перед публикацией — дословные тексты отзывов со старого сайта; пока пересказ]</span>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHead from './SectionHead.vue';
import { reviews } from '@/data/home';
</script>
