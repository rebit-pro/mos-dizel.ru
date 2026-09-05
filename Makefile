SHELL := /bin/bash
NVM_DIR ?= $(HOME)/.nvm
NODE_VERSION ?= 24
HOST ?= 127.0.0.1
PORT ?= 5173
PREVIEW_PORT ?= 4173
APP_PORT ?= 8080
DOCKER_COMPOSE ?= docker compose

.PHONY: install dev preview build typecheck lint check docker-up docker-down docker-logs docker-status deploy-status

define use_node
source "$(NVM_DIR)/nvm.sh" && nvm use $(NODE_VERSION)
endef

install:
	$(use_node) && npm ci

dev:
	$(use_node) && npm run dev -- --host $(HOST) --port $(PORT)

preview:
	$(use_node) && npm run preview -- --host $(HOST) --port $(PREVIEW_PORT)

build:
	$(use_node) && npm run build

typecheck:
	$(use_node) && npm run typecheck

lint:
	$(use_node) && npm run lint

check: lint typecheck build

docker-up:
	APP_PORT=$(APP_PORT) $(DOCKER_COMPOSE) up --build -d

docker-down:
	$(DOCKER_COMPOSE) down

docker-logs:
	$(DOCKER_COMPOSE) logs -f web

docker-status:
	APP_PORT=$(APP_PORT) $(DOCKER_COMPOSE) ps

deploy-status:
	gh run list --repo rebit-pro/mos-dizel.ru --workflow Deploy --limit 5
