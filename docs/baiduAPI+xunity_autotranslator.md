

百度翻译的api只需注册就能申请到免费的翻译额度，实名后每个月100W字符。

[xunity autotranlator](https://github.com/bbepis/XUnity.AutoTranslator)支持使用百度的api翻译，配置好相关文件以后修改`Config.ini`:

```ini
[Service]
Endpoint=Baidu
FallbackEndpoint=DeepLTranslate

[General]
Language=zh
FromLanguage=ja

[Behaviour]

OverrideFontTextMeshPro=arialuni_sdf_u2019;https://github.com/bbepis/XUnity.AutoTranslator/issues/542 // https://www.bilibili.com/read/cv15640348/

[Baidu]
BaiduAppId=xxx
BaiduAppSecret=xxx
DelaySeconds=1


```

随后运行程序，检查翻译结果。

顺便，DeepL的翻译api似乎是免费的，因此直接使用 `Endpoint=DeepLTranslate` 也可以。



