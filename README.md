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
```

Если запускаешь без `make`:

```bash
source ~/.nvm/nvm.sh
nvm use 24
npm ci
npm run dev
```

## Deploy

Deploy настроен в `.github/workflows/deploy.yml`: `npm ci` -> `npm run build` -> публикация `dist/` через GitHub Pages.

Разовая настройка в GitHub: `Settings -> Pages -> Source -> GitHub Actions`.

Remote: `git@github.com:rebit-pro/mos-dizel.ru.git`.

DNS и GitHub Pages инструкция: `docs/deploy/github-pages-dns.md`.
