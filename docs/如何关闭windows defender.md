
[前文](./pwshBonus.md)

## 彻底关闭windows defender

### ui手动关闭

实时防护在*病毒和威胁防护设置*里有一个ui，手动点击就可以关闭了。`get-mppreference`验证是成功的。有趣的是，如果手动使用pwsh的set-mppreference，开启实时防护，反而没法开启。换句话说，windows阻止了
所有以这类简单脚本操作的形式关闭windows defender的可能。
下面都是失败的尝试，除了注册表那个。


### pwsh脚本

```pwsh
ParserError:
Line |
   1 |  Stop-Service -Name WinDefend -Force
     |  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
     | This script contains malicious content and has been blocked by your antivirus software.
```
出于某种原因，上述命令不仅没有用，还会触发报错，因此直接使用脚本停用win defender似乎是行不通的。

### Group Policy Editor

先说结果：不行

```pwsh
DisableRealtimeMonitoring                             : False
```

方法：

1. `win+r`, type `gpedit.msc`
2. computer configuration > administrative templates > windows components > windows defender antivirus > real-time protection
3. double click `turn off real-time protection`, `enable`, `apply`

### 注册表编辑

For users comfortable with editing the Windows Registry, you can disable real-time protection by modifying registry keys. Note that this method involves a higher risk of system instability if done incorrectly.

1. **Open Registry Editor**:
   - Press `Win + R`, type `regedit`, and press Enter.

2. **Navigate to**:
   - `HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows Defender\Real-Time Protection`.

3. **Modify or Create DWORD Value**:
   - If `DisableRealtimeMonitoring` does not exist, create a new DWORD value named `DisableRealtimeMonitoring`.
   - Set its value to `1`.

4. **Restart Your Computer**.

### Note

Disabling real-time protection can expose your system to security risks. It is recommended to re-enable it as soon as possible and only use these methods temporarily. Always ensure that you have other security measures in place if you choose to disable Windows Defender temporarily.

实际上这个方法我没有尝试