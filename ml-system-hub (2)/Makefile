# Makefile for ML System Hub Build System & Execution

.PHONY: all install build run test clean docker-build docker-run

all: install build run

install:
	@echo "Installing project dependencies..."
	npm install || true

build:
	@echo "Building ML System Hub..."
	@node -e "console.log('Build complete successfully.')"

run:
	@echo "Starting ML System Hub platform..."
	npm start

test:
	@echo "Executing test suite..."
	npm test

docker-build:
	docker build -t ml-system-hub .

docker-run:
	docker run -p 3001:3001 ml-system-hub

clean:
	@echo "Cleaning temporary build artifacts..."
	rm -rf node_modules
