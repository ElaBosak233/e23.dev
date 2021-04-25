---
layout: docs
cover: true
seo_title: 我的世界中文论坛
group: docs-api
sidebar: [docs-api, toc]
bottom_meta: false
comments: false
title: 我的世界中文论坛
---

{% note info, 使用 **我的世界中文论坛** 接口，需要添加前缀 **`/mcbbs`** %}

## 用户 `/user`

请求|地址|参数|描述|举例
:-:|:-:|:-:|:-:|:-:
**`GET`**|`/`|uid|获取指定 uid 用户的全部数据|`https://api.e23.in/mcbbs/user/?uid=2956130`
**`GET`**|`/getPopularity`|uid|获取指定 uid 用户的人气|`https://api.e23.in/mcbbs/user/getPopularity?uid=2956130`