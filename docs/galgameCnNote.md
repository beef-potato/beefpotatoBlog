# 汉化杂谈

经验主义的闲谈，介绍一些工具和工作流程。

工具集合，很多工具都是9年前的，或许会有更新，网上也会有下载链接：

https://github.com/Inori/FuckGalEngine/tree/master/Krkr

基本上我实际机翻的游戏都是17年之前的 `krkr 2/ krkr z`, `utf-16 le with bom`的编码脚本打包之后就可以读取，不需要重新加密。

krkr 2, 主要使用 xp3viewer, 可以完成解包和封包的工作, 将 xp3viewer.exe 和 xp3viewer.dll 放入游戏root path, 拖动游戏exe到xp3viewer.exe上打开，再拖动二进制`xp3`, `bin` 文件到解包区内就可以解包了; 打包将所有文件放到一个自建文件夹内, 一般命名为`patchX`，X为任意自然数，避免重复。

krkr z, 主要用 kirikiriTools 里的 krkrpatch.exe 和 version.dll, 通过免封包读取实现补丁;

## Galtransl

人名替换表会替换`json`里的`name`字段，如果没有替换标签文本不建议使用，会导致标签索引错误，一般翻译文本的话不用管，这么一来如果设置了项目gpt字典，就会出现文本界面姓名是 きうら 但是在 message 里面是 `清羽` 的现象。

这里的取舍就看汉化者个人的时间和预期，最便利的方法就是无视冲突，稍微追求质量写gpt字典稳定人名翻译，追求完美就改name字段，并且尝试修改标签文本，我目前还没试过。








