const fs = require("fs");
const inquirer = require("inquirer");
const ora = require("ora");
const chalk = require("chalk");

let tplObj = require(`${__dirname}/template`);
module.exports = async function () {
  let question = [
    {
      name: "name",
      type: "input",
      message: "",
      validate(val) {
        if (val === "") {
          return "FileName cannot be null!";
        }

        if (tplObj[val]) {
          return "Template has already existed!";
        } else {
          return true;
        }
      },
    },
    {
      name: "url",
      type: "input",
      message: "Please enter the warehouse address:",
      validate(val) {
        if (val === "") return "The url is required!";
        return true;
      },
    },
  ];

  await inquirer.prompt(question).then((answers) => {
    let { name, url } = answers;
    tplObj[name] = url.replace(/[\u0000-\u0019]/g, "");

    fs.writeFile(
      `${__dirname}/template.json`,
      JSON.stringify(tplObj),
      "utf-8",
      (err) => {
        if (err) console.log(err);

        console.log(`
					\n${chalk.green("Create successfully!\n\n")}${chalk.grey(
          "The latest template list is: "
        )}
				`);
        console.log(tplObj, "\n");
      }
    );
  });
};

// module.exports = async function (pn) {
//   let repos = [];

//   // 提取模板列表
//   repos = await waitLoading(fetchRepoLi, "Loading...");

//   // 获取项目列表 [vue, react, ...]
//   // repos.push(await fetchRepoLi()); // 因为我们获取的并不是一个项目组 所以要多次请求获取不同的仓库
//   // repos.push(await fetchRepoLi());
//   // repos.push(await fetchRepoLi());

//   repos = repos.map((r) => r.name);
//   console.log(repos);

//   // select project - inquirer
//   const { repo, owner } = await inquirer.promat({
//     name: "repo",
//     owner: "owner",
//     type: "list",
//     choices: repos,
//     message: "select repo",
//   });
//   console.log(repo);

//   const tags = await waitLoading(fetchTagLi, "loading tags ...")(owner, repo);
//   tags = tags.map((t) => t.name);

//   // select project tag - inquirer
//   const { tag } = await inquirer.promat({
//     name: "tag",
//     type: "list",
//     choices: tags,
//     message: "select tag",
//   });
//   console.log(tag);

//   // 将拉取的模板进行存储 - download-git-repo
//   let catalog = await waitLoading(download, "loading download ...")(
//     owner,
//     repo,
//     tag
//   );
//   //
// };

// const fetchRepoLi = async () => {
//   const { data } = await [].forEach((r) => axios.get(r)); // 拉取模板
//   return data;
// };

// const fetchTagLi = async (owner, repo) => {
//   const { data } = await axios.get(
//     `https://api.github.com/repos/${owner}/${repo}/tags/protection`
//   );

//   return data;
// };

// 加载 Loading - ora
const waitLoading =
  (fn, msg) =>
  async (...args) => {
    spinner = ora(msg).start();

    const res = await fn(...args);

    spinner.color = "yellow";
    spinner.text = "Loading rainbows";
    spinner.succeed();

    return res;
  };

//
// const download = async (owner, repo, tag) => {
//   let path = `${owner}/${repo}`;
//   tag && (path = +`#${tag}`);

//   // C:/user/xx/.template/repo
//   const dest = `${downloadDirectory}/${repo}`;
//   await downloadGitRepo(path, dest);

//   return dest; // 模板的最终位置
// };
