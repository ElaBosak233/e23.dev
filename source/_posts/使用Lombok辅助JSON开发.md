title: 使用 Lombok 辅助 JSON 开发
date: 2020-10-31
categories: Java
tags:
  - Java
  - JSON
  - IntelliJ IDEA
<!-- cover: https://i.loli.net/2020/10/31/iJD9MKCLsVzgf3A.png -->
thumbnail: https://i.loli.net/2020/10/31/iJD9MKCLsVzgf3A.png
---

> ***Lombok Reduces Java's Boilderplate code***

<!--more-->

## Lombok 简介

> ~~龙目岛 *(Lombok island)* 位于印度尼西亚西南部的西努沙登加拉省...~~ **Lombok** 项目是一个 Java 库，它会自动插入编辑器和构建工具中，Lombok 提供了一组 **有用的注释**，用来 **消除** Java 类中的 **大量样板代码**，仅五个字符 (@Data) 就可以替换数百行代码从而产生干净，简洁且易于维护的 Java 类 **———— 转自【百度百科】**

如百度百科所示，Lombok 可以让开发者告别繁琐的 **样板代码**，样板代码是什么，如下所示

```java
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

```java
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

## 使用 Lombok

