本站用的是mkdocs + github pages + material-mkdocs

## 前置工具

- node.js + npm, windows 推荐使用 [nvm-windows](https://github.com/coreybutler/nvm-windows)
- mkdocs, 使用pip安装，所以需要 python. [mkdocs](https://www.mkdocs.org/user-guide/writing-your-docs/)
- github pages, git. 


## 添加图片

把 `imgs` 文件夹放到docs下面，然后在任意md文件中相对路径引用，就可以普通地显示图片了。类似下面这样，`imgs`文件夹不会显示在网页端

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
```

