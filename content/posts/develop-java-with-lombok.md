---
title: 使用 Lombok 辅助 Java 开发
createdAt: "2020-10-31"
category: 开发
heroImg: https://i.loli.net/2020/10/31/iJD9MKCLsVzgf3A.png
---

Lombok Reduces Java's Boilderplate code.

<!--more-->

# Lombok 简介

> ~~龙目岛 *(Lombok island)* 位于印度尼西亚西南部的西努沙登加拉省...~~ **Lombok** 项目是一个 Java 库，它会自动插入编辑器和构建工具中，Lombok 提供了一组 **有用的注释**，用来 **消除** Java 类中的 **大量样板代码**，仅五个字符 (@Data) 就可以替换数百行代码从而产生干净，简洁且易于维护的 Java 类 **—— 转自【百度百科】**

如百度百科所示，Lombok 可以让开发者告别繁琐的 **样板代码**，样板代码是什么，如下所示

```java [User.java]
public class User {

    public long uid;
    public String username;
    public String password;

    public long getUid() {
        return this.uid;
    }

    public String getUsername() {
        return this.username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setUid(long uid) {
        this.uid = uid;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}
```

如以上代码所示，这只是个普通的 User 类，里面包含了三个数据，但是想要使用这三个数据，就得自己手撸 Setter 和 Getter 方法，万一有 n 个数据，我该如何处理？难道我真的要手撸出 2n 个方法吗？显而易见，这十分疯狂，而且作为开发者，我们希望的是快速、高效地开发，而不是把生命耗在手撸重复的代码上，因此，Lombok 可以使用简短的注释，在开发过程中省略手撸重复的方法，以下是使用 Lombok 的半伪码

```java [User.java]
public class User {
    
    @Data
    public long uid;

    @Data
    public String username;

    @Data
    public String password;

}
```

当你使用了 Lombok 提供的 `@Data` 注释，那么你的 User 类下就会在编译的时候自动生成对应的 Getter 和 Setter 方法，从中还可以看出，Lombok 是只在编译的时候调用的库，就是说，如果你在写 Minecraft 的插件，它不应当被打包在插件的 Jar 里面

# 安装 Lombok

以下两个步骤都需要执行，首先是依赖，这样才能使用 Lombok 提供的类似于 *@Data* 的方法，但是仅仅有这个还不行，因为 IDE 不知道你有 Getter 和 Setter 方法，添加 Lombok 的 IDE 插件，才能让你的 IDE 知道这些方法的存在

## 添加 Lombok 作为依赖

```xml [pom.xml]
<dependencies>
    <dependency>
        <groupId>org.projectlombok</groupId>
        <artifactId>lombok</artifactId>
        <version>1.18.16</version>
        <scope>provided</scope>
    </dependency>
</dependencies>
```

## 安装 IntelliJ IDEA 的 Lombok 插件

![](https://i.loli.net/2020/10/31/47ULRmzwQgY3JPi.png)

# Lombok 常用功能表

本文只展现几种常见的 Lombok 功能，如果想要了解更多功能，参见 **[Project Lombok](https://projectlombok.org/features/all)**

注释|功能
:-:|:-:
@Getter / @Setter|自动生成 Getter 或 Setter 方法，可作用在成员变量或者类上（作用在类上默认给所有成员变量生成 Getter 或 Setter 方法）
@ToString|作用于类，覆盖默认的toString()方法
@EqualsAndHashCode|作用于类，覆盖默认的equals和hashCode
@NonNull|标注给成员变量，要求标识不能为空，否则抛出空指针异常
@NoArgsConstructor / @RequiredArgsConstructor / @AllArgsConstructor|作用于类上，生成不同的构造器（无参、包含 final 和 @NonNull 注解的参数、全参）
@Data|作用于类或者成员变量上，是前面介绍的几种注释的合集，根据情况自动转换，包含了 @ToString @EqualsAndHashCode @Getter @Setter @RequiredArgsConstructor
@Log|作用于类上，生成日志变量，针对不同的日志实现产品，有不同的注解
@Cleanup|自动关闭资源，如 IO 流
@Synchronized|给方法加上同步锁，在做线程安全的时候会用到