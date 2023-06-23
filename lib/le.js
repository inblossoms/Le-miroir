const { Command } = require("commander");
const program = new Command();

const { version } = require("../package.json");

program
  .name("le")
  .description("Quickly build your web app.")
  .version(`Version number: ${version}`)
  .command("create", "Generate a new project")
  .command("list", "List of templates")
  .command("delete", "Eliminating template")
  .command("init", "Generate a new project");

// 自定义监听事件
// program.on("--help", () => {
//   console.log("\n\nAll commands:");

//   // Reflect.ownKeys().forEach((command) => {
//   //   return actions[command];
//   // });
// });

program.parse(process.argv);
