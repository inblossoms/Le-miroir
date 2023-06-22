const actions = require("./actions");

const path = require("path");
const { Command } = require("commander");
const program = new Command();

const { version } = require("../package.json");

program
  .name("ccli")
  .description("Quickly generate new web applications.")
  .version(`version number: ${version}`);

Reflect.ownKeys(actions).forEach((command) =>
  program
    .command(command)
    .description(`${actions[command].description}`)
    .option(`${actions[command].option}`)
    .action(() => {
      if (command === "*") {
        console.log(actions[command].description);
        program.showHelpAfterError(
          "(You can get the instructions details via ‘--help’)"
        );
      } else {
        // process.argv 当前返回路径全部信息

        console.log(...process.argv.slice(3));
        require(path.resolve(__dirname, command))(...process.argv.slice(3));
      }
    })
);

// 自定义监听事件
program.on("--help", () => {
  console.log("\n\nAll commands:");

  // Reflect.ownKeys().forEach((command) => {
  //   return actions[command];
  // });
});

program.parse(process.argv);
