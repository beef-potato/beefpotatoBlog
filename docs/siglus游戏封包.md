
# siglus engine 打包问题

在镜像iso文件安装时会指定一个安装路径，内容用 shift-jis 编码保存在 reg.ini 文件中。同时默认盘的document文件夹下会创建一个同名文件夹用于保存 game data .
这个情况下，如果保留 reg.ini 文件直接打包，游戏无法检索到存档文件，并且如果安装路径不对，游戏 root folder path 名称不对都会报错。


---

解决方式是删除 reg.ini 文件， 在放置 **别人的汉化，认证补丁之后**， 再次运行游戏，如果能启动， 游戏会在自己的 root folder 下创建 savedata 文件夹，同时正常运行。

---

也有动态调试解决的方法，参考 dir-a 的视频，但是没有讲解，这个方法应该能自己做出认证补丁。

https://www.youtube.com/watch?v=-OhxbLQoJk8
