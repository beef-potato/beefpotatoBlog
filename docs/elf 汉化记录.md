# elf 汉化记录

## 失败的尝试

今天尝试elftools这个工具，调试了半天还是一头雾水。依赖项包括meson, ninja。 虽然meson安装并不费事，但是在本地编译，meson需要用到pkg-config和cmake。 
在下载pkg-config之后我发现单纯添加到 `windows` 环境变量并不足以让meson识别pkg-config, windows自己也不行。 总之无果。。。有机会再试试

## 工作流程

自己绘制了大致的流程:


![](https://github.com/beef-potato/picx-images-hosting/raw/master/blog/elf-汉化流程.64dqxcne75.webp)

结果我解码用到的工具是 [Al5WinScriptTool](https://github.com/TesterTesterov/AI5WINScriptTool) ,解包得到的文本是txt 格式 shift-jis 编码的脚本文件。脚本文件格式大致如下：

```txt
#1-TEXT
[
    "つむぎ"
]
#1-NEW_LINE
[
    0
]
#1-TEXT
[
    "「そっ、そんなに見ないでください……恥ずかしいですぅ……」"
]

```

通常带有文本的内容会有 `#x-TEXT` 标签，有一个问题是 `#SYS TEXT` 里的文本不管是 shift-jis 还是 utf-8 都是乱码。结果导致无法完全解读，于是脚本无法执行，最理想的结果是能够没有乱码地解读所有的文本。

```txt
#1-W_FLAG_SET
[
    16,
    [
        "*STRUCT*",
        "RAW",
        0,
        "STRUCT_END",
        []
    ],
    [
        "*GROUP*"
    ]
]
#0-1d
#1-SYSTEM_TEXT
[
    "\u0001�"
]
```