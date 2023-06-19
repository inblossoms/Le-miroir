const actions = require("./actions");
const path = require("path");
// 解析用户参数
const { Command, Option } = require("commander");
const program = new Command();

Reflect.ownKeys(actions).forEach((action) => {
  program
    .command(action) // cof name
    .alias(actions[action].alias)
    .description(actions[action].description)
    .action(() => {
      if (action === "*") {
        console.log("*", actions[action].description);
      } else {
        console.log("finsh:", actions[action].params);
        // process.argv 当前返回路径全部信息
        require(path.resolve(__dirname, action))(...process.argv.slice(3));
      }
    });
});

// 自定义监听事件
program.on("--help", () => {
  console.log("\n\nAll commands:");

  Reflect.ownKeys().forEach((command) => {
    return actions[command];
  });
});

program.parse();
