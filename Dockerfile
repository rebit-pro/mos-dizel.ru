FROM node:24-alpine3.24 AS build

RUN apk add --no-cache chromium nss freetype harfbuzz ca-certificates ttf-freefont
ENV CHROMIUM_PATH=/usr/bin/chromium-browser

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

ARG VITE_API_URL=/
ARG VITE_APP_VERSION=v1.7.0
ARG VITE_FORM_ENDPOINT=
ARG VITE_METRIKA_ID=
ENV VITE_API_URL=${VITE_API_URL}
ENV VITE_APP_VERSION=${VITE_APP_VERSION}
ENV VITE_FORM_ENDPOINT=${VITE_FORM_ENDPOINT}
ENV VITE_METRIKA_ID=${VITE_METRIKA_ID}

RUN npm run build:site

FROM nginx:1.29-alpine3.23 AS runtime

# default.conf — прод; staging.conf (noindex) выбирается сборкой: --build-arg NGINX_CONF=staging.conf
ARG NGINX_CONF=default.conf
COPY docker/nginx/${NGINX_CONF} /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=10s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/health || exit 1
