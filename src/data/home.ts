/**
 * Контент главной страницы (W0). Единственный источник текстов для компонентов.
 * Факты и формулировки — строго из docs/discovery/client-answers-2026-09-04.md,
 * docs/fuel-grades.md и docs/design/design-concept.md §5. Цен нет, мессенджеров нет.
 * FAQPage JSON-LD в index.html обязан совпадать с faqItems — правя одно, правь второе.
 */

export const PHONE_DISPLAY = '+7 (495) 120-50-83';
export const PHONE_HREF = 'tel:+74951205083';

/** Формулировка SLA — везде одинаковая (design-concept §1). */
export const SLA_TEXT = 'Пришлём предварительный расчёт за 15 минут в рабочее время. Окончательную цену подтверждает менеджер.';

export interface NavLink {
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: '/dizelnoe-toplivo/', label: 'Топливо' },
  { href: '/#services', label: 'Кому возим' },
  { href: '/quality/', label: 'Качество' },
  { href: '/dizelnoe-toplivo-s-nds/', label: 'Документы' },
  { href: '/#equipment', label: 'Оборудование' },
  { href: '/contacts/', label: 'Контакты' }
];

/** Карта страниц в футере (перелинковка W1). */
export const footerLinks: NavLink[] = [
  { href: '/dizelnoe-toplivo/', label: 'Дизельное топливо' },
  { href: '/zimnee-dizelnoe-toplivo/', label: 'Зимнее ДТ' },
  { href: '/mezhsezonnoe-dizelnoe-toplivo/', label: 'Межсезонное ДТ' },
  { href: '/solyarka/', label: 'Солярка' },
  { href: '/dostavka-dizelnogo-topliva/', label: 'Доставка' },
  { href: '/dizelnoe-toplivo-s-nds/', label: 'ДТ с НДС' },
  { href: '/toplivo-dlya-transportnoy-kompanii/', label: 'Автопаркам' },
  { href: '/toplivo-dlya-kotelnoy/', label: 'Котельным' },
  { href: '/toplivo-dlya-generatora/', label: 'Генераторам' },
  { href: '/toplivo-dlya-stroitelnoy-tehniki/', label: 'Стройке' },
  { href: '/toplivo-dlya-chastnogo-doma/', label: 'Частным домам' },
  { href: '/quality/', label: 'Контроль качества' },
  { href: '/contacts/', label: 'Контакты' }
];

export interface HeroChip {
  strong?: string;
  text?: string;
  tail?: string;
}

/** Ключевое значение (strong) подсвечивается жёлтым. */
export const heroChips: HeroChip[] = [
  { strong: 'от 500 л' },
  { strong: 'день в день' },
  { text: 'расчёт ', strong: 'за 15 минут', tail: ' в рабочее время' },
  { text: 'заявки ', strong: 'круглосуточно' },
  { text: 'НДС и ЭДО' },
  { text: 'ГОСТ 32511-2013' }
];

export interface ProcessStep {
  title: string;
  text: string;
}

export const processSteps: ProcessStep[] = [
  { title: 'Заявка или звонок', text: 'Форма на сайте или телефон. Заявки принимаем круглосуточно.' },
  { title: 'Расчёт за 15 минут', text: 'Менеджер подтверждает объём, марку, адрес и цену — в рабочее время.' },
  { title: 'Бензовоз выезжает', text: 'День в день, при необходимости срочно или ночью. GPS-мониторинг, пломбы.' },
  { title: 'Слив по счётчику', text: 'Пломба вскрывается при вас, арбитражная проба остаётся у вас.' },
  { title: 'Документы', text: 'УПД, ТТН, паспорт качества; для юрлиц — по ЭДО.' }
];

export type SegmentIcon = 'truck' | 'boiler' | 'bolt' | 'crane' | 'home' | 'tractor' | 'anchor' | 'service';

export interface Segment {
  icon: SegmentIcon;
  title: string;
  text: string;
  priority?: boolean;
  href?: string;
}

/** Первые три — приоритеты клиента (анкета п. 2.8). */
export const segments: Segment[] = [
  {
    icon: 'truck',
    title: 'Транспортные компании',
    text: 'Заправка автопарка по графику; НДС, ЭДО и прозрачные документы.',
    priority: true,
    href: '/toplivo-dlya-transportnoy-kompanii/'
  },
  {
    icon: 'boiler',
    title: 'Котельные и предприятия',
    text: 'Топливо точно в срок, без остановки котельной; зимние марки по сезону.',
    priority: true,
    href: '/toplivo-dlya-kotelnoy/'
  },
  {
    icon: 'bolt',
    title: 'Генераторы и мероприятия',
    text: 'Срочная и ночная заправка ДГУ для света и звука.',
    priority: true,
    href: '/toplivo-dlya-generatora/'
  },
  {
    icon: 'crane',
    title: 'Строительные компании',
    text: 'Техника и ДГУ на площадке; шланги до 60 м, документы для бухгалтерии.',
    href: '/toplivo-dlya-stroitelnoy-tehniki/'
  },
  {
    icon: 'home',
    title: 'Частные дома и коттеджи',
    text: 'Отопление и генераторы; малые бензовозы проходят в узкие проезды посёлков.',
    href: '/toplivo-dlya-chastnogo-doma/'
  },
  { icon: 'tractor', title: 'Сельхозтехника', text: 'Доставка в поле в сезон, когда простой дороже всего.' },
  { icon: 'anchor', title: 'Водный транспорт', text: 'Дизельное и судовое маловязкое топливо, заправка с причала.' },
  { icon: 'service', title: 'Автосервисы и мойки', text: 'Топливо для генераторов покрасочных камер и моек.' }
];

export type SeasonDot = 'red' | 'amber' | 'blue' | 'neutral';

export interface FuelRow {
  dot: SeasonDot;
  season: string;
  grade: string;
  temp: string;
  when: string;
  href?: string;
}

/** Значения — только из docs/fuel-grades.md §1–3. */
export const fuelRows: FuelRow[] = [
  { dot: 'red', season: 'Летнее', grade: 'Сорт C (ДТ-Л-К5)', temp: 'до −5 °C', when: 'апрель — сентябрь' },
  {
    dot: 'amber',
    season: 'Межсезонное',
    grade: 'Сорт E (ДТ-Е-К5)',
    temp: 'до −15 °C',
    when: 'март; октябрь — ноябрь',
    href: '/mezhsezonnoe-dizelnoe-toplivo/'
  },
  { dot: 'blue', season: 'Зимнее', grade: 'Сорт F (ДТ-З-К5)', temp: 'до −20 °C', when: 'ноябрь — март', href: '/zimnee-dizelnoe-toplivo/' },
  {
    dot: 'blue',
    season: 'Зимнее, сильные морозы',
    grade: 'ДТ-З класс 1 / класс 2',
    temp: 'до −26 °C / до −32 °C',
    when: 'декабрь — февраль'
  },
  { dot: 'neutral', season: 'Керосин ТС-1', grade: 'по Московской области', temp: '—', when: 'объём и условия уточняет менеджер' },
  { dot: 'neutral', season: 'Судовое маловязкое', grade: 'для водного транспорта', temp: '—', when: 'условия и объём уточняет менеджер' }
];

export const fuelNote =
  'Арктическое дизельное топливо и печное топливо не поставляем. Температура фильтруемости указана по норме ГОСТ; в паспорте партии значение обычно ниже.';

export type QualityIcon = 'passport' | 'flask' | 'seal' | 'meter' | 'gps' | 'storage';

export interface QualityItem {
  icon: QualityIcon;
  title: string;
  text: string;
}

export const qualityItems: QualityItem[] = [
  { icon: 'passport', title: 'Паспорт качества', text: 'На каждую поставку — от завода-изготовителя, с фактическими показателями партии.' },
  {
    icon: 'flask',
    title: 'Арбитражная проба',
    text: 'Отбирается при сливе и остаётся у вас: спорная ситуация решается лабораторией, а не спором.'
  },
  { icon: 'seal', title: 'Пломбы', text: 'Цистерна пломбируется после налива; номер пломбы сверяется с ТТН при вас.' },
  { icon: 'meter', title: 'Счётчики', text: 'Счётчики с регулярной проверкой и калибровкой — литраж виден при сливе.' },
  { icon: 'gps', title: 'GPS-мониторинг', text: 'Машина отслеживается от налива до слива.' },
  { icon: 'storage', title: 'Хранилище и поставщики', text: 'Собственное хранилище и проверенные поставщики — топливо не «с рынка».' }
];

export interface FleetFact {
  value: string;
  label: string;
}

export const fleetFacts: FleetFact[] = [
  { value: '7 бензовозов', label: 'свой автопарк: GPS и счётчики на каждой машине' },
  { value: 'до 60 м', label: 'шланги: слив без заезда на участок' },
  { value: 'от 500 л', label: 'малый бензовоз — проезд в узкие улицы посёлков' },
  { value: 'до 30 000 л', label: 'за одну поставку — для объектов и котельных' },
  { value: 'Пломбировка', label: 'на нефтебазе, сверка номера с ТТН при вас' },
  { value: 'до 400 км', label: 'от МКАД: Москва, область и соседние регионы; срок в регионы согласуем при расчёте' }
];

export const docBadges: string[] = ['Договор', 'Счёт', 'УПД', 'ТТН', 'Акт', 'Паспорт качества', 'НДС / без НДС', 'ЭДО', '44-ФЗ / 223-ФЗ'];

export interface EquipmentItem {
  title: string;
  text: string;
}

export const equipmentItems: EquipmentItem[] = [
  { title: 'Мини-АЗС', text: 'Компактная заправка на вашем объекте — доставка и установка' },
  { title: 'Еврокубы', text: 'Хранение и перевозка топлива, в том числе б/у' },
  { title: 'Ёмкости и бочки', text: 'Подбор под объект и объём' },
  { title: 'Чистка ёмкостей', text: 'Резервуары и баки — с выездом' },
  { title: 'Аренда оборудования', text: 'Ёмкости и мини-АЗС на срок проекта' },
  { title: 'Обслуживание', text: 'Регламентные работы по графику' },
  { title: 'Котельные', text: 'Топливо и сопровождение котельных' },
  { title: 'ДГУ', text: 'Топливо и обслуживание дизель-генераторов' }
];

export interface Review {
  text: string;
  name: string;
  place: string;
}

/**
 * Пересказ без кавычек: в инвентаре старого сайта отзывы записаны пересказом.
 * Перед публикацией дословных текстов — заменить и вернуть кавычки (design-concept, блок 10).
 */
export const reviews: Review[] = [
  { text: 'Заказывает топливо три года: привозят вовремя, водитель звонит заранее.', name: 'Константин', place: 'Люберцы' },
  { text: 'Заказывает топливо на дачу для котла: зимой топливо не замёрзло.', name: 'Екатерина', place: 'Серпухов' },
  { text: 'Автопокраска, топливо для генератора: отмечает ночную срочную доставку.', name: 'Иван', place: 'Москва, автосервис' }
];

export interface FaqItem {
  q: string;
  a: string;
}

export const faqItems: FaqItem[] = [
  {
    q: 'Сколько стоит литр дизельного топлива?',
    a: 'Цена зависит от объёма, марки, адреса и расстояния, срочности и формы оплаты. Оставьте заявку — пришлём предварительный расчёт за 15 минут в рабочее время; окончательную цену подтверждает менеджер.'
  },
  {
    q: 'Как быстро вы привозите топливо? Работаете ли ночью?',
    a: 'День в день. Есть срочные и ночные поставки, заявки принимаем круглосуточно. Время согласует менеджер при расчёте.'
  },
  {
    q: 'Какой минимальный и максимальный объём заказа?',
    a: 'От 500 до 30 000 литров за одну поставку. Доставляем по Москве, области и в соседние регионы — до 400 км от МКАД.'
  },
  {
    q: 'Как проверить качество топлива?',
    a: 'На каждую поставку выдаём паспорт качества завода-изготовителя. При сливе отбирается арбитражная проба, которая остаётся у вас. Цистерна опломбирована — номер пломбы сверяется с ТТН.'
  },
  {
    q: 'Какие документы вы выдаёте и как принимаете оплату?',
    a: 'Договор, счёт, УПД, ТТН, акт и паспорт качества. Безналичный расчёт, с НДС или без, поддерживаем ЭДО; участвуем в закупках по 44-ФЗ и 223-ФЗ. Постоянным клиентам — отсрочка платежа и график поставок.'
  },
  {
    q: 'Какое топливо заказывать зимой?',
    a: 'Зимнюю марку по ГОСТ 32511-2013: сорт F — до −20 °C, ДТ-З класс 1 — до −26 °C, класс 2 — до −32 °C. Подберём марку под температуру и технику.'
  },
  {
    q: 'Чем солярка отличается от дизельного топлива?',
    a: 'Ничем: «солярка» — разговорное название дизельного топлива. Мы поставляем дизельное топливо с паспортом качества завода-изготовителя.'
  },
  {
    q: 'Поставляете ли керосин и судовое топливо?',
    a: 'Да: керосин ТС-1 по Московской области и судовое маловязкое топливо для водного транспорта. Объём и условия уточните у менеджера.'
  }
];

export const seasonOptions: string[] = [
  'Посоветуйте',
  'Летнее — сорт C',
  'Межсезонное — сорт E',
  'Зимнее — сорт F',
  'Зимнее — ДТ-З класс 1 / 2',
  'Керосин ТС-1',
  'Судовое маловязкое'
];

export const urgencyOptions: string[] = ['День в день', 'Срочно', 'Ночью', 'По графику'];
