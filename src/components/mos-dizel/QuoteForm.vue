<template>
  <div data-quote-observe>
    <!-- Успех: панель заменяет форму (design-system §7.2) -->
    <div v-if="state === 'success'" class="notice n-success" role="status">
      <IconGlyph name="check" />
      <div>
        <b>Заявка получена</b>
        <p>{{ SLA_TEXT }}</p>
      </div>
    </div>

    <form v-else novalidate @submit.prevent="submit" @focusin.once="onFormStart">
      <div :class="{ frow: mode === 'full' }">
        <div class="field" :class="{ invalid: touched && phoneError }">
          <label :for="fid('phone')">Телефон *</label>
          <input
            :id="fid('phone')"
            v-model="form.phone"
            type="tel"
            name="phone"
            autocomplete="tel"
            placeholder="+7 (___) ___-__-__"
            required
          />
          <p v-if="touched && phoneError" class="err"><IconGlyph name="warn" :size="16" />{{ phoneError }}</p>
        </div>

        <div v-if="mode === 'full'" class="field">
          <label :for="fid('name')">Имя</label>
          <input :id="fid('name')" v-model="form.name" type="text" name="name" autocomplete="name" placeholder="Как к вам обращаться" />
        </div>

        <div class="field">
          <label :for="fid('volume')">Объём, л</label>
          <input :id="fid('volume')" v-model="form.volume" inputmode="numeric" name="volume" placeholder="от 500 до 30 000" />
          <p v-if="volumeWarning" class="err"><IconGlyph name="warn" :size="16" />Минимальный объём поставки — 500 литров</p>
        </div>

        <div v-if="mode === 'full'" class="field sel">
          <label :for="fid('season')">Марка или сезон</label>
          <select :id="fid('season')" v-model="form.season" name="season">
            <option v-for="opt in seasonOptions" :key="opt" :value="opt">{{ opt }}</option>
          </select>
        </div>

        <div class="field">
          <label :for="fid('address')">{{ mode === 'full' ? 'Адрес или район' : 'Адрес или район доставки' }}</label>
          <input :id="fid('address')" v-model="form.address" type="text" name="address" placeholder="Город, посёлок или район" />
        </div>

        <div v-if="mode === 'full'" class="field sel">
          <label :for="fid('urgency')">Срочность</label>
          <select :id="fid('urgency')" v-model="form.urgency" name="urgency">
            <option v-for="opt in urgencyOptions" :key="opt" :value="opt">{{ opt }}</option>
          </select>
        </div>
      </div>

      <!-- Honeypot: люди поле не видят и не заполняют -->
      <div class="hp-field" aria-hidden="true">
        <label :for="fid('website')">Не заполняйте это поле</label>
        <input :id="fid('website')" v-model="form.website" type="text" name="website" tabindex="-1" autocomplete="off" />
      </div>

      <label class="consent" :class="{ invalid: touched && !form.consent }">
        <input v-model="form.consent" type="checkbox" required />
        <span>Соглашаюсь на обработку персональных данных — <a href="/politika-konfidencialnosti/">политика</a></span>
      </label>

      <div v-if="state === 'error'" class="notice n-error" role="alert" style="margin-bottom: 16px">
        <IconGlyph name="warn" />
        <div>
          <b>Не удалось отправить заявку</b>
          <p>
            Попробуйте ещё раз или позвоните: <a :href="PHONE_HREF" @click="onPhone">{{ PHONE_DISPLAY }}</a
            >.
          </p>
        </div>
      </div>

      <button
        class="btn btn-primary"
        :class="{ 'btn-loading': state === 'loading' }"
        type="submit"
        :disabled="state === 'loading'"
        :style="buttonStyle"
      >
        <span v-if="state === 'loading'" class="spin" aria-hidden="true"></span>
        {{ state === 'loading' ? 'Отправляем…' : submitLabel }}
      </button>
      <p v-if="mode === 'short'" class="micro">{{ SLA_TEXT }}</p>
    </form>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref, useId } from 'vue';
import IconGlyph from './IconGlyph.vue';
import { PHONE_DISPLAY, PHONE_HREF, seasonOptions, SLA_TEXT, urgencyOptions } from '@/data/home';
import { useAnalytics } from '@/composables/useAnalytics';

const props = withDefaults(defineProps<{ mode?: 'short' | 'full'; defaultSeason?: string }>(), { mode: 'short', defaultSeason: '' });

const uid = useId();
const { goalOnce, leadVia, getClientId } = useAnalytics();

type FormState = 'idle' | 'loading' | 'success' | 'error';
const state = ref<FormState>('idle');
const touched = ref(false);

const form = reactive({
  phone: '',
  name: '',
  volume: '',
  season: props.defaultSeason && seasonOptions.includes(props.defaultSeason) ? props.defaultSeason : seasonOptions[0],
  address: '',
  urgency: urgencyOptions[0],
  consent: false,
  website: '' // honeypot
});

const submitLabel = computed(() => (props.mode === 'full' ? 'Получить расчёт' : 'Рассчитать поставку'));
const buttonStyle = computed(() =>
  props.mode === 'short' ? { width: '100%', height: 'var(--control-h-hero)' } : { height: 'var(--control-h-hero)', padding: '0 32px' }
);

const phoneError = computed<string>(() => {
  const digits = form.phone.replace(/\D/g, '');
  if (!digits) return 'Укажите телефон — по нему пришлём расчёт';
  if (digits.length < 10) return 'Проверьте номер: в нём меньше 10 цифр';
  return '';
});

const volumeWarning = computed<boolean>(() => {
  const v = Number(form.volume.replace(/\s/g, ''));
  return Number.isFinite(v) && v > 0 && v < 500;
});

function fid(field: string): string {
  return `qf-${uid}-${field}`;
}

function onFormStart(): void {
  goalOnce('form_start');
}

function onPhone(): void {
  leadVia('click_phone');
}

function utmPayload(): Record<string, string> {
  const params = new URLSearchParams(window.location.search);
  const out: Record<string, string> = {};
  for (const key of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']) {
    const value = params.get(key);
    if (value) out[key] = value;
  }
  return out;
}

async function submit(): Promise<void> {
  touched.value = true;
  if (phoneError.value || !form.consent) return;
  if (form.website) return; // бот заполнил honeypot — молча игнорируем

  state.value = 'loading';
  try {
    const endpoint = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;
    if (!endpoint) throw new Error('form endpoint is not configured');

    const payload = {
      form: props.mode === 'full' ? 'quote_full' : 'quote_short',
      phone: form.phone,
      name: form.name || undefined,
      volume: form.volume || undefined,
      season: props.mode === 'full' ? form.season : undefined,
      address: form.address || undefined,
      urgency: props.mode === 'full' ? form.urgency : undefined,
      page_url: window.location.href,
      ym_client_id: (await getClientId()) || undefined,
      ...utmPayload()
    };

    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error(`form endpoint responded ${res.status}`);

    leadVia('form_quote_submit');
    state.value = 'success';
  } catch (error) {
    if (import.meta.env.DEV) console.warn('[quote-form]', error);
    state.value = 'error';
  }
}
</script>
