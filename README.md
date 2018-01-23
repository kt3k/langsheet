# langsheet v1.2.0

[![CircleCI](https://circleci.com/gh/kt3k/langsheet.svg?style=svg)](https://circleci.com/gh/kt3k/langsheet)
[![codecov](https://codecov.io/gh/kt3k/langsheet/branch/master/graph/badge.svg)](https://codecov.io/gh/kt3k/langsheet)

> Translation data to HTML Table converter

`langsheet` is a static site generator for translation data. `langsheet` converts the given json files which contain the phrase data for several languages into a single webpage.

An example output:

[![](https://kt3k.github.io/langsheet/media/screenshot.png)](https://kt3k.github.io/langsheet/)

# Usage

### :cd: Install

    npm install langsheet

First, create config file `langsheet.yml`:

```yml
source: data/i18n/*.json
```

Here, `source` is the glob pattern of phrase files.

And you have the language json files like the below:

data/i18n/en.json:
```
{
  "app.hello": "Hello {name}!",
  "app.form.email": "Mail address",
  "app.form.first_name": "First name",
  "app.form.last_name": "Last name",
  ...
}
```

data/i18n/fr.json:
```
{
  "app.hello": "Bonjour {name}!",
  "app.form.email": "Adresse mail",
  "app.form.first_name": "Prénom",
  "app.form.last_name": "Nom de famille",
  ...
}
```

data/i18n/es.json:
```
{
  "app.hello": "¡Hola {name}!",
  "app.form.email": "Correo Electronico",
  "app.form.first_name": "Nombre de pila",
  "app.form.last_name": "Apellido",
  ...
}
```

data/i18n/ja.json:
```
{
  "app.hello": "こんにちは {name}さん!",
  "app.form.email": "メールアドレス",
  "app.form.first_name": "名",
  "app.form.last_name": "姓",
  ...
}
```

data/i18n/kr.json:
```
{
  "app.hello": "{name}, 안녕!",
  "app.form.email": "메일 주소",
  "app.form.first_name": "이름",
  "app.form.last_name": "성",
  ...
}
```

## Serve your data table

Then you hit the command `./node_modules/.bin/langsheet`, and it outputs:

```
$ ./node_modules/.bin/langsheet
Requiring external module require-yaml
Using: /Users/kt3k/t/langsheet/example/langsheet.yml
langsheet [00:06:16] serving
langsheet [00:06:16] Reading: data/i18n/*.json
langsheet [00:06:16] Reading: /Users/kt3k/t/langsheet/tacit.min.css
langsheet [00:06:16] Server started at: http://localhost:26000/
langsheet [00:06:16] See debug info at: http://localhost:26000/__langsheet__
langsheet [00:06:17] Ready: /Users/kt3k/t/langsheet/tacit.min.css
langsheet [00:06:17] Ready: source/i18n/*.json
```

Then access `http://localhost:26000/` and you see:

<img src="https://kt3k.github.io/langsheet/media/screenshot.png" />

## Build static site

Hit the command `./node_modules/.bin/langsheet build` and you'll get your site as a single html file under `build/`

```
$ ./node_modules/.bin/langsheet build
Requiring external module require-yaml
Using: /Users/kt3k/example/langsheet.yml
langsheet [00:18:29] building
langsheet [00:18:30] done
$ tree build/
build/
└── index.html

0 directories, 1 files
```

## `langsheet.yml`

Full example of langsheet.yml:

```
source: src/i18n/**/*.*.json
port: 26000
dest: build
title: Language Data Table
```

- `source` is the glob pattern of source files. Required.
- `port` is the port number of the dev server. Default is 26000.
- `dest` is the build destination. Default is `build/`.
- `title` is the title of built webpage. Default is `Language Data Table`.

# History

- 2017-12-13   v1.1.1   Add `dest` option.

# License

MIT
