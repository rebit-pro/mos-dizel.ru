<script setup lang="ts">
import { reactive } from 'vue';

import UiTextfieldPrimary from '@/components/shared/UiTextfieldPrimary.vue';
import '@/scss/mos-dizel.scss';

const quoteForm = reactive({
  volume: '',
  fuel: 'dt-c',
  address: '',
  phone: ''
});

const fuelOptions = [
  { title: 'ДТ C (-5 °C)', value: 'dt-c' },
  { title: 'ДТ E (-15 °C)', value: 'dt-e' },
  { title: 'ДТ F (-25 °C)', value: 'dt-f' },
  { title: 'ДТЗ до -30 °C', value: 'dtz-30' }
];

const quoteStats = [
  { value: '5 минут', label: 'на звонок', icon: 'mdi-timer-outline' },
  { value: '2-3 часа', label: 'срочная доставка', icon: 'mdi-truck-fast-outline' }
];

const quoteBenefits = [
  { title: 'Паспорт качества', icon: 'mdi-file-document-check-outline' },
  { title: 'Арбитражная проба', icon: 'mdi-flask-outline' },
  { title: 'НДС и ЭДО', icon: 'mdi-receipt-text-check-outline' }
];

const requiredRule = (value: string) => Boolean(value) || 'Заполните поле';
</script>

<template>
  <header class="site-header">
    <a class="brand" href="/" aria-label="МОС-ДИЗЕЛЬ">
      <img src="/assets/logo-mos-dizel.svg" alt="МОС-ДИЗЕЛЬ" />
    </a>
    <nav class="main-nav" aria-label="Основная навигация">
      <a href="#services">Услуги</a>
      <a href="#quality">Качество</a>
      <a href="#fleet">Автопарк</a>
      <a href="#contacts">Контакты</a>
    </nav>
    <div class="header-actions">
      <a class="phone-link" href="tel:+74951205083">+7 (495) 120-50-83</a>
      <a class="button button-primary" href="#quote">Рассчитать</a>
    </div>
  </header>

  <main>
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-content">
        <p class="eyebrow">Москва и Московская область</p>
        <h1 id="hero-title">Дизельное топливо с доставкой за 2-3 часа</h1>
        <p class="hero-lead">От 300 до 20 000 литров. Паспорт качества, арбитражная проба при сливе, документы для юридических лиц.</p>
        <div class="hero-actions">
          <a class="button button-primary" href="#quote">Рассчитать поставку</a>
          <a class="button button-secondary" href="#quality">Контроль качества</a>
        </div>
        <dl class="hero-facts" aria-label="Ключевые условия">
          <div>
            <dt>24/7</dt>
            <dd>прием заявок</dd>
          </div>
          <div>
            <dt>300 л</dt>
            <dd>минимальный заказ</dd>
          </div>
          <div>
            <dt>60 м</dt>
            <dd>шланг при потребности</dd>
          </div>
        </dl>
      </div>
    </section>

    <section id="quote" class="quote-band" aria-labelledby="quote-title">
      <v-container class="quote-container">
        <v-card class="quote-shell" elevation="0" rounded="md">
          <div class="quote-grid">
            <aside class="quote-summary">
              <div class="quote-summary__top">
                <v-chip class="quote-chip" color="warning" variant="flat" size="small" prepend-icon="mdi-lightning-bolt-outline">
                  Быстрый расчет
                </v-chip>
                <h2 id="quote-title" class="quote-title">Цена и срок поставки</h2>
                <p class="quote-lead">Оставьте 4 параметра. Менеджер вернет цену, срок, сезонную марку и список документов.</p>
              </div>

              <div class="quote-stat-grid" aria-label="Скорость обработки заявки">
                <div v-for="stat in quoteStats" :key="stat.value" class="quote-stat">
                  <v-icon :icon="stat.icon" size="20" />
                  <strong>{{ stat.value }}</strong>
                  <span>{{ stat.label }}</span>
                </div>
              </div>
            </aside>

            <div class="quote-workspace">
              <div class="quote-form-head">
                <div>
                  <p class="quote-form-kicker">Заявка на расчет</p>
                  <h3>Заполните данные для менеджера</h3>
                </div>
                <v-chip class="quote-phone-chip" variant="tonal" color="success" size="small" prepend-icon="mdi-phone-in-talk-outline">
                  Перезвон без рассылок
                </v-chip>
              </div>

              <v-form class="quote-form" action="#" method="post" validate-on="submit lazy">
                <div class="quote-fields">
                  <div class="quote-field-group">
                    <label for="quote-volume">Объем</label>
                    <UiTextfieldPrimary
                      id="quote-volume"
                      v-model="quoteForm.volume"
                      class="quote-field"
                      name="volume"
                      aria-label="Объем"
                      placeholder="Например, 1000 л"
                      variant="solo-filled"
                      density="compact"
                      flat
                      hide-details="auto"
                      prepend-inner-icon="mdi-gauge"
                      :rules="[requiredRule]"
                    />
                  </div>

                  <div class="quote-field-group">
                    <label for="quote-fuel">Вид топлива</label>
                    <v-select
                      id="quote-fuel"
                      v-model="quoteForm.fuel"
                      class="quote-field"
                      :items="fuelOptions"
                      item-title="title"
                      item-value="value"
                      name="fuel"
                      aria-label="Вид топлива"
                      variant="solo-filled"
                      density="compact"
                      flat
                      hide-details="auto"
                      prepend-inner-icon="mdi-fuel"
                      menu-icon="mdi-chevron-down"
                      :rules="[requiredRule]"
                    />
                  </div>

                  <div class="quote-field-group">
                    <label for="quote-address">Район доставки</label>
                    <UiTextfieldPrimary
                      id="quote-address"
                      v-model="quoteForm.address"
                      class="quote-field"
                      name="address"
                      aria-label="Район доставки"
                      placeholder="Москва или область"
                      variant="solo-filled"
                      density="compact"
                      flat
                      hide-details="auto"
                      prepend-inner-icon="mdi-map-marker-outline"
                      :rules="[requiredRule]"
                    />
                  </div>

                  <div class="quote-field-group">
                    <label for="quote-phone">Телефон</label>
                    <UiTextfieldPrimary
                      id="quote-phone"
                      v-model="quoteForm.phone"
                      class="quote-field"
                      name="phone"
                      aria-label="Телефон"
                      placeholder="+7 999 000-00-00"
                      type="tel"
                      inputmode="tel"
                      autocomplete="tel"
                      variant="solo-filled"
                      density="compact"
                      flat
                      hide-details="auto"
                      prepend-inner-icon="mdi-phone-outline"
                      :rules="[requiredRule]"
                    />
                  </div>
                </div>

                <div class="quote-proof-row" aria-label="Что входит в расчет">
                  <v-chip
                    v-for="benefit in quoteBenefits"
                    :key="benefit.title"
                    class="quote-proof-chip"
                    color="success"
                    variant="outlined"
                    size="small"
                    :prepend-icon="benefit.icon"
                  >
                    {{ benefit.title }}
                  </v-chip>
                  <span class="quote-note">Учитываем сезонность, документы, оплату и срочность.</span>
                </div>

                <div class="quote-action-row">
                  <v-btn class="quote-submit" type="submit" size="large" prepend-icon="mdi-calculator-variant-outline">
                    Получить расчет
                  </v-btn>
                  <a class="quote-call" href="tel:+74951205083">+7 (495) 120-50-83</a>
                  <p class="quote-privacy">Контакт нужен только для уточнения цены и времени поставки.</p>
                </div>
              </v-form>
            </div>
          </div>
        </v-card>
      </v-container>
    </section>

    <section class="process-section">
      <div class="section-inner">
        <div class="process-head">
          <div class="section-head">
            <p class="eyebrow">Поставка</p>
            <h2>Понятный маршрут заказа</h2>
          </div>
          <p>От заявки до закрывающих документов: каждый шаг показывает, что происходит с заказом и где клиент получает контроль.</p>
        </div>
        <ol class="process-list">
          <li>
            <span>01</span>
            <strong>Заявка</strong>
            <p>Фиксируем объем, адрес, тип топлива и формат оплаты.</p>
          </li>
          <li>
            <span>02</span>
            <strong>Расчет</strong>
            <p>Менеджер уточняет цену, срок и документы для поставки.</p>
          </li>
          <li>
            <span>03</span>
            <strong>Бензовоз</strong>
            <p>Машина выезжает на объект в согласованное время.</p>
          </li>
          <li>
            <span>04</span>
            <strong>Проба</strong>
            <p>Водитель делает арбитражную пробу при клиенте.</p>
          </li>
          <li>
            <span>05</span>
            <strong>Документы</strong>
            <p>Выдается паспорт качества и отчетные документы.</p>
          </li>
        </ol>
      </div>
    </section>

    <section id="services" class="audience-section">
      <div class="section-inner">
        <div class="section-head wide">
          <p class="eyebrow">Кому поставляем</p>
          <h2>Топливо под задачу, объект и сезон</h2>
          <p>ДТСНАБ поставляет дизельное топливо для частных домов, техники, генераторов, котельных, транспорта и мероприятий.</p>
        </div>
        <div class="audience-grid">
          <article class="audience-card">
            <img src="/assets/source/dtcnab/027-beautiful-home-28260.jpg" alt="Частный дом" />
            <h3>Частные дома</h3>
            <p>Для отопления и генераторов, с подбором топлива под температурные условия хранения.</p>
          </article>
          <article class="audience-card">
            <img src="/assets/source/dtcnab/028-photo_1.png" alt="Строительный объект" />
            <h3>Стройка</h3>
            <p>Топливо для техники и генераторов, электронный документооборот для компаний.</p>
          </article>
          <article class="audience-card">
            <img src="/assets/source/dtcnab/029-photo_2.png" alt="Транспортные предприятия" />
            <h3>Транспорт</h3>
            <p>Доставка в удобное время, НДС и полный пакет документов для отчетности.</p>
          </article>
          <article class="audience-card">
            <img src="/assets/source/dtcnab/030-photo_4.png" alt="Сельскохозяйственная техника" />
            <h3>Сельское хозяйство</h3>
            <p>Круглосуточная поставка топлива для сезонной техники и рабочих объектов.</p>
          </article>
          <article class="audience-card">
            <img src="/assets/source/dtcnab/031-moscow-3322137_960_7.jpg" alt="Водный транспорт" />
            <h3>Водный транспорт</h3>
            <p>Заправка с причала: бензовозы оснащены шлангами до 40 метров.</p>
          </article>
          <article class="audience-card">
            <img src="/assets/source/dtcnab/034-26f1c0330345663_main.jpg" alt="Мероприятие" />
            <h3>Мероприятия</h3>
            <p>Заправка генераторов для освещения, звука и временной инфраструктуры.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="fuel-section">
      <div class="section-inner split-section">
        <div class="section-head">
          <p class="eyebrow">Виды топлива</p>
          <h2>Подбор по температуре хранения и эксплуатации</h2>
          <p>Менеджер подберет марку топлива под сезон, условия хранения, технику и режим работы объекта.</p>
        </div>
        <div class="fuel-table-wrap" role="region" aria-label="Таблица видов дизельного топлива">
          <table class="fuel-table">
            <thead>
              <tr>
                <th>Марка</th>
                <th>Температура</th>
                <th>Применение</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ДТ C Евро-5</td>
                <td>до -5C</td>
                <td>Летний период или хранение в помещении.</td>
              </tr>
              <tr>
                <td>ДТ E Евро-5</td>
                <td>до -15C</td>
                <td>Межсезонное топливо для умеренного режима.</td>
              </tr>
              <tr>
                <td>ДТ F Евро-5</td>
                <td>до -25C</td>
                <td>Межсезонное топливо для пониженных температур.</td>
              </tr>
              <tr>
                <td>ДТЗ Евро-5</td>
                <td>до -30C</td>
                <td>Зимнее топливо для техники, отопления и генераторов.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section id="quality" class="quality-section">
      <div class="section-inner quality-layout">
        <div>
          <p class="eyebrow">Контроль качества</p>
          <h2>Паспорт качества и арбитражная проба при сливе</h2>
          <p class="section-text">
            Поставка сопровождается документами, контролем объема, проверкой пломбы и арбитражной пробой топлива при клиенте.
          </p>
          <div class="proof-grid">
            <div>
              <strong>Паспорт качества</strong>
              <p>Документ на каждую партию топлива.</p>
            </div>
            <div>
              <strong>Пломба</strong>
              <p>Вскрывается при получении топлива.</p>
            </div>
            <div>
              <strong>Счетчики</strong>
              <p>Проходят проверку и калибровку.</p>
            </div>
            <div>
              <strong>GPS</strong>
              <p>Контроль движения автоцистерн.</p>
            </div>
          </div>
        </div>
        <div class="documents-strip" aria-label="Документы и паспорта качества">
          <img src="/assets/source/dtcnab/009-IMG-20191105-WA0000.jpg" alt="Паспорт качества топлива" />
          <img src="/assets/source/dtcnab/061-_16-11-2019_010009.jpg" alt="Документ поставщика" />
        </div>
      </div>
    </section>

    <section id="fleet" class="fleet-section">
      <div class="fleet-photo" aria-hidden="true"></div>
      <div class="section-inner fleet-content">
        <p class="eyebrow">Автопарк</p>
        <h2>Бензовозы для узких улиц и крупных поставок</h2>
        <p>Поставляем от 300 литров для коттеджных поселков и используем крупные автомобили для больших объемов.</p>
        <ul class="plain-list">
          <li>Собственный автопарк бензовозов</li>
          <li>Шланги 40-60 метров</li>
          <li>Круглосуточный прием заявок</li>
          <li>Поставка по Москве и Московской области</li>
        </ul>
      </div>
    </section>

    <section class="trust-section">
      <div class="section-inner">
        <div class="section-head">
          <p class="eyebrow">Отзывы</p>
          <h2>Что говорят клиенты</h2>
        </div>
        <div class="review-grid">
          <blockquote>
            <p>Уже 3 года заказываю топливо у ДТСНАБ. Привозят вовремя. Водитель заранее звонит и сообщает, что выехал.</p>
            <cite>Константин Перов, Люберцы</cite>
          </blockquote>
          <blockquote>
            <p>Заказываем топливо на дачу. За прошлую зиму ни разу топливо не замерзло, хотя холода были сильные.</p>
            <cite>Екатерина, Серпухов</cite>
          </blockquote>
          <blockquote>
            <p>Топливо для генератора беру у ДТСНАБ. Как-то ночью топливо закончилось, позвонил - привезли.</p>
            <cite>Иван Васильев, Москва</cite>
          </blockquote>
        </div>
      </div>
    </section>

    <section class="equipment-section">
      <div class="section-inner">
        <div class="section-head wide">
          <p class="eyebrow">Оборудование</p>
          <h2>Мини АЗС и еврокубы</h2>
          <p>Оборудование помогает хранить топливо на объекте и организовать заправку техники без привязки к стационарной АЗС.</p>
        </div>
        <div class="equipment-grid">
          <article>
            <img src="/assets/source/dtcnab/067-s2.png" alt="Мини АЗС" />
            <div>
              <h3>Мини АЗС</h3>
              <p>Компактная станция для объекта. Цена от 50 000 руб.</p>
            </div>
          </article>
          <article>
            <img src="/assets/source/dtcnab/068-9868687.png" alt="Еврокуб" />
            <div>
              <h3>Еврокубы</h3>
              <p>Контейнеры для хранения и перевозки топлива. Цена от 8 000 руб.</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="faq-section">
      <div class="section-inner split-section">
        <div class="section-head">
          <p class="eyebrow">FAQ</p>
          <h2>Частые вопросы перед заказом</h2>
        </div>
        <div class="faq-list">
          <details open>
            <summary>За какое время доставляете топливо?</summary>
            <p>Топливо поставляют от двух до трех часов после оформления заказа.</p>
          </details>
          <details>
            <summary>От чего зависит цена?</summary>
            <p>Цена зависит от объема, вида топлива, расстояния и формы расчета.</p>
          </details>
          <details>
            <summary>Как подтверждается объем?</summary>
            <p>Автоцистерны оборудованы счетчиками, а пломба вскрывается при клиенте.</p>
          </details>
          <details>
            <summary>Какие документы выдаются?</summary>
            <p>Паспорт качества, ТТН и документы для отчетности. Для компаний доступен ЭДО.</p>
          </details>
        </div>
      </div>
    </section>
  </main>

  <footer id="contacts" class="site-footer">
    <div class="section-inner footer-grid">
      <div>
        <img class="footer-logo" src="/assets/logo-mos-dizel-light.svg" alt="МОС-ДИЗЕЛЬ" />
        <p>mos-dizel.ru - домен поставки дизельного топлива по Москве и Московской области.</p>
      </div>
      <div>
        <h2>Контакты</h2>
        <a href="tel:+74951205083">+7 (495) 120-50-83</a>
        <a href="mailto:info@dtcnab.ru">info@dtcnab.ru</a>
        <p>МО, Люберецкий район, р-п Октябрьский, ул. Ленина д. 52</p>
      </div>
      <div>
        <h2>Реквизиты</h2>
        <p>ИНН 5027259539</p>
        <p>ОГРН 1175027031300</p>
        <p>© 2024 Все права защищены</p>
      </div>
    </div>
  </footer>
</template>
