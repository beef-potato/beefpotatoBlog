本来是想找一个sprite 动画替代live2d，但是我发现spritesheet问题多多，总之方法总结如下:

## 工具

https://naganeko.pages.dev/chibi-gif/ ，可以从spine2/3获得指定motion的frame截图或者gif图片

https://www.codeandweb.com/free-sprite-sheet-packer ， 从一系列图片合成为一张大的spritesheet

只要有spine源文件，就可以通过 spine-frame pics-sprite sheet获得目标图片，效果类似下图

![](./imgs/xinyue.png)

但是总体的效果还取决于动画本身的帧率，如果动画时间非常长，比如1.33s, 那么同样7frames一个循环就会有190ms的延迟, 效果如下：

![](./imgs/salatuojia.gif)

对比上面的动画

![](./imgs/xinyue.gif)

肉眼可见的卡顿感，如果需要类似后者的效果则需要加载一张28frame的sprite sheet, 或许偏离最初用sprite sheet的目的了。
