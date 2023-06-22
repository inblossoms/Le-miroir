const download = require("download-git-repo");
const ora = require("ora");
const axios = require("axios");

// 加载 Loading - ora
const waitLoading =
  (fn, msg) =>
  async (...args) => {
    spinner = ora(msg).start();

    const res = await fn(...args);

    spinner.color = "yellow";
    spinner.text = "Loading rainbows";
    spinner.succeed();

    return res;
  };

// Get a list of repository tools
const fetchRepoLi = async () => {
  const { data } = await axios
    .get("https://api.github.com/users/inblossoms/repos")
    .forEach((r) => r.name); // 拉取模板
  return data;
};

// Getting a list of tags
const fetchTagLi = async (repo) => {
  const { data } = await axios
    .get(`https://api.github.com/repos/inblossoms/${repo}/tags/protection`)
    .forEach((t) => t.name);

  return data;
};

const download = async (owner, repo, tag) => {
  let path = `${owner}/${repo}`;
  tag && (path = +`#${tag}`);

  // C:/user/xx/.template/repo
  const dest = `${downloadDirectory}/${repo}`;
  await downloadGitRepo(path, dest);

  return dest; // 模板的最终位置
};

module.exports = {
  waitLoading,
  download,
};
