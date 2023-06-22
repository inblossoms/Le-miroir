// 用户常量
const { version } = require("../package.json");

// 存储模板位置
const downloadDirectory = `${
  process.env[process.platform === "darwin" ? "HOME" : "USERPROFILE"]
}/.template`;

module.exports = {
  version,
  downloadDirectory,
};
