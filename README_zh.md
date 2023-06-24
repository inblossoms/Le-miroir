<p align="center">
<img height="200" src="./assets/mirror.png" alt="le-miroir">
</p>
<p align="center"> <a href="./README.md">English</a> | 简体中文</p>

Le miroir 可以帮助您更方便地获得您需要的仓库。它就像一个镜像，不需要克隆，它只需要一个 'owner/repo' 来获取目标存储库，你可以使用 'le' 命令来使用它。

<br>

## Install

```
# install Le-miroir
npm i -g le-miroir
```

<br>

## Options

- `le init` - 生成你的本地项目。
- `le create` - 模板标记列表。
- `le list` - 模板列表。
- `le remove` - 删除列表项。
- `le clear` - 清空列表。

<br>

## Usage

<details>
<summary>INIT</summary>

```js
// Method 1
// eg: le init inblossoms/Le-miroir mirror[local folder name]
le init owner/repo project-name

// Method 2
// eg: le init mirror[your mark template] inblossoms/Le-miroir
le init template-index-name project-name
```

</details>
<br>

<details>
<summary>MARK</summary>

```js
le mark

# ? Please mark your warehouse: <Template index name>
# ? Please enter the warehouse address: <owner/repo>
```

</details>
<br>
<details>
<summary>REMOVE</summary>

```js
le remove

# ? Remove the name of the repository you want to delete: <Template index name>
```

</details>

## Feature

- 支持使用 'owner/repo' 作为寻址方法下载目标仓库
- 支持标记存储库以供以后查看和下载。
- 支持删除 | 清除本地仓库列表项。

## License

[MIT](./license)
