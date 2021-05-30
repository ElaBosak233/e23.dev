---
layout: friends # required
cover: true
title: 友链 # Optional, this is the title of the friend link page
bottom_meta: false
sidebar: []
---

{% note quote, 这里都是我的好朋友哦，想添加友链不是不行，但是建议先友后链，规则见下面呀%}

<!-- more -->

{% folding green open, 🍀友链添加规则 %}
1. 建议 **先友后链**，当然，这个友情的深度自己肯定很清楚
2. 任何网址都可添加友链，包括但不限于博客，各类网站的主页，只要没有 **原则性** 问题，都可以请求添加
3. 来者不拒，只要你愿意，埃拉都会热情地把你的链接加上
4. 当然，最好是 **互换** 友链，如果是单向的，emm，不是不行，但是请跟我说一声
5. 按照下面的格式在此页面评论（或者你 Fork 后发 PR 也可 `./source/_data/friends.yml`）
```yaml
- title: # 名称（必填）
  avatar: # 头像 URL（必填）
  url: # 链接（必填）
  screenshot: https://cdn.jsdelivr.net/gh/cdn-x/placeholder@1.0.1/cover/76b86c0226ffd.svg # 截图 URL（必填）
  keywords: # 关键词
  description: # 描述
```
{% endfolding %}
