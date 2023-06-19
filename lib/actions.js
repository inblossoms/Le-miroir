const { version } = require("../package.json");

module.exports = actions = {
  "--Version": {
    alias: "-v",
    description: "output current version number",
    params: `${version}`,
  },
  "*": {
    alias: "",
    description: "command not found",
    params: "",
  },
};
