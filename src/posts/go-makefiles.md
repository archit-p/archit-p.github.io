---
slug: "/blog/makefiles-for-go-projects"
date: 2020-09-12
title: "Makefiles for Go Projects"
description: "A template for Makefiles to use along with Go projects"
keywords: "go, makefiles, template, programming"
---

Go's compiler is awesome. Its simple, easy to use and best of all blazingly fast. In order to create a build system around Go's compiler that can account for varied project structures, I like to use a `Makefile` for building, testing and documenting my Go projects.

## Simple Makefile Structure

```makefile
GO=go
SOURCE=cmd/main.go
TARGET=main
DOCS=docs/docs_init.go
SWAG=swag
INSTALLPATH=${GOBIN}

.PHONY: help docs clean test dep install

help:
    @echo "use \`make <target> where <target> is:\'"
    @echo "	help: display this help"
    @echo "	dep: download dependencies"
    @echo "	docs: build swagger documentation"
    @echo "	build: generate executable"
    @echo "	test: run tests"
    @echo "	install: build, test and install (to ${GOBIN} by default)"
    @echo "	clean: clean the build directory"

dep:
    ${GO} get \
        github.com/swaggo/swag/cmd/swag \
        github.com/swaggo/http-swagger

docs: dep
    ${SWAG} init -g ${DOCS}

build: dep
    ${GO} build -o ${TARGET} ${SOURCE}

test: dep
    ${GO} test ./... -v

install: build test
    cp ${TARGET} ${INSTALLPATH}

clean:
    rm -f ${TARGET} 1>/dev/null 2>&1
```

## Advantages with Makefiles

### Uniformity Across Various Projects

When working on a new project or revisiting an old one, I don't need to scour for the build target or download dependencies manually.

### Most Developers Already have GNUMake Setup

This is very helpful when collaborating. Since most developers are already familiar with GNUMake and the `make` command, they can get started faster.

### Customizable

Makefiles are very customizable. This holds true here as well. I can easily edit them to use a specific version of Go, tweak target names or change the install location.
