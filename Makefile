.PHONY: all build clean lint test prepare semantic-release

all: clean test build

build:
	npm run build

clean:
	npm run clean

lint:
	npm run lint

test:
	npm run test

prepare:
	npm run prepare

semantic-release:
	npm run semantic-release

.DEFAULT_GOAL := all
