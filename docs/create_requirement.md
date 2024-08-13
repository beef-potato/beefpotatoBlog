# 创建requirement.txt

https://stackoverflow.com/questions/31684375/automatically-create-file-requirements-txt


```pwsh
pip install pipreqs

pipreqs path/to/project
```

eg.

```cmd
PS D:\code\python\galPicRestore\compresskit> pipreqs .
INFO: Not scanning for jupyter notebooks.
WARNING: Import named "Pillow" not found locally. Trying to resolve it at the PyPI server.
WARNING: Import named "Pillow" was resolved to "pillow:10.4.0" package (https://pypi.org/project/pillow/).
Please, verify manually the final list of requirements.txt to avoid possible dependency confusions.
INFO: Successfully saved requirements file in .\requirements.txt
```

```txt title="requirements.txt"
Pillow==10.4.0

```

实际上正如后面的回答提到的，还有一个版本的答案：

```
pip3 freeze > requirements.txt  # Python3
pip freeze > requirements.txt  # Python2

```

eg.

```
(galPicRestore) PS D:\code\python\galPicRestore\compresskit> ls

    Directory: D:\code\python\galPicRestore\compresskit

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a---           2024/8/13     9:57            306 compressPicForWeb.ps1
-a---           2024/8/13    10:27           1809 compressPicForWeb.py
-a---           2024/8/13    10:33            185 README.md
-a---           2024/8/13    10:40             16 requirements.txt

(galPicRestore) PS D:\code\python\galPicRestore\compresskit> pip freeze > req.txt
(galPicRestore) PS D:\code\python\galPicRestore\compresskit> cat .\req.txt
cffi==1.17.0
charset-normalizer==3.3.2
cryptography==43.0.0
pdfminer.six==20231228
pdfplumber==0.11.3
pillow==10.3.0
pycparser==2.22
pypdfium2==4.30.0
pyperclip==1.9.0
```

这个方法的缺点是会有很多不必要的包在里面，即使你的python脚本什么包都没用，所以还是装一个pipreqs省事

