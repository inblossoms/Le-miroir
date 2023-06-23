#!/usr/bin/env node

const download = require("download-git-repo");
const program = require("commander");
const chalk = require("chalk");
const ora = require("ora");
const tplObj = require(`${__dirname}/template`);
// const { waitLoading, download } = require("./utils");

module.exports = function () {
  program
    .usage("<template-name> [project-name]")
    .description("  Generate a new project");
  program.parse(process.argv);

  // 当没有输入参数的时候给个提示
  if (program.args.length < 1) return program.help();

  // ccli init tep-name:param[0] project-name:params[1]
  let templateName = program.args[0];
  let projectName = program.args[1];

  url = tplObj[templateName];
  tplObj[templateName] = url.replace(/[\u0000-\u0019]/g, "");

  if (!tplObj[templateName]) {
    console.log(chalk.red());
    console.log(
      chalk.red(
        "\n ❗Please mark your warehouse! Please make sure the warehouse address is correct!\n "
      )
    );
    return;
  }

  if (!projectName) {
    console.log(
      chalk.red(
        "\n ❗Project should not be empty! Please make sure the warehouse address is correct!\n "
      )
    );
    return;
  }

  console.log(chalk.white("\n Start generating... \n"));
  const spinner = ora(" Downloading...");
  spinner.start();

  // TODO 对拉取后的模板进行本地缓存

  // download(url, projectName, () => {});
  download(url, projectName, (err) => {
    if (err) {
      spinner.fail();
      console.log(chalk.red(`Generation failed. ${err}`));
      return;
    }
    // 结束加载图标
    spinner.succeed();

    console.log(
      `${chalk.green(
        "\n Generation completed!"
      )}\n\n To get started: \n\n    cd ${projectName} \n`
    );
  });
};
