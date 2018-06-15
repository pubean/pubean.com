---
title: "{{ replace .TranslationBaseName "-" " " | title }}"
date: {{ .Date }}
tags: ["TagA", "TagB"]
site: "https://product-official-page.com"
resources:
  - src: "resources/*.{jpg,jpeg,png,gif,webp,svg}"
    title: "Figure :counter of {{ replace .TranslationBaseName "-" " " | title }}"
weight: 10
draft: true
---

Cut out summary from your content here, if you didn't set break point with `<!--more-->` manually, hugo will cut out 70 letters as summary automatically. You can change summary length in `config.yaml` by set `summaryLength` a new integer value.

<!--more-->

The remaining content of your product.
