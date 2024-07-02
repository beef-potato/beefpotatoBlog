随意搭建的网站，不定期更新

mkdocs居然可以实时编辑网页，还挺不错的。不过缺点是没法自动把新建的文件放到mkdocs.yaml文件里面，具体架构如何还是手工修改的。

## Commands

* `mkdocs new [dir-name]` - Create a new project.
* `mkdocs serve` - Start the live-reloading docs server.
* `mkdocs build` - Build the documentation site.
* `mkdocs -h` - Print help message and exit.

## Project layout

    mkdocs.yml    # The configuration file.
    docs/
        index.md  # The documentation homepage.
        ...       # Other markdown pages, images and other files.
