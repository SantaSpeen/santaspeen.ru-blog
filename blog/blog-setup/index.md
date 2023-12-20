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

Блог DevOps программиста (меня) – это не просто место для записей о технических деталях, это своеобразная платформа для обмена опытом, решением трудностей и создания сообщества профессионалов в области разработки и операций. Давайте разберемся, почему блог DevOps программиста может стать неотъемлемой частью вашей профессиональной деятельности.

### Зачем это вообще нужно?

#### 1. Обмен опытом

DevOps – это область, где опыт имеет огромное значение. Через блог вы можете делиться своими наработками, лучшими практиками и решениями, с которыми вы сталкиваетесь в ходе своей работы.

#### 2. Инструменты и технологии

В мире DevOps постоянно появляются новые инструменты и технологии. Блогирование поможет вам оставаться в курсе последних трендов, а также делиться своим опытом использования различных инструментов.

#### 3. Сообщество

Блог DevOps программиста – это место, где вы можете объединиться с другими специалистами, обсудить актуальные вопросы, получить обратную связь и даже решить технические проблемы вместе.

### Кому нужен блог?

#### 1. Стартапы и компании

DevOps является ключевым элементом успешного развертывания и управления IT-инфраструктурой. Ваш блог может быть полезным ресурсом для стартапов и компаний, которые стремятся оптимизировать свои процессы.

#### 2. Новички в сфере DevOps

Для тех, кто только начинает свой путь в DevOps, ваш блог станет ценным ресурсом для обучения и понимания основных принципов и практик.

#### 3. Специалисты по технологиям и разработке

Блог DevOps программиста может привлечь внимание специалистов в области технологий и разработки, помогая им лучше понять взаимосвязь между разработкой и операциями.

По мере продвижения в этом блоге мы рассмотрим шаги по созданию и установке вашего собственного блога DevOps программиста на вашем веб-сайте.

## Настройка сайта
- <p style={{fontSize: '12px', margin: "0"}}>Если сайт уже есть, то пеерходите сразу к <a href="#установка-блога">установке блога</a></p>

### Покупка домена

Первым шагом к созданию собственного блога является приобретение уникального доменного имени.\
Выберите короткое, запоминающееся и отражающее суть вашего блога имя. После выбора, зарегистрируйте домен у одного из регистраторов доменных имен.\
Лично я выбрал свой ник в качестве домена.

На данные момент популярны такие сервисы для регистрации доменов в РФ:
1. [РЕГ.РУ](https://reg.ru) (за `.ru` 119/р в первый год, 999/р последующие года)
2. [RU-CENTER (NIC)](https://nic.ru) (за `.ru` 189/р в первый год, 999/р последующие года)

**Для регистрации обязателен паспорт**

### Настройка DNS

После приобретения домена переходите к настройке DNS. Найдите бесплатный DNS-сервер и настройте записи, указывающие на IP-адрес вашего хостинга. Это обеспечит корректное направление запросов к вашему сайту.\
Или можно привязать к сайт [CloudFlare](https://dash.cloudflare.com/), в целом бесплатно + SSL + есть защита от аттак\
**Так же подразумевается, что хост с белым IP уже есть.**

### Настройка WEB сервера

Теперь приступим к настройке вашего веб-сервера. В данном случае, рассмотрим пример с использованием Nginx и получением SSL-сертификата с помощью Certbot.

Установка Nginx:

```bash
sudo apt update
sudo apt install nginx snap
```

Настройка Nginx для сайта:
В файле конфигурации Nginx (`/etc/nginx/sites-available/default`) добавьте следующие строки:

```nginx
server {
    listen 80;
    server_name santaspeen.ru;

    root /var/www/blog/;
    index index.html;

    location / {
        add_header Cache-Control no-cache;
        expires 0;
        try_files $uri $uri/ /index.html;
    }

    # Media: images, icons, video, audio, HTC
    location ~* \.(?:jpg|jpeg|gif|png|ico|cur|gz|svg|svgz|mp4|mp3|ogg|ogv|webm|htc)$ {
        expires 1M;
        access_log off;
        add_header Cache-Control "public";
    }

    # Javascript and CSS files
    location ~* \.(?:css|js)$ {
        expires 1y;
        access_log off;
        add_header Cache-Control "public";
        try_files $uri =404;
    }

    # Any route containing a file extension (e.g. /devicesfile.js)
    location ~ ^.+\..+$ {
        try_files $uri =404;
    }
}
```
Не забудьте изменить `santaspeen.ru` и `/var/www/blog/` под свои данные.

:::tip
Если не использовать cloudflare, то SSL аертификаты нужно получить на хосте\
Установим Certbot для получения SSL-сертификата:

```bash
sudo snap install --classic certbot
sudo ln -s /snap/bin/certbot /usr/bin/certbot
```

С помощью этой комнды автоматически будет настроено SSL шифрование трафика\
`certbot` спросит все нужные ему данные: домен, почту и т.д.
```bash
sudo certbot --nginx
```

:::

Теперь, после всего что мы сделали, У нас будет доступ по https: https://santaspeen.ru/


## Установка блога

:::tip
Настройку / Написание текста / Проверку - советую делать на компе, а затем после `npm build` загружать на хостинг.
:::

### Загрузка

Давайте начнем с загрузки необходимых файлов для вашего блога. Вы можете воспользоваться командой git clone для получения исходного кода блога:

```bash
git clone https://github.com/SantaSpeen/santaspeen.ru-blog.git -b v1-ready
```

### Установка зависимостей

Убедитесь, что вы используете Node.js версии 20. Вы можете загрузить и установить ее с официального сайта Node.js: [Node20](https://nodejs.org/download/release/latest-v20.x/)
Перейдите в директорию вашего блога и выполните команду `npm install`, чтобы установить все необходимые зависимости:

```bash
cd santaspeen.ru-blog
npm install
```

### Запуск

1. **Настройка статических файлов:**
   - Проверьте и отредактируйте файлы в папке `static`:
     - `static/CNAME`: Укажите ваш домен в этом файле.
     - `static/robots.txt`: При необходимости настройте файл robots.txt.
     - `static/img/favicon.ico`: Замените иконку на свою.

2. **Настройка переменных окружения:**
   - Отредактируйте файл `.env`, указав необходимые параметры.

3. **Настройка конфигурации:**
   - При необходимости внесите изменения в файл `.aligoria_config.json` в соответствии с вашими предпочтениями.

4. **Запуск:**
   - Выполните команду `npm start` для запуска дебаг сервер с блогом (при редактировании файлов, содержимое сразу будет обновлено и на сайте).

## Настройка блога

### Общая структура

Вот так сейчас выглядит структура файлов блога и доков:

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

### Основные файлы

- **`.env`:** Тут хранятся данные нужные для запуска блога.
- **`blog/_template/index.md`:** Главная страница блога.
- **`blog/_template/logo.png`:** Логотип блога.
- **`docs/_template/_category_.json`:** Файл категории для организации документации.
- **`docs/_template/doc1.md` и `docs/_template/doc2.md`:** Примеры документации.
- **`docs/intro.md`:** Введение в документацию.

### Cтруктура блогов

Приведем пример для блога `_template`:

```plain
| -- blog
|   ` -- _template
|       | -- index.md
|       ` -- logo.png
```

##### Пример заголовка блога (`blog/_template/index.md`):

```md
---
slug: template
title: Заголовок блога
description: Описание блога
image: ./logo.png
tags: [docker, linux, networks]
keywords: [docker, linux]
date: 2023-11-29
---

Описание для предварительного просмотра на главной странице

[![Логотип блога](./logo.png)](/blog/_template)
<!--truncate-->

Этот текст будет только в блоге, его не видно в превью
```

- `slug`: уникальный идентификатор блога.
- `title`: заголовок блога.
- `description`: описание блога.
- `image`: путь к логотипу блога.
- `tags`: теги блога.
- `keywords`: ключевые слова для поисковых систем.
- `date`: дата публикации блога.
- `<!--truncate-->`: разделитель для превью.

### Структура документации

Приведем пример для документации `_template`:

```plain
| -- docs
|   | -- _template
|   |   | -- _category_.json
|   |   | -- doc1.md
|   |   ` -- doc2.md
|   ` -- intro.md
```

##### Содержимое `_category_.json` в `docs/_template/_category_.json`:

```json
{
  "label": "Template",
  "position": 1,
  "link": {
    "type": "generated-index",
    "description": "Описание шаблона"
  }
}
```

- `label`: название категории.
- `position`: позиция в навигации.
- `link.type`: тип ссылки (здесь генерируется индекс).
- `link.description`: описание ссылки.

##### Пример заголовка документа (`docs/_template/doc1.md`):

```md
---
sidebar_position: 1
title: Заголовок документа 1
---

Текст документа
```

- `sidebar_position`: позиция в боковой панели.
- `title`: заголовок документа.

Аналогично, для `doc2.md` будет другой `sidebar_position` и `title`.

При настройке блога и документации учтите указанные параметры для создания структуры и корректного отображения контента.

### Настройка стилей

Стили лежать по пути `/src/css/custom.css`

Я преднастроил их, и выглядят они сейчас вот так:

```css
/* src/css/custom.css */
:root {
  --footer-padding: 0.5em;
}

/* For readability concerns, you should choose a lighter palette in dark mode. */
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
}

[data-theme='light'] .header-github-link {
  background: url("/img/github.svg") 0 center / 25px 25px no-repeat;
}

[data-theme='dark'] .header-github-link {
  background: url("/img/githubL.svg") 0 center / 25px 25px no-repeat;
}

.markdown li a, .markdown p a {
  text-decoration: underline dotted;
}

```
