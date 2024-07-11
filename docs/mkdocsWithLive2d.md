这个网站使用了live2d-widget, https://github.com/stevenjoezhang/live2d-widget

目前如果尝试在本网站加载新的页面，打开f12可以发现每次都加载了一次live2d的纹理集，显然这个方式并不节约时间和算力。网站的加载方式是添加一个live2d.js, 实际上就是上面仓库里的 autoload.js, 然后在mkdocs.yml里添加(启用了material-mkdocs)

```yml
extra_javascript:
  - javascripts/live2d.js
```

不知道还有没有自定义html页面和防止重新加载的方法，不然一个文字博客加载速度这么慢实在是遗憾。