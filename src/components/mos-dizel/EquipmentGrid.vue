<template>
  <section id="equipment" aria-label="Оборудование и сервис">
    <div class="wrap">
      <SectionHead
        title="Оборудование и сервис для хранения топлива"
        sub="Мини-АЗС и еврокубы — в том числе бывшие в употреблении; малые бочки и тара под топливо."
      />
      <div class="eq">
        <div v-for="item in equipmentItems" :key="item.title" class="e">
          <b>{{ item.title }}</b>
          <p>{{ item.text }}</p>
        </div>
      </div>
      <p style="margin-top: 24px"><a class="btn btn-secondary" href="#quote">Подобрать оборудование</a></p>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHead from './SectionHead.vue';
import { equipmentItems } from '@/data/home';
</script>
