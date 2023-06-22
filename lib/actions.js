module.exports = actions = {
  create: {
    alias: "create",
    description: "Enter your project filename, default: inblossoms",
    option: `"-n, --name <string>", "Enter you project filename", "inblossoms"`,
  },
  "*": {
    alias: "",
    description: "command not found",
  },
};
