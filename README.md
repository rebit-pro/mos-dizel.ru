# Мос-Дизель

Frontend-проект сайта `mos-dizel.ru` на базе Vue 3, Vuetify 3, Vite и Berry seed template.

## Стек

- Vue 3 + TypeScript
- Vuetify 3 + Berry UI shell
- Vite
- Pinia, Vue Router
- GitHub Pages deploy через GitHub Actions

## Команды

```bash
source ~/.nvm/nvm.sh
nvm use 24
npm ci
npm run dev
npm run typecheck
npm run build
```

## Deploy

Deploy настроен в `.github/workflows/deploy.yml`: `npm ci` -> `npm run build` -> публикация `dist/` через GitHub Pages.

Разовая настройка в GitHub: `Settings -> Pages -> Source -> GitHub Actions`.

Remote: `git@github.com:rebit-pro/mosdisel.git`.
