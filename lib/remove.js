#!/usr/bin/env node

const fs = require("fs");
const inquirer = require("inquirer");
const chalk = require("chalk");
const tplObj = require(`${__dirname}/template`);

module.exports = function () {
  let question = [
    {
      type: "",
      name: "name",
      message: "Remove the name of the repository you want to delete:",
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

    deTplInfo = `${name}: ${tplObj[name]}`;
    delete tplObj[name];

    // TODO eliminate - 剔除模板列表中指定的个别项
    fs.writeFile(
      `${__dirname}/template.json`,
      JSON.stringify(tplObj),
      "utf-8",
      (err) => {
        if (err) console.log(err);

        console.log(`
					\n${chalk.green("Deleted successfully!\n\n")}${chalk.grey("Details: ")}
				`);
        console.log(`  ${deTplInfo}`, "\n");
      }
    );
  });
};
