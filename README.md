# m26t v0.1.0

> Multilingualization DataSheet

m26t is a CLI static site generator. m26t converts the given json files which contain the language data of an app into a single webpage.

# Usage

### :cd: Install

    npm install m26t

First, create config file `m26t.yml`:

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

Then you hit the command `./node_modules/.bin/m26t`, and it outputs:

```
```

SS


# Name

m26t is short for multilingualization-datasheet.

# License

MIT
