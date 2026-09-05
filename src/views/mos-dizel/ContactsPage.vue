<template>
  <div class="md-page">
    <SiteHeader />
    <main>
      <section class="page-hero" aria-labelledby="page-title">
        <div class="wrap">
          <nav class="crumbs" aria-label="Хлебные крошки">
            <RouterLink to="/">Главная</RouterLink><span aria-hidden="true"> / </span><span>Контакты</span>
          </nav>
          <h1 id="page-title">Контакты МОС-ДИЗЕЛЬ</h1>
          <p class="sub">Заявка занимает минуту. Предварительный расчёт — за 15 минут в рабочее время; заявки принимаем круглосуточно.</p>
        </div>
      </section>

      <section id="quote" class="alt" aria-label="Форма расчёта и контакты">
        <div class="wrap">
          <div class="final">
            <div class="panel">
              <h3>Рассчитайте поставку</h3>
              <p class="note">{{ SLA_TEXT }}</p>
              <QuoteForm mode="full" />
            </div>
            <div class="contacts">
              <h3>Как связаться</h3>
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

      <section class="page-blocks" aria-label="Как проходит заявка">
        <div class="wrap">
          <div class="pb">
            <SectionHead title="Как проходит заявка" />
            <p class="pb-p">
              Оставьте заявку в форме или позвоните — заявки принимаем круглосуточно. Менеджер пришлёт предварительный расчёт за 15 минут в
              рабочее время, подтвердит объём, марку, адрес и цену. Бензовоз выезжает день в день; вместе с топливом вы получите УПД, ТТН и
              паспорт качества.
            </p>
            <p class="pb-cta">
              <RouterLink class="btn-ghost btn" to="/dostavka-dizelnogo-topliva/">Как проходит доставка и слив →</RouterLink>
            </p>
          </div>
          <div class="pb">
            <SectionHead title="База и зона работы" />
            <p class="pb-p">
              База находится в Люберецком районе Московской области — юго-восток области закрываем быстрее всего. Возим по Москве, всей
              Московской области и в соседние регионы на расстояние до 400 км от МКАД; срок для регионов согласуем при расчёте.
            </p>
          </div>
        </div>
      </section>

      <section class="alt" aria-label="Частые вопросы">
        <div class="wrap">
          <SectionHead title="Частые вопросы" />
          <div class="faq">
            <details v-for="item in faq" :key="item.q">
              <summary>{{ item.q }}</summary>
              <div>{{ item.a }}</div>
            </details>
          </div>
        </div>
      </section>
    </main>
    <SiteFooter />
    <MobilePanel />
  </div>
</template>

<script setup lang="ts">
import '@/scss/mos-dizel.scss';
import SiteHeader from '@/components/mos-dizel/SiteHeader.vue';
import SiteFooter from '@/components/mos-dizel/SiteFooter.vue';
import MobilePanel from '@/components/mos-dizel/MobilePanel.vue';
import QuoteForm from '@/components/mos-dizel/QuoteForm.vue';
import SectionHead from '@/components/mos-dizel/SectionHead.vue';
import { PHONE_DISPLAY, PHONE_HREF, SLA_TEXT, type FaqItem } from '@/data/home';
import { pageByPath } from '@/seo/pages';
import { usePageSeo } from '@/seo/usePageSeo';
import { useAnalytics } from '@/composables/useAnalytics';

const { leadVia } = useAnalytics();

const faq: FaqItem[] = [
  {
    q: 'В каком режиме вы принимаете заявки?',
    a: 'Круглосуточно, без выходных: форма на сайте и телефон работают всегда. Предварительный расчёт готовим за 15 минут в рабочее время; по ночным заявкам — с началом рабочего дня, срочные ночные поставки решаются звонком.'
  },
  {
    q: 'Как быстро вы перезвоните по заявке?',
    a: 'В рабочее время — в течение 15 минут вместе с предварительным расчётом. Если удобнее конкретное время звонка, напишите его в комментарии к заявке.'
  },
  {
    q: 'Можно ли согласовать поставку ночью?',
    a: 'Да, ночные рейсы — обычная практика: согласуйте время с менеджером при расчёте. Для аварийных ситуаций звоните напрямую.'
  },
  {
    q: 'Куда приехать за документами?',
    a: 'Ехать никуда не нужно: комплект передаём с поставкой, дубли — по ЭДО или почтой. Если нужен именно визит, менеджер согласует его отдельно.'
  }
];

const def = pageByPath('/contacts/');
if (def) usePageSeo(def, { faq, breadcrumbs: true, localBusiness: true });

function onPhone(): void {
  leadVia('click_phone');
}
</script>
