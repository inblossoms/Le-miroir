const program = require("commander");
const figlet = require("figlet");

const { version } = require("../package.json");
console.log(
  "\r\n" +
    figlet.textSync("le-npmirror", {
      font: "Graffiti",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 80,
      whitespaceBreak: true,
    }),
  "\r\n\n"
);
program
  .description("  Quickly build your web app.")
  .version(`Version number: ${version}`)
  .command("init <template> <project>", "Generate a new project")
  .command("mark", "Mark your template")
  .command("list", "List of templates")
  .command("remove", "Eliminating template")
  .command("clear", "Clear the list of templates");

// program.on("--help", () => {});

program.parse(process.argv);
