#!/usr/bin/env bash
# Деплой staging mos-dizel.rebit-pro.ru (launch-plan Л2).
# Локальная сборка (noindex-конфиг nginx) → перенос образа по SSH → обновление swarm-стека за Traefik.
# Требования: docker локально, ssh-алиас rebit-pro, /opt/mos-dizel/stack.yml на сервере.
set -euo pipefail
cd "$(dirname "$0")/.."

TAG="staging-$(date +%Y%m%d%H%M)"
IMAGE="mos-dizel-site:$TAG"

echo "[1/4] build $IMAGE (nginx: staging.conf, без счётчиков)"
docker build --build-arg NGINX_CONF=staging.conf -t "$IMAGE" .

echo "[2/4] ship image -> rebit-pro"
docker save "$IMAGE" | gzip | ssh rebit-pro 'gunzip | docker load'

echo "[3/4] stack deploy"
ssh rebit-pro "sed -i 's|image: mos-dizel-site:.*|image: $IMAGE|' /opt/mos-dizel/stack.yml \
  && docker stack deploy -c /opt/mos-dizel/stack.yml mosdizel"

echo "[4/4] smoke"
sleep 12
code=$(curl -s -o /dev/null -w '%{http_code}' https://mos-dizel.rebit-pro.ru/)
robots=$(curl -sI https://mos-dizel.rebit-pro.ru/ | grep -ci 'x-robots-tag: noindex' || true)
echo "root: $code, noindex header: $robots"
[ "$code" = "200" ] && [ "$robots" = "1" ] && echo "OK: staging обновлён ($TAG)" || { echo "FAIL: проверь docker service ps mosdizel_web"; exit 1; }
