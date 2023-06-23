const fs = require("fs");
const inquirer = require("inquirer");
const chalk = require("chalk");

let tplObj = require(`${__dirname}/template`);
module.exports = async function () {
  let question = [
    {
      name: "name",
      type: "input",
      message: "Please mark your warehouse:",
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
          "Current template list information:"
        )}
				`);
        console.log(tplObj, "\n");
      }
    );
  });
};
