# Мос-Дизель

Frontend-проект сайта `mos-dizel.ru` на базе Vue 3, Vuetify 3, Vite и Berry seed template.

## Стек

- Vue 3 + TypeScript
- Vuetify 3 + Berry UI shell
- Vite
- Pinia, Vue Router
- GitHub Pages deploy через GitHub Actions

## Рабочая папка

```bash
cd /home/user/mos-dizel.ru
```

## Команды

```bash
make install
make dev
make lint
make typecheck
make build
make check
make docker-up
```

Если запускаешь без `make`:

```bash
source ~/.nvm/nvm.sh
nvm use 24
npm ci
npm run dev
```

## Локальный запуск в Docker

Docker собирает production-версию сайта и раздаёт её через Nginx:

```bash
make docker-up
```

После запуска сайт доступен по адресу <http://localhost:8080>. Проверить контейнер и остановить его:

```bash
make docker-status
make docker-down
```

Чтобы использовать другой порт:

```bash
APP_PORT=8081 make docker-up
```

Без `make` используются команды `docker compose up --build -d`, `docker compose ps` и `docker compose down`.


## Staging

Стенд `https://mos-dizel.rebit-pro.ru` (закрыт от роботов: noindex + robots Disallow, без счётчиков) живёт на сервере студии как swarm-сервис `mosdizel_web` за Traefik. Обновление одним скриптом:

```bash
./scripts/deploy-staging.sh
```

Скрипт собирает образ локально с `docker/nginx/staging.conf`, переносит его по SSH (`ssh rebit-pro`) и перезапускает стек `/opt/mos-dizel/stack.yml`.

## Deploy

Deploy настроен в `.github/workflows/deploy.yml`: `npm ci` -> `npm run build` -> публикация `dist/` через GitHub Pages.

Разовая настройка в GitHub: `Settings -> Pages -> Source -> GitHub Actions`.

Remote: `git@github.com:rebit-pro/mos-dizel.ru.git`.

DNS и GitHub Pages инструкция: `docs/deploy/github-pages-dns.md`.

## Документация проекта

Порядок чтения перед любой работой (документы в `docs/`):

- `discovery/client-answers-2026-09-04.md` — ответы клиента на анкету согласования, решения по умолчанию и список открытых вопросов (главный источник решений).
- `fuel-grades.md` — единый справочник марок, температур, ГОСТ, керосина ТС-1, СМТ и разбор паспорта качества № 808.
- `design/design-system.md`, `design/tokens.css`, `design/tokens.json` — тёмная дизайн-система v3 «цвет нефти» (токены для вёрстки и для Figma через Tokens Studio).
- `design/design-concept.md` — концепция v3: блоки лендинга и тексты дословно, регламент изображений, критерии приёмки.
- `design/mockup-home.html` — тёмный HTML-мокап главной (импорт в Figma через html.to.design); `design/uikit-sheet.html` — лист UI-кита; `design/canvas/` — артборды холста Claude Design.
- `seo-plan-v3.md` — SEO-план (структура сайта, мета, волны W0–W2, аналитика, роадмап от 07.09.2026).
- `marketing/direct-plan-v2.md` — план Яндекс.Директа (кампании, фразы, минус-слова, объявления, чек-лист запуска).
- `semantics.md` — семантическое ядро с дополнением Д.1–Д.5 от 04.09.2026.
- `competitors/mostransneft-ru.md` — разбор конкурента.

Устаревшие версии оставлены для истории: `seo-plan.md` (v1), `seo-plan-v2.md`, `marketing/direct-plan.md` (v1), `design/mockup-home-v2-light.html` (светлый вариант, отклонён клиентом).
