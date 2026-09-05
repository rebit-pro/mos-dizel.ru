<template>
  <section id="quality" class="alt" aria-label="Контроль качества">
    <div class="wrap">
      <SectionHead
        title="Качество, которое можно проверить"
        sub="Не просим верить на слово — каждую позицию можно проверить при приёмке."
      />
      <div class="qgrid">
        <div v-for="item in qualityItems" :key="item.title" class="q">
          <span class="ic"><IconGlyph :name="item.icon" /></span>
          <b>{{ item.title }}</b>
          <p>{{ item.text }}</p>
        </div>
      </div>
      <div class="proof">
        <div class="passport">
          <div class="thumb-wrap">
            <span class="doc-thumb" role="img" aria-label="Место для обезличенного скана паспорта качества (плейсхолдер)"></span>
            <span class="todo">[скан № 808 после обезличивания]</span>
          </div>
          <div>
            <p>
              <b>Паспорт качества № 808 от 27.08.2026</b> — дизельное топливо ЕВРО, летнее, сорт C, класс К5, марка ДТ-Л-К5 по ГОСТ
              32511-2013. Завод-изготовитель — АО «ТАНЕКО».
            </p>
            <div class="kv num">
              <span>Цетановое число <b>54,3</b></span> <span>норма ≥ 51</span> · <span>Сера <b>8,1 мг/кг</b></span>
              <span>норма ≤ 10</span> · <span>Фильтруемость <b>−11 °C</b></span> <span>норма −5</span>
            </div>
            <p>Пример паспорта партии, не оферта. Здесь будет обезличенный скан документа.</p>
          </div>
        </div>
        <div class="origin">
          <span class="cap">Происхождение топлива подтверждаем документами</span>
          <b><span class="dot dot-green"></span>АО «ТАНЕКО» · группа «Татнефть»</b>
          <p>Завод-изготовитель по паспорту качества партии № 808. Другие заводы появятся здесь только с паспортами их партий.</p>
          <p style="margin-top: 14px"><a class="btn-ghost btn" href="#quote">Запросить паспорт качества партии →</a></p>
          <p style="margin-top: 10px"><RouterLink class="btn-ghost btn" to="/quality/">Как устроен контроль качества →</RouterLink></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import IconGlyph from './IconGlyph.vue';
import SectionHead from './SectionHead.vue';
import { qualityItems } from '@/data/home';
</script>
