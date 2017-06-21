# langsheet v0.1.0

> Static site generator for creating language x phrase key data table

langsheet is a CLI static site generator. langsheet converts the given json files which contain the phrase data for several languages into a single webpage.

# Usage

### :cd: Install

    npm install langsheet

First, create config file `langsheet.yml`:

```yml
source: data/i18n/*.json
```

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

Then you hit the command `./node_modules/.bin/langsheet`, and it outputs:

```
```

SS

# License

MIT
