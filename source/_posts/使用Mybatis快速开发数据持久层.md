title: 使用 Mybatis 快速开发数据持久层
date: 2020-11-7
categories: Java
tags:
  - Java
  - SQL
toc: true
cover: https://i.loli.net/2020/11/01/NBwvihlaUDqySzY.png
---

> ***MyBatis & SQL => Easyier & More Beautiful***

<!--more-->

# Why MyBatis

先看看 **[mybatis.org](https://mybatis.org/mybatis-3/zh/index.html)** 给 MyBatis 的介绍吧

> MyBatis 是一款优秀的持久层框架，它支持自定义 SQL、存储过程以及高级映射。MyBatis 免除了几乎所有的 JDBC 代码以及设置参数和获取结果集的工作。MyBatis 可以通过简单的 XML 或注解来配置和映射原始类型、接口和 Java POJO（Plain Old Java Objects，普通老式 Java 对象）为数据库中的记录

从官网给出的介绍来看，MyBatis 也是一个 **避免麻烦** 的工具，相比于繁琐的 JDBC 代码，Mybatis 使用了 XML 配置或者注解让一切变得更加简单（确实，简单可以让开发者更有心情去工作，况且 JDBC **太影响** 初学者的学习心情了）

# 安装 MyBatis

## 添加 MyBatis 作为依赖

毕竟 MyBatis 是开源项目，所以它的发布内容都会在它的 **[Github 仓库](https://github.com/mybatis/mybatis-3/releases)** 中，你可以使用 Jar 包导入的方式直接引用 MyBatis，当然，Maven 和 Gradle 也是可以的，如果你在使用 SpringBoot 进行开发，那么在 Spring Initializr 中可以选择 MyBatis Framework

<div class="tabs is-toggle"><ul>
<li class="is-active"><a onclick="onTabClick(event)">
<span class="icon is-small"><i class="fas fa-feather-alt" aria-hidden="true"></i></span>
<span>Maven</span>
</a></li>
<li><a onclick="onTabClick(event)">
<span class="icon is-small"><i class="fab fa-google-drive" aria-hidden="true"></i></span>
<span>Gradle</span>
</a></li>
</ul></div>
{% raw %}<div id="Maven" class="tab-content" style="display: block;">{% endraw %}
```xml pom.xml
<dependencies>
    <dependency>
        <groupId>org.mybatis</groupId>
        <artifactId>mybatis</artifactId>
        <version>x.x.x</version> <!--版本号参见 MyBatis 的 Github 仓库-->
    </dependency>
</dependencies>
```
{% raw %}</div>{% endraw %}
{% raw %}<div id="Gradle" class="tab-content">{% endraw %}
```gradle build.gradle
dependencies {
	compile 'org.mybatis:mybatis:x.x.x' //版本号参见 MyBatis 的 Github 仓库
}
```
{% raw %}</div>{% endraw %}

<style type="text/css">
.content .tabs ul { margin: 0; }
.tab-content { display: none; }
</style>

<script>
function onTabClick (event) {
    var tabTitle = $(event.currentTarget).children('span:last-child').text();
    $('.article .content .tab-content').css('display', 'none');
    $('.article .content .tabs li').removeClass('is-active');
    $('#' + tabTitle).css('display', 'block');
    $(event.currentTarget).parent().addClass('is-active');
}
</script>

## 安装 IntelliJ IDEA 的 MyBatis 插件

{% raw %}<div class="notification is-success">{% endraw %}
<i class="fas fa-info-circle mr-2"></i>这个插件是 <strong>可选的</strong>，它只能帮助我们更好地进行开发，对代码判断是无影响的
{% raw %}</div>{% endraw %}