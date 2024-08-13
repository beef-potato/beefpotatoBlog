# 移除不必要的pip模组

```
pip help uninstall
```

查看删除指令帮助


先激活相关环境，如果不小心在主环境安装了不需要的库：

```
deactivate 
pip freeze > uninstall_modules.txt
pip uninstall -r .\uninstall_modules.txt -y


```
deactivate , 退出虚拟环境；
pip freeze > uninstall_modules.txt ， 导出所有包
pip uninstall -r .\uninstall_modules.txt -y ， 删除所有包，确认


结果：

```
PS D:\code\python> pip list
Package Version
------- -------
pip     24.0

```

😎