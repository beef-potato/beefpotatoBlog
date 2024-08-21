# Teakamamire no Danshi

## 前言

最近弄这个汉化有点头昏脑胀，有些不容易搜索到的部分记录留档一下。

游戏：手垢塗れの堕天使
引擎：krkr z

## 问题1 封包

存在加密，不支持简单的免封包读取；汉化完大部分文本之后才发现这个问题，早知道就先测试一遍了。

关于krkrz引擎，参考 https://www.bilibili.com/video/BV1qQ4y1k7Gs/

建议使用 krkrextracter v4. 解包，universal patch [README](https://github.com/xmoezzz/KrkrExtract/blob/master/README.md)

把 `dill` `exe`两个文件拖到游戏文件root path, 然后点击 `universal path` , 在root path里创建一个叫 `ProjectDir` 的文件夹，里面直接放上需要打包的ks等文件。

最后还是用了 `kirikiritools` 里的 `xp3patch.exe` + `version.dll`, 由于当时已经解决了读取问题，上面这个应该是可以用的。


## 问题2 显示黑屏

可能有很多原因，一开始以为是没有中文字体，但是填写了日文一样黑屏。于是乎可能还是打包的问题，至少脚本结构这块应该是没问题的，编码也都是utf-16 le; 

观察其他人的汉化补丁：https://2dfan.com/downloads/26075 , 作者 julixian.

其中的ks文件为未加密的shift-jis文本文件，而`append0.dat`, `patch1.dat` 均使用了加密处理，无法用常规的文本编码打开。

经过多次尝试，原来krkr识别的脚本必须是utf-16le with bom, 每个脚本文件头必须带有`\ufeff`的签名。于是脚本批量添加即可。

## 其他汉化者

[julixian](https://github.com/julixian?tab=stars), 目前没有公开的仓库，在2dfan发布了上面提到的补丁，常用的模型是sonnet.


## Teakamamire no Danshi ks特征分析

基于此添加适用于本仓库的正则表达式：

```
*p1|
正直、俺の人生はあまりいい事がなかったと思う。[np]
```
旁白文本

```
*p8|
@nm t="辰也" s=tat_0000
「この顔じゃなかったら……」[np]
```
对话文本，附有名字

```
@btt x=0   y=152 graphic="sp_branch1_整形する"   target="*branch_select1_1" recthit=false
@btt x=650 y=152 graphic="sp_branch1_整形しない" target="*branch_select1_2" recthit=false
```
选择支

工作量最小化的提取策略是只匹配[np]结尾的一行，跳过其他所有项目，姓名，选项不翻译，只要所有文本都存储在一行内就行。

### json_regex


```
00_skip=^@(?!(?:nm|btt|saudio)).*$
01_skip=^[*;]
10_search=^@nm\s*t="(?P<name>.+?)".*$
11_search=^@saudio\s*t="(?P<name>.+?)".*?front="(?P<message1>.+?)".+?back="(?P<message2>.+?)"$
12_search=^@btt x=\d*\s*y=\d* graphic="sp_branch1_(.*?)" .*
endStr=np
ctrlStr=^[A-Za-z]
```

!!! note "explanation"

    00：跳过所有非对话和选择支行，还有语音对话
    01：跳过控制语句
    10：搜索对话，以@nm t="name"为特征，并设置name为Name;
    11：h-scene里cv的文本和姓名，文本有front和back两个；
    12: 搜索选择文本；这部分可能需要修改，因为没有参照标记不好构建中文脚本；
    建议添加$, 因为多余的空格会干扰正则表达式


## 发布测试

!!! success

    目前已经在2dfan发布机翻补丁。

🌟🌟🌟





