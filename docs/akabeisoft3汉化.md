## 前言

最近弄这个汉化有点头昏脑胀，有些不容易搜索到的部分记录留档一下。

游戏：手垢塗れの堕天使
引擎：krkr z

## 问题1 封包

存在加密，不支持简单的免封包读取；汉化完大部分文本之后才发现这个问题，早知道就先测试一遍了。

关于krkrz引擎，参考 https://www.bilibili.com/video/BV1qQ4y1k7Gs/

建议使用 krkrextracter v4. 解包，universal patch [README](https://github.com/xmoezzz/KrkrExtract/blob/master/README.md)

把 `dill` `exe`两个文件拖到游戏文件root path, 然后点击universal path. 在root path里创建一个叫 `ProjectDir` 的文件夹，里面直接放上需要打包的ks等文件。

## 问题2 显示黑屏

可能有很多原因，一开始以为是没有中文字体，但是填写了日文一样黑屏。于是乎可能还是打包的问题，至少脚本结构这块应该是没问题的，编码也都是utf-16 le; 


