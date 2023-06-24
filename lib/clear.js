#!/usr/bin/env node

const fs = require("fs");
const chalk = require("chalk");
const tplObj = require(`${__dirname}/template`);

module.exports = function () {
  let deTplInfo = {};

  Reflect.ownKeys(tplObj).forEach((tpl) => {
    deTplInfo[tpl] = tplObj[tpl];
    delete tplObj[tpl];
  });

  fs.writeFile(
    `${__dirname}/template.json`,
    JSON.stringify(tplObj),
    "utf-8",
    (err) => {
      if (err) console.log(err);

      console.log(`
					\n${chalk.green("Deleted successfully!\n\n")}${chalk.grey("Details: ")}
				`);
      console.log("  ", deTplInfo, "\n");
    }
  );
};
