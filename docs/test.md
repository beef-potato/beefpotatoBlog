# 测试页面

这个页面是拿来测试的，没什么用处。

![](imgs/miku.jpg)
pixiv bison仓鼠 的miku， 可爱(●'◡'●)


## admonition

可以在markdown简单地使用一些附加内容：

```markdown

!!! note

    喵喵喵？(。・ω・。)

```


!!! note

    喵喵喵？(。・ω・。)


### 改变标题

```
!!! note "猫"

    喵喵喵？


```


!!! note "猫"

    喵喵喵？

### 隐藏标题

```
!!! note ""

    ~~~?

```


!!! note ""

    ~~~?


### 折叠块

```
??? note "猫"

    喵喵喵？

```


??? note "猫"

    喵喵喵？

### 行内块

```
!!! inline end "cat"
    meow??

```

!!! inline end "cat"
    meow??

发生了什么？
持续几行为止？

Important: admonitions that use the inline modifiers must be declared prior to the content block you want to place them beside. If there's insufficient space to render the admonition next to the block, the admonition will stretch to the full width of the viewport, e.g., on mobile viewports.

## 内置的所有admonition展示

!!! abstract
    喵喵喵？

!!! note
    喵喵喵？

!!! info
    喵喵喵？

!!! tip
    喵喵喵？

!!! success
    喵喵喵？

!!! question
    喵喵喵？

!!! warning
    喵喵喵？

!!! failure
    喵喵喵？

!!! danger
    喵喵喵？

!!! bug
    喵喵喵？

!!! example
    喵喵喵？

!!! quote
    喵喵喵？

