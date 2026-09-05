<template>
  <section id="quote" class="hero" aria-labelledby="hero-title">
    <div class="wrap hero-grid">
      <div>
        <p class="eyebrow cap">Москва · Московская область · до 400 км от МКАД</p>
        <h1 id="hero-title">Дизельное топливо с доставкой по Москве и области — день в&nbsp;день</h1>
        <p class="sub">
          От 500 до 30 000 литров. Срочные и ночные поставки. Паспорт качества завода-изготовителя и арбитражная проба при сливе.
        </p>
        <div class="chips num">
          <span v-for="(chip, i) in heroChips" :key="i" class="chip">
            <template v-if="chip.text">{{ chip.text }}</template>
            <b v-if="chip.strong">{{ chip.strong }}</b>
            <template v-if="chip.tail">{{ chip.tail }}</template>
          </span>
        </div>
        <div class="hero-cta">
          <a class="btn btn-secondary" href="#contacts">Получить КП</a>
          <span class="hero-note">Для юрлиц — договор, отсрочка постоянным клиентам, поставки по 44-ФЗ и 223-ФЗ</span>
        </div>
      </div>
      <div class="panel">
        <h3>Рассчитать поставку</h3>
        <p class="note">Заявка занимает минуту</p>
        <QuoteForm mode="short" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import QuoteForm from './QuoteForm.vue';
import { heroChips } from '@/data/home';
</script>
