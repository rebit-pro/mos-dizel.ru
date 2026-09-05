<template>
  <section id="docs" class="alt" aria-label="Документы для юридических лиц">
    <div class="wrap">
      <SectionHead title="Документы для бухгалтерии — без напоминаний" />
      <div class="badges">
        <span v-for="badge in docBadges" :key="badge" class="badge">{{ badge }}</span>
      </div>
      <p class="sub" style="margin-top: 0">
        Работаем по договору, с НДС и без. Полный комплект закрывающих документов — вместе с поставкой или по ЭДО. Участвуем в закупках по
        44-ФЗ и 223-ФЗ. Постоянным клиентам — отсрочка платежа и персональный менеджер.
      </p>
      <div class="links">
        <RouterLink class="btn-ghost btn" to="/dizelnoe-toplivo-s-nds/">Документы, НДС и 44-ФЗ подробно →</RouterLink>
        <a class="btn-ghost btn" href="#quote">Запросить шаблон договора →</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import SectionHead from './SectionHead.vue';
import { docBadges } from '@/data/home';
</script>
