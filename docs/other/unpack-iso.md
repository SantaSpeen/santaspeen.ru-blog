---
sidebar_position: 1
title: Как распаковать iso на Linux
---

Содаём папку для монтировани и распаковки
```bash
mkdir iso
mkdir iso_content
```

Монтируем и копируем всё в папку `iso_content`
```bash
sudo mount filename.iso iso
cp iso/* iso_content -r
```

Теперь размонтируем наш iso
```bash
sudo umount iso
```
