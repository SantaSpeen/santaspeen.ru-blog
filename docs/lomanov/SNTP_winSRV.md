---
sidebar_position: 6
title: Настройка SMTP на Windows Server
---

Моя топология выглядит вот так:
![Топология проекта](./shared/topology.png)

Настраивать SMTP будем на:
- W-SRV (`152.10.0.2`) - Windows Server 2019

### Установка сервера

Через добавление ролей и компонентов установим
- `Роли сервера`/`Консоль управления службами IIS`\
![install-iis](SMTP/install-iis.png) 
- `Компоненты`/`SMTP-Сервер`\
![install-smtp](SMTP/install-smtp.png)

Ждём окончание установки (3-6 минуты)

### Настройка сервера

В целом, автоконфигурация уже достаточно преднастроена, если есть домен.\
Моя настройка:

![Общие](SMTP/smtp-settings1.png)\
![Доступ](SMTP/smtp-settings2.png)\
![Доставка](SMTP/smtp-settings3.png)

Теперь нужно настроить что бы служба `SMTPSVC` запускалась автоматически
```powershell
set-service smtpsvc -StartupType Automatic
start-service smtpsvc
get-service smtpsvc
```
![smtpsvc](SMTP/smtpsvc-running.png)

По пути `C:\inetpub\mailroot\Pickup` создаём наше "письмо"\
`mail.txt`:
```plain
From: admin@khm.wsr
To: totat22746@apdiv.com
Subject: SMTP Testing

SMTP Testing!
```

![Mail received](SMTP/recv.png)
