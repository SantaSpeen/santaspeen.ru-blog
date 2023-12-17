---
slug: blog-setup
title: Установка этого блога к себе на сервер
description: Описание
image: ./logo.png
tags: [blog, javascript, nginx]
keywords: [docker, linux]
date: 2023-12-15
---

Сегодня с расскажу как установить этот блог к себе на сайт

[![logo](./logo.png)](/blog/blog-setup)
<!--truncate-->

## Введение

[Зачем это вообще надо и кому нужен блог]


## Настройка сайта
- <p style={{fontSize: '12px', margin: "0"}}>Если сайт уже есть, то пеерходите сразу к <a href="#установка-блога">установке блога</a></p>

### Покупка домена

[Идём на регистратор и покупаем]

### Настройка DNS

[Находим бесплатный DNS сервер и писхаем туда ip]

### Настройка WEB сервера

[Тут будет как настроить nginx на выдачу index.html + certbot]

## Установка блога


### Качаем

[тут гит клон]

### Общая структура

Вот так сейчас выглядит структура файлов блога:
```plain
...
| -- blog
|   | -- _template
|   |   | -- index.md
|   |   | -- logo-template.psd
|   |   ` -- logo.png
|   ` -- blog-setup
|       | -- index.md
|       ` -- logo.png
| -- docs
|   | -- _template
|   |   | -- _category_.json
|   |   | -- doc1.md
|   |   ` -- doc2.md
|   ` -- intro.md
...
```

[Тут надо рассказать про основные файлы]

### Cтруктура блогов

[Несколько слов про то, или инное, рассмотрим на примере blog._template]

[Стандартная структура 1 блога]
```plain
| -- blog
|   ` -- _template
|       | -- index.md
|       ` -- logo.png
```

##### Заголовок у блога
```md
---
slug: template
title: title
description: Описание
image: ./logo.png
tags: [docker, linux, networks]
keywords: [docker, linux]
date: 2023-11-29
---

Описание для предварительного просмотра на главной странице

[![logo](./logo.png)](/blog/_template)
<!--truncate-->
```

`slug` - [Это..]\
`title` - [Это..]\
`description` - [Это..]\
`image` - [Это..]\
`keywords` - [Это..]\
`date` - [Это...]\
\
`<!--truncate-->` - [Это...]


### Структура доков

[Несколько слов про то, или инное, рассмотрим на примере docs._template]


[Стандартная структура 1 дока]
```plain
| -- docs
|   | -- _template
|   |   | -- _category_.json
|   |   | -- doc1.md
|   |   ` -- doc2.md
|   ` -- intro.md
```

[_category_.json Обязателен, рассказать что в нём]

Содержимое \<theme>/_category_.json
```json
{
  "label": "Template",
  "position": 1,
  "link": {
    "type": "generated-index",
    "description": "Template description"
  }
}
```

`label` - [Это..]\
`position` - [Это..]\
`link` - [Это..]\
`link.type` - [Это..]\
`link.description` - []

##### Заголовок у доков
[У каждого файла должен быть заголовок... Зачем? Почему?]

Заголовок doc1.md
```md
---
sidebar_position: 1
title: Template title 1
---

Template text
```

в doc2.md соответсвенно будет
```md
---
sidebar_position: 2
title: Template title 2
---

Template text
```

`sidebar_position` - [Это..]\
`title` - [Это...]

### Настройка стилей

Стили лежать по пути `/src/css/custom.css`

Я преднастроил их, и выглядят они сейчас вот так:

```css
/* src/css/custom.css */

:root {
  --footer-padding: 0.5em;
}
[data-theme='light'] {
  --ifm-color-primary: #7c538bfd;
  --ifm-color-primary-dark: #21af90;
  --ifm-color-primary-darker: #1fa588;
  --ifm-color-primary-darkest: #1a8870;
  --ifm-color-primary-light: #424242;
  --ifm-color-primary-lighter: #32d8b4;
  --ifm-color-primary-lightest: #4fddbf;
  --footer-background-color: #ececec;
  --footer-color: #000;
  --docusaurus-highlighted-code-line-bg: rgba(0, 0, 0, 0.3);
}
[data-theme='dark'] {
  --ifm-color-primary: #c4c0c5fd;
  --ifm-color-primary-dark: #21af90;
  --ifm-color-primary-darker: #1fa588;
  --ifm-color-primary-darkest: #1a8870;
  --ifm-color-primary-light: #29d5b0;
  --ifm-color-primary-lighter: #32d8b4;
  --ifm-color-primary-lightest: #4fddbf;
  --footer-background-color: #242526;
  --footer-color: #ebedf0;
  --docusaurus-highlighted-code-line-bg: rgba(0, 0, 0, 0.3);
}
.footer {
  --ifm-footer-background-color: var(--footer-background-color);
  --ifm-footer-color: var(--footer-color);
  padding: var(--footer-padding) 
}
.header-github-link:hover {
  opacity: 0.6;
}
.header-github-link::before {
  content: '';
  width: 24px;
  height: 24px;
  display: flex;
  background: url("/img/github.svg") 0 center / 25px 25px no-repeat;
}
h2 {
  --ifm-heading-vertical-rhythm-bottom: 0;
}
p a {
  text-decoration: underline dotted;
}
```

