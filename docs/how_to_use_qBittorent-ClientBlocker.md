# 关于如何使用 qBittorrent-ClientBlocker

项目地址： https://github.com/Simple-Tracker/qBittorrent-ClientBlocker

因为pt网站会屏蔽非原生的qBittorrent 所以结合 xunlei_client_blocker 使用会更加方便。每次配置这个 Client_Blocker 都需要开启 qBittorrent  的web ui 功能，然后填充以下三行
clientUsername 字段和 clientPassword 字段是自己设定的，每次可以直接在 qBittorrent 的设置里面修改， 点击确认即可。 clientURL 则参考 deekpseek 给出的答案：

>    clienturl 通常是 Web UI 的访问地址，格式为：http://<IP地址>:<端口>。
>    默认地址：http://localhost:8080。
>   如果 qBittorrent 运行在其他设备上，将 localhost 替换为设备的 IP 地址。



```
	"clientURL": "http://localhost:8080",
	"clientUsername": "设定的username",
	"clientPassword": "自己设定的密码",
```



