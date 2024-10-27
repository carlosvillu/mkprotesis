.PHONY: lib
OWNER=Carlos Villuendas<carlosvillu@gmail.com>

SHELL := /bin/sh
.DEFAULT_GOAL := help

export DEBUG ?= classicmanager:*
BUILD ?=


repopack:
	npx repopack --ignore dist -o .repopack/repopack-project.xml

help: ## show help
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'



