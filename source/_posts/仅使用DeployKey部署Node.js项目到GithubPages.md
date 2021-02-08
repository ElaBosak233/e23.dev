title: 仅使用 Deploy Key 部署 Node.js 项目到 Github Pages
date: 2021-02-07
categories: Github
toc: true
tags:
  - Github
  - Node.js
cover: https://i.loli.net/2021/02/07/7ZUFuTlnDo6Q3A4.png
<!-- thumbnail: https://i.loli.net/2020/10/24/RuAjPDwrlVz5xsM.jpg -->
---

在传统的 Node.js 项目构建、部署下，通常需要使用到 [**Personal access tokens**](https://github.com/settings/tokens)，想一想，如果我们对通过 Github Actions 部署项目到 Github Pages 服务的需求量非常大，那我们在 Github Personal access tokens 中保存的 Token 就会非常多，即使我们能对这些 Token 进行标注，但我们却 **不能** 更改它，这就很让人头疼了，那么有没有不使用 Personal access tokens 就能实现我们目的的呢？有，那就是使用 **Deploy Key**。

<!-- more -->

## 原理

首先，我们知道，使用 Git 的时候我们需要和 Github（或者其他远程 Git 仓库）取得联系，我们可以使用邮箱+密码的方式登录 Github 服务器，但我们还可以使用一种方法，就是 **SSH 公私钥验证**，我们只要拥有了公私钥，就能利用 Github Actions 中的第三方部署脚本部署我们的 Node.js 项目，我们让 Github 在仓库设置中保存好公钥（这就是 **Deploy Key**），然后我们再保存私钥到 Secret，让 Github Actions 运行时使用 Secret 作为环境变量，通过私钥与公钥的配对，将构建好的内容部署到 gh-pages 分支。

## 创建公私钥

只讲原理不实践在 Ela 这里是最忌讳的事情，所以就用 Ela 的小作品 [**Buddy**](https://github.com/ElaBosak233/Buddy.git) 来演示一下。

![](https://i.loli.net/2021/02/07/JjCQHbAhWI7aPrq.png)

从上图我们可以看出 Buddy 是一个 Vue 项目没错了，那好，我们就地开搞，鼠标右键，**Git Bash Here**，打开 Git 命令行，输入

```bash
ssh-keygen -t rsa -b 4096 -C "$(git config user.email)" -f 公私钥文件名 -N ""
```

{% raw %}<article class="message is-warning"><div class="message-body">{% endraw %}
注意一下，我们可以看见命令行语句中有一个 `git config user.email`，这意味着你要先在 Git 中设置好要使用的邮箱，否则，这个语句是无法运行的！另外，语句中 “公私钥文件名” 请注意一下，随便什么 **英文** 都行，不要一时失忆，把这个中文名写了上去。
{% raw %}</div></article>{% endraw %}

假如我输入了 `ssh-keygen -t rsa -b 4096 -C "$(git config user.email)" -f gh-pages -N ""`，文件夹中就会生成这样两个文件

![](https://i.loli.net/2021/02/07/Vrj5eb7JfRSyqUm.png)

这就一目了然了，带 *.pub* 后缀的文件就是公钥，没有后缀的便是私钥了，但请不要忘了将这两个文件加入 **.gitignore** 让 Git 忽略掉它们，如果你不小心将它们上传到了仓库，**就像你把自己的账号密码开源共享一样可怕**！

## 添加公钥到 Github

在 Github 仓库中打开 **Deploy Key** 选项卡（`Settings -> Deploye keys -> Add deploy key`），按照图示步骤添加公钥

![](https://i.loli.net/2021/02/07/PtJ2KQAg1on47IF.png)

## 添加私钥到 Github

在 Github 仓库中打开 **Secrets** 选项卡（`Settings -> Secrets -> New repository secrets`），按照图示步骤添加私钥

![](https://i.loli.net/2021/02/07/XTDa62FlfVRwxrA.png)

## 编写 Github Actions 脚本

在仓库中创建文件 `.github/workflows/deploy.yml`，按照下面的代码编写脚本（直接复制粘贴也没关系）

```yaml
name: Deploy to Github Pages # Action 的名称，随便写
on:
  push:
    branches:
      - main # 这里是限定了 Action 的触发条件，我限定只有在 main 分支发生 push 动作时才触发
jobs:
  deploy:
    runs-on: ubuntu-latest # 虚拟机系统，Ubuntu 标配
    strategy:
      matrix:
        node-version: [12.x] # 这里设置好 node 的版本
    steps:
      - uses: actions/checkout@v1 # 检查
      - name: Use Node.js ${{ matrix.node-version }} # 启动 node
        uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node-version }}
      - name: Cache node modules # 缓存 node_modules
        uses: actions/cache@v1
        with:
          path: node_modules
          key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.OS }}-build-${{ env.cache-name }}-
            ${{ runner.OS }}-build-
            ${{ runner.OS }}-
      - name: Install Packages # 安装依赖，懂的都懂
        run: npm install
      - name: Build page # 构建静态文件，这个要看你的 package.json 中 script 的内容，你需要熟知自己项目生成静态文件的路径
        run: npm run build
      - name: Deploy to Github Pages # 部署到 Github Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          deploy_key: ${{ secrets.BUDDY_DEPLOY_PRI }} # 这里就是刚刚 Secrets 中设置的私钥的名称，所以我说不要太为难自己嘛
          publish_dir: ./dist # 项目构建静态文件的目录
```

不出意外，当这个 Github Actions 成功运行后，你的仓库就会多出个 **gh-pages** 分支，Github Pages 服务也会因为这个分支的创建自动开启，你就可以享用你的构建成果了！