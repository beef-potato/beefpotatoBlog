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

## mppreference

```pwsh
Set-MpPreference -DisableRealtimeMonitoring $true
```

上述命令会暂时关闭windows defender 的扫描功能，将`$true`修改为`$flase`开启扫描功能。
此外`get-mppreference`命令可以或许很多参数，其中可能常用的：

- **DisableRealtimeMonitoring**：如果为 `True`，则表示实时监控被禁用。
- **UILockdown**：如果为 `True`，则表示 Windows Defender 的 UI 被锁定。
- **DisableBehaviorMonitoring**：如果为 `True`，则表示行为监控被禁用。
- **DisableOnAccessProtection**：如果为 `True`，则表示访问保护被禁用。
- **SignatureDisableUpdateOnStartupWithoutEngine**：如果为 `True`，则表示在没有引擎的情况下启动时禁用签名更新。

### 示例输出

以下是 `Get-MpPreference` 命令可能返回的一些示例信息：

```powershell
PS C:\> Get-MpPreference

DisableRealtimeMonitoring           : False
UILockdown                          : False
DisableBehaviorMonitoring           : False
DisableOnAccessProtection           : False
SignatureDisableUpdateOnStartupWithoutEngine : False
...
```

`DisableRemovableDriveScanning   `, 这个应该是针对外部存储介质的扫描。

### 问题

尽管我调用了管理员权限运行pwsh, `Set-MpPreference -DisableRealtimeMonitoring $true`，实际上使用`get-mppreference`检查参数并没有变成ture.

关于这一点，pwsh的相关文档没有什么说明: [Set-MpPreference的说明](https://learn.microsoft.com/en-us/powershell/module/defender/set-mppreference?view=windowsserver2022-ps)

作为bonus有点多了，后面的放到[这里](./如何关闭windows%20defender.md)
