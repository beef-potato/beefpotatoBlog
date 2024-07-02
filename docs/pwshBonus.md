大致写写平时windows pwsh上常用的命令和脚本什么的

## 获取文件树

[这篇回答解释了如何用 pwsh 获取文件夹的树状结构](https://stackoverflow.com/questions/27447014/use-powershell-to-generate-a-list-of-files-and-directories)

```pwsh
$Path = "C:\temp"
Tree $Path /F | Select-Object -Skip 2 | Set-Content C:\temp\output.tkt
```

```text
│  mkdocs.yml
│
├─docs
│  │  about.md
│  │  index.md
│  │  mkdocs搭建网站.md
│  │  pwshBonus.md
│  │  test.md
│  │
│  └─imgs
│          miku.jpg
│
└─site
    │  404.html
    │  index.html
    │  sitemap.xml
    │  sitemap.xml.gz
    │
...以下略
```

