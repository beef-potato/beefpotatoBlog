# 汉化杂谈

经验主义的闲谈，介绍一些工具和工作流程，限于个人能力和时间，无法面面俱到。

## 闲话

心态放好，多休息。

**遇到问题尝试自行解决**，gpt, google, wiki, github, stack overflow是良师益友，多看文档，多翻issue。

注意提问的场合，[学会提问](https://github.com/tvvocold/How-To-Ask-Questions-The-Smart-Way)。

## 教程

一切的前提是 **翻墙**，或者寻找好心人的搬运资源；

基础的终端语言知识，一种即可比如pwsh/bash/cmd等等； 基础的python知识；Github仓库使用方法；

关于galgame汉化，网上有很多零散的教程，考虑效率，在此列出尽可能简短的仓库和视频教程链接：

[Dir-A 的bilibili主页](https://space.bilibili.com/8144708)，各种引擎的基础解包封包，认证回避都有提到，也可以到github上看看他推荐的学习方向。

[Galtransl， GPT/Newbing/Sakura等llm自动化翻译galgame方案](https://github.com/xd2333/GalTransl)， 请熟读 `README`， 基本上概括了galgame简单机翻的所有流程。

[SExtractor](https://github.com/satan53x/SExtractor), 我的几个[补丁翻译](https://2dfan.com/users/378986/downloads)使用的文本提取工具，文档写得有点晦涩(作者本人吐槽说自己懒)， 基本上遇到的问题都可以在issue里翻到，由于正则可以编写多行，自定义的程度很高，基本上llm翻译除了实际在显卡上运行以外，最花时间的可能就是编写正则，详情可以到我的相关汉化笔记里看看。

[SakuraLLM](https://huggingface.co/SakuraLLM), 针对galgame翻译进行优化的离线模型。

至于各种工具，基本上galgame翻译所使用的工具并不多，所以很多地方会重复提及，利用上文提到的工具，以及作者编写的说明文档，基本上可以走通解包-翻译-封包-读取的过程，提前用一两行文本测试也是很重要的。

## 工具集合

很多工具都是9年前的，或许会有更新，网上也会有下载链接，请以每个工具各自的github仓库为准：

https://github.com/Inori/FuckGalEngine/tree/master/Krkr


基本上我实际机翻的游戏都是17年之前的 `krkr 2/ krkr z`, `utf-16 le with bom`的编码脚本打包之后就可以读取，不需要重新加密。

krkr 2, 主要使用 xp3viewer, 可以完成解包和封包的工作, 将 xp3viewer.exe 和 xp3viewer.dll 放入游戏root path, 拖动游戏exe到xp3viewer.exe上打开，再拖动二进制`xp3`, `bin` 文件到解包区内就可以解包了; 打包将所有文件放到一个自建文件夹内, 一般命名为`patchX`，X为任意自然数，避免重复。

krkr z, 主要用 kirikiriTools 里的 krkrpatch.exe 和 version.dll, 通过免封包读取实现补丁;

## Galtransl

人名替换csv表会替换`json`里的`name`字段，如果没有替换标签文本且充分理解krkr标签读取逻辑，不建议使用，会导致[标签索引错误](https://2dfan.com/downloads/26730)，一般翻译文本的话不用管，这么一来如果设置了项目gpt字典，就会出现文本界面姓名是 きうら 但是在 message 里面是 `清羽` 的现象。

这里的取舍就看汉化者个人的时间和预期，最便利的方法就是无视冲突，稍微追求质量写gpt字典稳定人名翻译，追求完美就改name字段，并且尝试修改标签文本，我目前还没试过。

## 我的一些工具脚本

https://github.com/beef-potato/SExtractor/tree/main/pythonScripts

基本上就是编码转换，直接用emeditor批量打开和处理也可以，胜在简单，也不是很复杂。


