const { Command } = require("commander");
const program = new Command();

const { version } = require("../package.json");

program
  .name("le")
  .description("  Quickly build your web app.")
  .version(`Version number: ${version}`)
  .command("init <template> <project>", "Generate a new project")
  .command("mark", "Mark your template")
  .command("list", "List of templates")
  .command("remove", "Eliminating template")
  .command("clear", "Clear the list of templates");

program.parse(process.argv);
