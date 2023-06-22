#!/usr/bin/env node

const fs = require("fs");
const inquirer = require("inquirer");
const chalk = require("chalk");
const tplObj = require(`${__dirname}/template`);

module.exports = function () {
  let question = [
    {
      name: "name",
      message: "Enter the name of the repository you want to delete:",
      validate(val) {
        if (val === "") {
          return "Name is required!";
        } else if (!tplObj[val]) {
          return "Template does not exist!";
        } else {
          return true;
        }
      },
    },
  ];

  inquirer.prompt(question).then((answers) => {
    let { name } = answers;
    delete tplObj[name];
    // 更新 template.json 文件
    fs.writeFile(
      `${__dirname}/template.json`,
      JSON.stringify(tplObj),
      "utf-8",
      (err) => {
        if (err) console.log(err);

        console.log(`
					\n${chalk.green("Deleted successfully!\n\n")}${chalk.grey(
          "The latest template list is: "
        )}
				`);
        console.log(tplObj, "\n");
      }
    );
  });
};
