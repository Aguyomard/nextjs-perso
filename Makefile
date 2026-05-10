.PHONY: install dev build start lint format format-check docker-build docker-run up down

PORT ?= 3000
IMAGE_NAME ?= next-app:latest

install:
	npm ci

dev:
	npm run dev

build:
	npm run build

start:
	npm run start

lint:
	npm run lint

format:
	npm run format

format-check:
	npm run format:check

docker-build:
	docker build -t $(IMAGE_NAME) .

docker-run:
	docker run --rm -p $(PORT):3000 $(IMAGE_NAME)

up:
	IMAGE_NAME=$(IMAGE_NAME) PORT=$(PORT) docker compose up --build -d

down:
	docker compose down
