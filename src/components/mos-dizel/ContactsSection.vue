<template>
  <section id="contacts" class="final-sec" aria-label="Контакты и форма расчёта">
    <div class="wrap">
      <SectionHead
        title="Рассчитайте поставку"
        sub="Заявка занимает минуту. Предварительный расчёт — за 15 минут в рабочее время; заявки принимаем круглосуточно."
      />
      <div class="final">
        <div class="panel">
          <QuoteForm mode="full" />
        </div>
        <div class="contacts">
          <h3>Контакты</h3>
          <div class="row">
            <span class="lbl">Телефон</span>
            <a class="ph num" :href="PHONE_HREF" @click="onPhone">{{ PHONE_DISPLAY }}</a>
          </div>
          <div class="row">
            <span class="lbl">Email для заявок</span>
            <span class="todo">[адрес уточняется у клиента]</span>
          </div>
          <div class="row"><span class="lbl">Приём заявок</span>Круглосуточно, без выходных</div>
          <div class="row">
            <span class="lbl">База</span>Московская область, Люберецкий район <span class="todo">[адрес подтверждается]</span>
          </div>
          <div class="row"><span class="lbl">География</span>Москва, Московская область и соседние регионы — до 400 км от МКАД</div>
          <div class="req">ООО «ДТСНАБ» · ИНН 5027259539 · ОГРН 1175027031300 <span class="todo">[сверить с ЕГРЮЛ]</span></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import QuoteForm from './QuoteForm.vue';
import SectionHead from './SectionHead.vue';
import { PHONE_DISPLAY, PHONE_HREF } from '@/data/home';
import { useAnalytics } from '@/composables/useAnalytics';

const { leadVia } = useAnalytics();

function onPhone(): void {
  leadVia('click_phone');
}
</script>
