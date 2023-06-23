<p align="center">
<img height="200" src="./assets/mirror.png" alt="le-miroir">
</p>
<p align="center"> English | <a href="./README_zh.md">简体中文</a></p>

Le miroir can help you obtain the warehouse you need more conveniently. It is like a mirror, without the need for cloning, it only requires a 'owner/repo' to obtain the target repository, and you can use the 'le' command to use it.

<br>

## 📦 Install

```
# install Le-miroir
npm i -g Le-miroir
```

<br>

## 🌈 Options

- `le init` - Generate a new project.
- `le mark` - Mark your template
- `le list` - List of templates
- `le remove` - Eliminating template
- `le clear` - Clear the list of templates

<br>

## 🌰 Usage

<details>
<summary>INIT</summary>

```js
// Method 1：
// eg: le init inblossoms/Le-miroir mirror[local folder name]
le init owner/repo project-name

// Method 2：
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

<br>
# ⭐ Feature

- Supports downloading the target warehouse using 'owner/repo' as the addressing method
- Support for marking repositories for later viewing and downloading.
- Support deletion | clearing of local warehouse tag list.

## License

[MIT](./license)
